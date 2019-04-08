import * as React from 'react'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import { Divider } from '@spherehq/geometry/Components/Divider'
import Table from '../components/Table'
import { UnorderedList, OrderedList } from '../components/List'

const ArticleContentDivider = () => (
  <div style={{ margin: '48px auto', width: '84px' }}>
    <Divider />
  </div>
)

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    hr: ArticleContentDivider,
    table: Table,
    ul: UnorderedList,
    ol: OrderedList,
  },
}).Compiler

const DefaultTemplatePage = ({ data }) => {
  console.log(data)
  const content = renderAst(data.page.htmlAst)

  return <React.Fragment>{content}</React.Fragment>
}

export default DefaultTemplatePage

export const query = graphql`
  query DefaultTemplateQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
    }
  }
`
