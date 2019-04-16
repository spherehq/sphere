import { ApolloServer, mergeSchemas } from 'apollo-server'
import {
  applyMiddleware,
  IMiddlewareFunction,
  IMiddlewareGenerator,
} from 'graphql-middleware'
import { sentry } from 'graphql-middleware-sentry'
import { prisma } from '@spherehq/database'

import { environment } from './config'
import ContentSchema from './modules/content'

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

const schemaWithMiddleware = applyMiddleware(
  mergeSchemas({ schemas: [ContentSchema] }),
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
