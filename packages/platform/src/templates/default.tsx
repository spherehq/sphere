import * as React from 'react'

import { graphql } from 'gatsby'

import { AstContent } from '@spherehq/geometry/Components/AstContent'
import { styled } from '@spherehq/geometry/Theme'
import { Container } from '@spherehq/geometry/Components/Container'

const StyledContainer = styled(Container)`
  padding: 32px;

  ${props => props.theme.breakpoints.up('md')} {
    padding: 64px 32px;
  }
`

const DefaultTemplatePage = ({ data }) => {
  return <StyledContainer>{AstContent(data.page.htmlAst)}</StyledContainer>
}

export default DefaultTemplatePage

export const query = graphql`
  query DefaultTemplateQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
    }
  }
`
