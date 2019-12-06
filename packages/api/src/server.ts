import * as jwt from 'jsonwebtoken'

import { ApolloServer, mergeSchemas } from 'apollo-server'
import {
  applyMiddleware,
  IMiddlewareFunction,
  IMiddlewareGenerator,
} from 'graphql-middleware'
import { sentry } from 'graphql-middleware-sentry'
import { prisma, Prisma } from '@spherehq/database'
import { rule, shield, allow, deny } from 'graphql-shield'

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

// const isEditor = rule({ cache: 'strict' })(async (_parent, _args, _ctx) => {
//   return false
// })

const isOwner = rule({ cache: 'strict' })(async () => {
  return true
})

const isAuthor = rule({ cache: 'strict' })(async () => {
  return false
})

const hasAccount = rule({ cache: 'strict' })(
  async (_parent, _args, ctx: { db: Prisma; account: { id: string } }) => {
    return (
      ctx.hasOwnProperty('account') &&
      (await ctx.db.$exists.account({ id: ctx.account.id }))
    )
  },
)

const permissions = shield(
  {
    Query: {
      sphere: allow,
      spheres: allow,
      account: isOwner,
      post: allow,
      posts: allow,
    },
    Mutation: {
      '*': deny,
      exchangeToken: allow,
      generateVerificationCode: hasAccount,
      verifySphere: hasAccount,
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
    },
    ExchangeTokenResponse: allow,
    GenerateVerificationCodeResponse: hasAccount,
    VerifySphereResponse: hasAccount,
  },
  { fallbackRule: deny },
)

middleware.push(permissions)

const schemaWithMiddleware = applyMiddleware(
  mergeSchemas({ schemas: [ContentSchema, AccountSchema] }),
  ...middleware,
)

export interface ServerContext {
  db: Prisma
  account?: { id: string } | null
}

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
  context: async ({ req }) => {
    const context: ServerContext = { db: prisma }

    if (req.headers.authorization) {
      const bearer = req.headers.authorization.split(' ')[1] || ''
      // Validate JWT
      try {
        const token = jwt.verify(bearer, process.env.SECURE_JWT_HASH || '', {
          issuer: 'graph.sphere.sh',
          audience: 'sphere.sh',
        }) as { id: string }

        if (await prisma.$exists.account({ id: token.id })) {
          const account = await prisma.account({ id: token.id })
          context['account'] = account
        }
      } catch (e) {
        console.warn(e.message)
      }
    }

    return context
  },
})

server.listen(environment.port).then(({ url }) => {
  console.info(`🚀  Server ready at ${url}`)
})
