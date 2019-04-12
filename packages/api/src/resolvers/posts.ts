const unified = require('unified')
const markdown = require('remark-parse')
const remark2rehype = require('remark-rehype')
const vfile = require('to-vfile')

export default () => {
  const processor = unified()
    .use(markdown)
    .use(remark2rehype)
  const tree = processor.parse(vfile.readSync('example.md', 'utf8').contents)
  return [{ content: tree }]
}
