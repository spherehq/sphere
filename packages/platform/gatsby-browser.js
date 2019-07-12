import * as React from 'react'

import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'

import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

import './src/styles/global.css'
import Layout from './src/components/layout'

const cache = new InMemoryCache()

const windowGlobal = typeof window !== 'undefined' && window

persistCache({
  cache,
  storage: windowGlobal.localStorage,
})

const client = new ApolloClient({
  uri: 'https://graph.sphere.sh',
  fetch,
  cache,
})

export const wrapPageElement = ({ element, props }) => {
  return (
    <ApolloProvider client={client}>
      <Layout {...props}>{element}</Layout>
    </ApolloProvider>
  )
}
