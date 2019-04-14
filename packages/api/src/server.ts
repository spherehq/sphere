import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server'
import {
  applyMiddleware,
  IMiddlewareFunction,
  IMiddlewareGenerator,
} from 'graphql-middleware'
import { sentry } from 'graphql-middleware-sentry'

import * as GraphQLJSON from 'graphql-type-json'
import PostsResolver from './modules/posts'

import { environment } from './ config'

const typeDefs = gql`
  scalar JSON

  type Post {
    title: String
    slug: String
    timeToRead: Int
    content: JSON
    author: Author
  }

  type Author {
    name: String
  }

  type Query {
    posts: [Post]
  }
`

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    posts: PostsResolver,
  },
}

// tslint:disable-next-line:prefer-array-literal
const middleware: Array<
  // tslint:disable-next-line:no-any
  IMiddlewareGenerator<any, any, any> | IMiddlewareFunction<any, any, any>
> = []

if (process.env.SENTRY_DSN) {
  const sentryMiddleware = sentry({
    forwardErrors: true,
    withScope: () => {},
    config: { environment: process.env.NODE_ENV, dsn: process.env.SENTRY_DSN },
  })

  middleware.push(sentryMiddleware)
}

const schema = makeExecutableSchema({ typeDefs, resolvers })
const schemaWithMiddleware = applyMiddleware(schema, ...middleware)
const server = new ApolloServer({
  schema: schemaWithMiddleware,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
})

server.listen(environment.port).then(({ url }) => {
  console.info(`🚀  Server ready at ${url}`)
})
