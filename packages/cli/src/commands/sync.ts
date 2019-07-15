import { Command, flags } from '@oclif/command'
import { cli } from 'cli-ux'
import { prisma, POST_STATUS } from '@spherehq/database'

import * as md5File from 'md5-file'
import * as markdown from 'remark-parse'
import * as remark2rehype from 'remark-rehype'
import * as vfile from 'to-vfile'
import * as toString from 'mdast-util-to-string'
import * as remark2retext from 'remark-retext'
import * as stringify from 'remark-stringify'
import * as english from 'retext-english'
import * as visit from 'unist-util-visit'
import * as path from 'path'
import * as fs from 'fs-extra'
import * as inquirer from 'inquirer'
import * as request from 'request'
import chalk from 'chalk'

const remark = require('remark')
const selectAll = require('unist-util-select').selectAll
const slugify = require('@sindresorhus/slugify')
const array = require('lodash/array')
const terminalLink = require('terminal-link')

function isUrl(s: string): boolean {
  const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  return regexp.test(s)
}

const processImages = (
  images: { alt: string; url: string }[],
  dir: string,
): { alt: string; url: string }[] => {
  return images.map(image => {
    return {
      alt: image.alt,
      url: isUrl(image.url) ? image.url : path.join(dir, image.url),
    }
  })
}

const processMarkdown = (filename: string, contentDirectory: string) => {
  const processor = remark()
    .use(markdown)
    .use(remark2rehype)

  const content = processor.parse(
    vfile.readSync(path.join(contentDirectory, filename), 'utf8'),
  )

  const headings = selectAll('heading', content).filter(
    heading => heading.depth === 1,
  )

  const images = processImages(
    selectAll('* > image', content).map(
      (image: { alt: string; url: string }) => {
        return { alt: image.alt, url: image.url }
      },
    ),
    contentDirectory,
  )

  // @TODO reverse order (multiple headings of same depth)
  const title = headings.length > 0 ? toString(headings.shift()) : '' // Otherwise use filename excluding ext

  let wordCount = 0
  const count = () => {
    return transformer
    function transformer(tree) {
      function visitor(node) {
        if (node.type === 'WordNode') {
          wordCount = (wordCount || 0) + 1
        }
      }

      visit(tree, visitor)
    }
  }

  remark()
    .use(markdown)
    .use(
      remark2retext,
      remark()
        .use(english)
        .use(count),
    )
    .use(stringify)
    .process(vfile.readSync(path.join(contentDirectory, filename)))

  const timeToRead = () => {
    const time = Math.round(wordCount / 265)
    return time > 0 ? time : 1
  }

  const hash = md5File.sync(path.join(contentDirectory, filename))
  const featuredImage = images.shift()

  return {
    title,
    featuredImage,
    content,
    filename,
    images,
    timeToRead: timeToRead(),
    fileHash: hash,
    slug: slugify(path.basename(filename, '.md')),
    isPublished: false,
    status: 'DRAFT' as POST_STATUS,
  }
}

export default class Sync extends Command {
  static description =
    "Synchronize your sphere's content with local/remote copies"

  static examples = [`$ sphere sync example.md`]

  static flags = {
    help: flags.help({ char: 'h' }),
    force: flags.boolean({ char: 'f' }),
    basePath: flags.string({
      char: 'p',
      description: 'specify path to sync local markdown files from',
    }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(Sync)

    const contentDirectory = flags.basePath
      ? path.resolve(flags.basePath)
      : path.resolve(process.cwd())

    if (!fs.existsSync(contentDirectory)) {
      this.error(`Given basePath: ${flags.basePath} doesn't exist`)
    }

    if (
      args.file &&
      !fs.existsSync(path.join(contentDirectory, args.file)) &&
      path.extname(args.file) === '.md'
    ) {
      this.error(`Given file: ${args.file} doesn't exist`)
    }

    cli.action.start('Processing content')
    fs.readdir(contentDirectory, async (err, files) => {
      if (err) {
        this.error(err)
      }

      let posts = !args.file
        ? files
            .filter(filename => path.extname(filename) === '.md')
            .map(filename => {
              return processMarkdown(filename, contentDirectory)
            })
        : [processMarkdown(args.file, contentDirectory)]

      cli.action.stop(`${posts.length} files to sync `)

      cli.action.start('Synchronizing content')
      const config: {
        alias: string
        aliasSlug: string
        emailAddress: string
      } = fs.readJSONSync(path.join(this.config.configDir, `config.json`))

      posts = await Promise.all(
        posts.map(async draftPost => {
          // Determine status of post
          const slug = `${config.aliasSlug}/${draftPost.slug}`

          const exists = await prisma.$exists.post({ slug })
          if (exists) {
            const post = await prisma.post({ slug })
            return {
              ...draftPost,
              isPublished: post.isPublished,
              status: post.status,
            }
          }

          return draftPost
        }),
      )

      posts.forEach(async post => {
        try {
          const slug = `${config.aliasSlug}/${post.slug}`
          await prisma.upsertPost({
            where: { slug },
            create: {
              title: post.title,
              // tslint:disable-next-line:object-shorthand-properties-first
              slug,
              content: post.content,
              timeToRead: post.timeToRead,
              metadata: {
                create: {
                  fileHash: post.fileHash,
                  filename: post.filename,
                },
              },
              associatedWith: {
                connect: {
                  alias: config.alias,
                },
              },
              author: {
                connect: { emailAddress: config.emailAddress },
              },
            },
            update: {
              title: post.title,
              // tslint:disable-next-line:object-shorthand-properties-first
              slug,
              content: post.content,
              timeToRead: post.timeToRead,
              metadata: {
                upsert: {
                  create: {
                    fileHash: post.fileHash,
                    filename: post.filename,
                  },
                  update: {
                    fileHash: post.fileHash,
                    filename: post.filename,
                  },
                },
              },
              associatedWith: {
                connect: {
                  alias: config.alias,
                },
              },
              isPublished: post.isPublished,
              status: post.status,
            },
          })
        } catch (error) {
          this.error(error)
        }
      })

      cli.action.stop()

      let allPosts = await prisma.posts({
        where: { associatedWith: { alias: config.alias } },
      })

      if (allPosts.length > 0) {
        const { toPublish } = await inquirer.prompt([
          {
            name: 'toPublish',
            message: `Which post(s) would you like to publish/unpublish?`,
            type: 'checkbox',
            choices: allPosts.map(post => {
              return {
                name: post.title,
                value: post,
                checked: post.isPublished,
              }
            }),
            validate: () => {
              return true
            },
          },
        ])

        const previouslyPublished = allPosts.filter(post => post.isPublished)
        const toUnpublish = array.difference(previouslyPublished, toPublish)

        if (toUnpublish.length > 0) {
          this.log(
            chalk.red.bold(`We're going to unpublish the following posts: \n`),
          )
          await cli.wait(300)
          cli.table<{ title: string; slug: string; status: POST_STATUS }>(
            toUnpublish,
            {
              title: {
                header: 'Title',
                get: row => row.title,
              },
              link: {
                header: 'Link',
                get: row =>
                  terminalLink(
                    `open in browser`,
                    `https://sphere.sh/@${row.slug}`,
                    {
                      fallback: (_, link: string) => {
                        return link
                      },
                    },
                  ),
              },
            },
          )

          await cli.wait(300)
          const confirm = await cli.confirm(`Continue? ${chalk.bold('y/N')}`)

          if (confirm) {
            await Promise.all(
              toUnpublish.map(
                async post =>
                  await prisma.updatePost({
                    data: {
                      isPublished: false,
                      status: 'DRAFT',
                    },
                    where: { id: post.id },
                  }),
              ),
            )
          }
        }

        if (toPublish.filter(post => !post.isPublished).length > 0) {
          this.log(
            chalk.green.bold(`We're going to publish the following posts: \n`),
          )
          await cli.wait(300)
          cli.table<{ title: string; slug: string; status: POST_STATUS }>(
            toPublish,
            {
              title: {
                header: 'Title',
                get: row => row.title,
              },
              link: {
                header: 'Link',
                get: row =>
                  terminalLink(
                    `open in browser`,
                    `https://sphere.sh/@${row.slug}`,
                    {
                      fallback: (_, link: string) => {
                        return link
                      },
                    },
                  ),
              },
            },
          )

          await cli.wait(300)
          const confirm = await cli.confirm(`Continue? ${chalk.bold('Y/n')}`)

          if (confirm) {
            await Promise.all(
              toPublish.map(
                async post =>
                  await prisma.updatePost({
                    data: {
                      isPublished: true,
                      status: 'PUBLISHED',
                    },
                    where: { id: post.id },
                  }),
              ),
            )
          }
        }
      }

      allPosts = await prisma.posts({
        where: { associatedWith: { alias: config.alias } },
      })

      this.log(chalk.bold(`Here's a summary of all your posts: \n`))
      cli.wait(300)
      cli.table<{ title: string; slug: string; status: POST_STATUS }>(
        allPosts,
        {
          title: {
            header: 'Title',
            get: row => row.title,
          },
          status: {
            header: 'Status',
            get: row =>
              row.status === 'PUBLISHED'
                ? chalk.green(row.status)
                : chalk.gray(row.status),
          },
          link: {
            header: 'Link',
            get: row =>
              terminalLink(
                `open in browser`,
                `https://sphere.sh/@${row.slug}`,
                {
                  fallback: (_, link: string) => {
                    return link
                  },
                },
              ),
          },
        },
      )
    })
  }
}
