import * as React from 'react'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import { Divider } from '@spherehq/geometry/Components/Divider'
import { Table } from '@spherehq/geometry/Components/Table'
import { UnorderedList, OrderedList } from '@spherehq/geometry/Components/List'
import { styled } from '@spherehq/geometry/Theme'

import { PreBlock, CodeBlock } from '../../../src/components/CodeBlock'

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
  margin: 0;
  padding: 8px;

  overflow: auto;
  background-color: #282a36;

  ${props => props.theme.breakpoints.up('md')} {
    display: inline-block;
    margin: 0 16px;
    min-width: 640px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 8px;
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

const Image = props => {
  const StyledImage = styled.img`
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;

    ${props => props.theme.breakpoints.up('md')} {
      border-radius: 3px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px;
      margin-left: 0;
      margin-right: 0;
      width: 100%;
      left: 0;
      right: 0;
    }
  `

  return <StyledImage {...props} />
}

const Link = props => <a {...props} target="__blank" />

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
    img: Image,
    a: Link,
  },
}).Compiler

const StyledContainer = styled.div`
  max-width: 740px;
  margin-left: auto;
  margin-right: auto;
`

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
  const content = renderAst(
    hastReparseRaw(
      toHast(markdownAST, {
        allowDangerousHTML: true,
      }),
    ),
  )
  return <StyledContainer>{content}</StyledContainer>
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
