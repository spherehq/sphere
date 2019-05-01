import * as React from 'react'
import rehypeReact from 'rehype-react'

import { Divider } from '../../Components/Divider'
import { Table } from '../../Components/Table'
import { UnorderedList, OrderedList } from '../../Components/List'
import { PreBlock, CodeBlock } from '../../Components/CodeBlock'
import { styled } from '../../Theme'

const ContentDivider = () => (
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

export const Image = props => {
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
    hr: ContentDivider,
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

export const AstContent = ast => {
  return <StyledContainer>{renderAst(ast)}</StyledContainer>
}
