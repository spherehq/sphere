import * as React from 'react'

import { ApolloProvider } from 'react-apollo'

import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

import Layout from './src/components/layout'

const client = new ApolloClient({
  uri: `https://spherehq-production_jason-brown.prisma.sh/sphere/production`,
  fetch,
})

export const wrapPageElement = ({ element, props }) => {
  return (
    <ApolloProvider client={client}>
      <Layout {...props}>{element}</Layout>
    </ApolloProvider>
  )
}
