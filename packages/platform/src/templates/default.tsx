import * as React from 'react'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import { Divider } from '@spherehq/geometry/Components/Divider'
import { CustomTable } from './../components/CustomTable'
import { UnorderedList, OrderedList } from './../components/List'
import { Container } from '@spherehq/geometry/Components/Container'
import { styled } from '@spherehq/geometry/Theme'

const ArticleContentDivider = () => (
  <div style={{ margin: '48px auto', width: '84px' }}>
    <Divider />
  </div>
)

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    hr: ArticleContentDivider,
    table: CustomTable,
    ul: UnorderedList,
    ol: OrderedList,
  },
}).Compiler

const StyledContainer = styled(Container)`
  padding-top: 0;

  ${props => props.theme.breakpoints.down('md')} {
    padding-top: 64px;
  }
`

const DefaultTemplatePage = ({ data }) => {
  const content = renderAst(data.page.htmlAst)

  return <StyledContainer limitWidth>{content}</StyledContainer>
}

export default DefaultTemplatePage

export const query = graphql`
  query DefaultTemplateQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
    }
  }
`
