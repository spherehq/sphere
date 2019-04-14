const unified = require('unified')
const markdown = require('remark-parse')
const remark2rehype = require('remark-rehype')
const vfile = require('to-vfile')
const selectAll = require('unist-util-select').selectAll
const toString = require('mdast-util-to-string')
const remark2retext = require('remark-retext')
const stringify = require('remark-stringify')
const english = require('retext-english')
const visit = require('unist-util-visit')

export default () => {
  const processor = unified()
    .use(markdown)
    .use(remark2rehype)

  const content = processor.parse(vfile.readSync('example.md', 'utf8'))

  const headings = selectAll('heading', content).filter(
    heading => heading.depth === 1,
  )

  const title = headings.length > 0 ? toString(headings.pop()) : '' // Otherwise use filename excluding ext

  let wordCount = 0
  const count = () => {
    return counter

    function counter(tree) {
      visit(tree, visitor)

      function visitor(node) {
        if (node.type === 'WordNode') {
          wordCount = (wordCount || 0) + 1
        }
      }
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
    .process(vfile.readSync('example.md'))

  return [
    {
      title,
      content,
      timeToRead: () => {
        const time = Math.round(wordCount / 265)
        return time > 0 ? time : 1
      },
    },
  ]
}
