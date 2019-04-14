import { Command, flags } from '@oclif/command'
import { cli } from 'cli-ux'

import * as unified from 'unified'
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

  const title = headings.length > 0 ? toString(headings.pop()) : '' // Otherwise use filename excluding ext

  let wordCount = 0
  const count = () => {
    const counter = tree => {
      const visitor = node => {
        if (node.type === 'WordNode') {
          wordCount = (wordCount || 0) + 1
        }
      }

      visit(tree, visitor)
    }

    return counter
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

  return {
    title,
    content,
    timeToRead: timeToRead(),
    status: `PUBLISHED`,
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
      : path.resolve(__dirname)

    if (!fs.existsSync(contentDirectory)) {
      this.error(`Given basePath: ${flags.basePath} doesn't exist`)
    }

    if (args.file && !fs.existsSync(path.join(contentDirectory, args.file))) {
      this.error(`Given file: ${args.file} doesn't exist`)
    }

    fs.readdir(contentDirectory, async (err, files) => {
      if (err) {
        this.error(err)
      }

      const posts = !args.file
        ? files.map(filename => {
            return processMarkdown(filename, contentDirectory)
          })
        : [processMarkdown(args.file, contentDirectory)]

      cli.action.start('Processing content')
      await cli.wait(3000)
      cli.action.stop(`${posts.length} files to sync `)
      await cli.wait(3000)

      cli.action.start('Synchronizing content')
      await cli.wait(3000)
      cli.action.stop()

      cli.table(posts, {
        name: { header: 'Title', get: row => row.title },
        status: {
          get: row => row.status,
        },
      })
    })
  }
}
