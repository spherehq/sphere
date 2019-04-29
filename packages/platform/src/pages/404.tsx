import * as React from 'react'

import gql from 'graphql-tag'

import { Query } from 'react-apollo'
import { PageRendererProps } from 'gatsby'
import { styled } from '@spherehq/geometry/Theme'

import SphereTemplatePage from '../../plugins/gatsby-source-user-spheres/templates/default'

const StyledContainer = styled.div`
  max-width: 740px;
  margin-left: auto;
  margin-right: auto;
`
import { Router, RouteComponentProps } from '@reach/router'

export default (props: PageRendererProps) => {
  const ArticlePage = (
    props: RouteComponentProps<{ sphere: string; slug: string }>,
  ) => {
    const sphere = props.sphere || ``

    const APOLLO_QUERY = gql(`
    {
      page: post(where: { slug: "${sphere.substr(1, sphere.length)}/${
      props.slug
    }" }) {
        content
      }
    }
    `)
    return (
      <Query query={APOLLO_QUERY}>
        {({ data, loading, error = false }) => {
          if (loading) return SphereTemplatePage({ loading, data: {} })
          if (error) return <NotFound />

          if (data.page === null) return <NotFound />

          return SphereTemplatePage({ loading, data: { sphere: data } })
        }}
      </Query>
    )
  }

  const NotFound = (_: RouteComponentProps) => <div />

  return (
    <StyledContainer>
      <Router location={props.location}>
        <ArticlePage path="/:sphere/:slug/" />
        <NotFound default />
      </Router>
    </StyledContainer>
  )
}
