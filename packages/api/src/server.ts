import { ApolloServer, mergeSchemas } from 'apollo-server'
import {
  applyMiddleware,
  IMiddlewareFunction,
  IMiddlewareGenerator,
} from 'graphql-middleware'
import { sentry } from 'graphql-middleware-sentry'
import { prisma } from '@spherehq/database'
import { rule, shield, allow, or, deny } from 'graphql-shield'

import { environment } from './config'

import ContentSchema from './modules/content'
import AccountSchema from './modules/account'

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

const isEditor = rule({ cache: 'strict' })(async () => {
  return true
})

const isOwner = rule({ cache: 'strict' })(async () => {
  return true
})

const isAuthor = rule({ cache: 'strict' })(async () => {
  return false
})

const permissions = shield(
  {
    Query: {
      sphere: allow,
      spheres: isEditor,
      account: isOwner,
      post: allow,
      posts: allow,
    },
    Mutation: {
      '*': deny,
      exchangeToken: allow,
    },
    Sphere: {
      '*': allow,
    },
    Account: {
      '*': allow,
      status: isOwner,
      emailAddress: isOwner,
    },
    Post: {
      status: isAuthor,
      metadata: or(isAuthor, isEditor),
    },
    ExchangeTokenResponse: allow,
  },
  { fallbackRule: deny },
)

middleware.push(permissions)

const schemaWithMiddleware = applyMiddleware(
  mergeSchemas({ schemas: [ContentSchema, AccountSchema] }),
  ...middleware,
)

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
