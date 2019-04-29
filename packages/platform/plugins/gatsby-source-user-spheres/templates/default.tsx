import * as React from 'react'
import Skeleton from 'react-loading-skeleton'

import { graphql } from 'gatsby'
import { AstContent } from '@spherehq/geometry/Components/AstContent'
import { styled } from '@spherehq/geometry/Theme'

const StyledContainer = styled.div`
  max-width: 740px;
  margin-left: auto;
  margin-right: auto;
`

const StyledImagePlaceholder = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  ${props => props.theme.breakpoints.up('md')} {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    left: 0;
    right: 0;
  }
`

const SphereTemplatePage = ({ data, loading = false }) => {
  if (loading) {
    return (
      <StyledContainer>
        <h1>
          <Skeleton />
        </h1>
        <StyledImagePlaceholder>
          <Skeleton height={387} />
        </StyledImagePlaceholder>
        <p>
          <Skeleton count={5} />
        </p>
        <p>
          <Skeleton count={2} />
        </p>
      </StyledContainer>
    )
  }

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
