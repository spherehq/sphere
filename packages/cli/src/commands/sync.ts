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
import * as fs from 'fs'

const unified = require('unified')
const selectAll = require('unist-util-select').selectAll

const processMarkdown = (filename: string, contentDirectory: string) => {
  const processor = unified()
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

  unified()
    .use(markdown)
    .use(
      remark2retext,
      unified()
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
    slug: path.basename(filename, '.md'),
  }
}

export default class Sync extends Command {
  static description = "Synchronize your sphere's content with local copies"

  static examples = [`$ sphere sync example.md`]

  static flags = {
    help: flags.help({ char: 'h' }),
    force: flags.boolean({ char: 'f' }),
    basePath: flags.string({ char: 'p' }),
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
          },
        })
      })

      cli.action.stop()

      cli.table(posts, {
        name: { header: 'Title', get: row => row.title },
      })
    })
  }
}
