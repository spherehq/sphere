import * as React from 'react'

import gql from 'graphql-tag'

import { Query } from 'react-apollo'

import SphereTemplatePage from '../../plugins/gatsby-source-user-spheres/templates/default'
import { PageRendererProps } from 'gatsby'

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

  const NotFound = (_: RouteComponentProps) => (
    <div>
      <h1>Page not found</h1>
    </div>
  )

  return (
    <Router location={props.location}>
      <ArticlePage path="/:sphere/:slug/" />
      <NotFound default />
    </Router>
  )
}
