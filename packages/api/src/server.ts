import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import {
  applyMiddleware,
  IMiddlewareFunction,
  IMiddlewareGenerator,
} from 'graphql-middleware'
import { sentry } from 'graphql-middleware-sentry'
import { importSchema } from 'graphql-import'
import { prisma } from '@spherehq/database'

import PostsResolver from './modules/posts'
import { environment } from './config'

const typeDefs = importSchema('./schema/schema.graphql')

const resolvers = {
  Query: {
    posts: PostsResolver,
  },
  // Need to supress GraphQL Tools error https://github.com/apollographql/apollo-server/issues/1075#issuecomment-427476421
  Node: {
    // tslint:disable-next-line:function-name
    __resolveType() {
      return null
    },
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
  context: {
    db: prisma,
  },
})

server.listen(environment.port).then(({ url }) => {
  console.info(`🚀  Server ready at ${url}`)
})
