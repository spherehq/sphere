import * as React from 'react'

import { graphql, Link } from 'gatsby'
import { styled } from '@spherehq/geometry/Theme'
import { Grid } from '@spherehq/geometry/Components/Grid'
import { Box } from '@spherehq/geometry/Components/Box'
import { Container } from '@spherehq/geometry/Components/Container'
import { ArticleCard } from '@spherehq/geometry/Components/ArticleCard'
import { AuthorBlock } from '@spherehq/geometry/Components/AuthorBlock'
import { Query } from 'react-apollo'

import gql from 'graphql-tag'

const StyledContainer = styled(Container)`
  margin-top: 32px;
  max-width: 800px;

  margin-left: auto;
  margin-right: auto;

  ${props => props.theme.breakpoints.down('md')} {
    margin-left: -16px;
    margin-right: -16px;
  }
`

const __query = `sphere(where: { alias: $alias }) {
      alias
      slugPrefix
      posts(where: { status: PUBLISHED }) {
        id
        title
        updatedAt
        timeToRead
        slug
      }
      associatedWith {
        id
        firstName
        lastName
      }
    }`

const APOLLO_QUERY = gql`
  query SphereProfilePosts($alias: String!) {
    ${__query}
  }
`

export const query = graphql`
  query SphereTemplateProfileQuery($alias: String!) {
    sphere {
      sphere(where: { alias: $alias }) {
        alias
        slugPrefix
        posts(where: { status: PUBLISHED }) {
          id
          title
          updatedAt
          timeToRead
          slug
        }
        associatedWith {
          id
          firstName
          lastName
        }
      }
    }
  }
`

const SphereTemplateProfile = ({
  data,
}: {
  data: {
    sphere: {
      sphere: {
        alias: string
        slugPrefix: string
        associatedWith: { id: string; firstName: string; lastName: string }
        posts: [
          {
            id: string
            title: string
            slug: string
            updatedAt: string
          },
        ]
      }
    }
  }
}) => {
  const { firstName, lastName } = data.sphere.sphere.associatedWith

  const posts = posts =>
    posts.map((post, index) => (
      <Box as="li" key={index} width={{ xs: 1, md: 1, lg: 1 / 2 }}>
        <ArticleCard
          linkAs={Link}
          title={post.title}
          link={`/${data.sphere.sphere.slugPrefix}${post.slug}`}
          heroImageUrl={`https://picsum.photos/348/170/?random=${index}`}
          dateTime={post.updatedAt}
          author={{
            firstName,
            lastName,
            alias: `${data.sphere.sphere.slugPrefix}${data.sphere.sphere.alias}`,
          }}
        />
      </Box>
    ))

  const sphere = data.sphere.sphere

  return (
    <StyledContainer>
      <Grid>
        <Box width={1} p={`12px`} mb={8}>
          <AuthorBlock
            firstName={firstName}
            lastName={lastName}
            alias={`${data.sphere.sphere.slugPrefix}
                ${data.sphere.sphere.alias}`}
          />
        </Box>
        <Box width={1}>
          <Grid rowGap={{ xs: 8, lg: 7 }} gap as="ul">
            <Query
              query={APOLLO_QUERY}
              variables={{ alias: data.sphere.sphere.alias }}
            >
              {({ data, loading, error }) => {
                if (loading) return posts(sphere.posts)
                if (error) return posts(sphere.posts)

                return posts(data.sphere.posts)
              }}
            </Query>
          </Grid>
        </Box>
      </Grid>
    </StyledContainer>
  )
}

export default SphereTemplateProfile
