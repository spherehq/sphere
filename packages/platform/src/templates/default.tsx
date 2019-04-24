import { graphql } from 'gatsby'
import { AstContent } from '@spherehq/geometry/Components/AstContent'

const DefaultTemplatePage = ({ data }) => {
  return AstContent(data.page.htmlAst)
}

export default DefaultTemplatePage

export const query = graphql`
  query DefaultTemplateQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
    }
  }
`
