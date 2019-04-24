import { graphql } from 'gatsby'
import { AstContent } from '@spherehq/geometry/Components/AstContent'

const SphereTemplatePage = ({ data }) => {
  const toHast = require('mdast-util-to-hast')
  const prismjs = require('gatsby-remark-prismjs')
  const hastReparseRaw = require(`hast-util-raw`)
  const markdownAST = data.sphere.page.content
  const options = {
    classPrefix: 'language-',
    inlineCodeMarker: null,
    aliases: {},
    showLineNumbers: false,
    noInlineHighlight: false,
  }
  prismjs(Object.assign({ markdownAST }, {}), options)
  // @TODO create a node transformer plugin to do this on all sphere nodes
  return AstContent(
    hastReparseRaw(
      toHast(markdownAST, {
        allowDangerousHTML: true,
      }),
    ),
  )
}

export default SphereTemplatePage

export const query = graphql`
  query SphereTemplatePageQuery($slug: String!) {
    sphere {
      page: post(where: { slug: $slug }) {
        content
      }
    }
  }
`
