import { Command, flags } from '@oclif/command'
import { cli } from 'cli-ux'
import { prisma } from '@spherehq/database'

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

const remark = require('remark')
const selectAll = require('unist-util-select').selectAll
const slugify = require('@sindresorhus/slugify')

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

  return {
    title,
    content,
    filename,
    timeToRead: timeToRead(),
    fileHash: hash,
    slug: slugify(path.basename(filename, '.md')),
  }
}

export default class Sync extends Command {
  static description = "Synchronize your sphere's content with local copies"

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

      const posts = !args.file
        ? files
            .filter(filename => path.extname(filename) === '.md')
            .map(filename => {
              return processMarkdown(filename, contentDirectory)
            })
        : [processMarkdown(args.file, contentDirectory)]

      cli.action.stop(`${posts.length} files to sync `)

      cli.action.start('Synchronizing content')
      try {
        const config: { alias: string } = fs.readJSONSync(
          path.join(this.config.configDir, `config.json`),
        )
        posts.forEach(async post => {
          await prisma.upsertPost({
            where: { slug: post.slug },
            create: {
              title: post.title,
              slug: post.slug,
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
            },
            update: {
              title: post.title,
              slug: post.slug,
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
            },
          })
        })
      } catch (error) {
        this.error(error)
      }

      cli.action.stop()

      cli.table<{ title: string }>(posts, {
        name: { header: 'Title', get: row => row.title },
      })
    })
  }
}
