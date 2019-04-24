import * as React from 'react'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import { Divider } from '@spherehq/geometry/Components/Divider'
import { Table } from '@spherehq/geometry/Components/Table'
import { UnorderedList, OrderedList } from '@spherehq/geometry/Components/List'
import { styled } from '@spherehq/geometry/Theme'

import { PreBlock, CodeBlock } from '../components/CodeBlock'

const ArticleContentDivider = () => (
  <div style={{ margin: '48px auto', width: '84px' }}>
    <Divider />
  </div>
)

const StyledCodeBlockWrapper = styled.div`
  display: block;
  margin-left: -32px;
  margin-right: -32px;
  overflow: hidden;

  ${props => props.theme.breakpoints.up('md')} {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
  }
`

const StyledCodeBlock = styled.div`
  display: block;
  margin: 0 0 1rem 0;
  padding: 8px;

  overflow: auto;
  background-color: #282a36;

  ${props => props.theme.breakpoints.up('md')} {
    display: inline-block;
    padding: 24px;
    margin: 32px 16px;
    min-width: 640px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 8px;
    transition: box-shadow 0.5s ease-in-out 0s;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.55) 0px 15px 40px;
    }
  }
`

const ContextAwareDiv = props => {
  return props.className === 'gatsby-highlight' ? (
    <StyledCodeBlockWrapper>
      <StyledCodeBlock>{props.children}</StyledCodeBlock>
    </StyledCodeBlockWrapper>
  ) : (
    <div {...props}>{props.children}</div>
  )
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    hr: ArticleContentDivider,
    table: Table,
    ul: UnorderedList,
    ol: OrderedList,
    div: ContextAwareDiv,
    pre: PreBlock,
    code: CodeBlock,
  },
}).Compiler

const StyledContainer = styled.div`
  max-width: 740px;
  margin-left: auto;
  margin-right: auto;
`

const DefaultTemplatePage = ({ data }) => {
  const content = renderAst(data.page.htmlAst)

  return <StyledContainer>{content}</StyledContainer>
}

export default DefaultTemplatePage

export const query = graphql`
  query DefaultTemplateQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
    }
  }
`
