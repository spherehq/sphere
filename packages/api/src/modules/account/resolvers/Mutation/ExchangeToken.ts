import * as jwt from 'jsonwebtoken'

import fetch from 'node-fetch'

import { ServerContext } from '../../../../server'
import {
  ExchangeTokenInput,
  ExchangeTokenError,
  AccountStatus,
} from '../../../../types'

interface UserInfo {
  sub: string
  name: string
  email: string
  picture: string
}

export const ExchangeTokenResolver = async (
  _,
  args: { input: ExchangeTokenInput },
  context: ServerContext,
) => {
  try {
    if (
      process.env.AUTH_ZERO_USER_INFO_ENDPOINT === undefined ||
      process.env.AUTH_ZERO_USER_INFO_ENDPOINT.indexOf('http') === -1
    ) {
      throw new Error(`AUTH_ZERO_USER_INFO_ENDPOINT_NOT_DEFINED`)
    }

    const res = await fetch(process.env.AUTH_ZERO_USER_INFO_ENDPOINT || '', {
      headers: { Authorization: `Bearer ${args.input.opaqueToken}` },
    })

    if (res.status !== 200) {
      throw new Error(ExchangeTokenError.InvalidToken)
    }

    const userInfo: UserInfo = await res.json()

    const exists = await context.db.$exists.user({
      providerId: userInfo.sub,
    })

    const getAccount = async (exists: boolean, userInfo: UserInfo) => {
      if (!exists) {
        const user = await context.db.createUser({
          providerId: userInfo.sub,
          associatedWith: {
            create: {
              status: AccountStatus.Active,
              fullName: userInfo.name,
              emailAddress: userInfo.email,
              profileImageUrl: userInfo.picture,
            },
          },
        })

        return await context.db.user({ id: user.id }).associatedWith()
      }

      return await context.db
        .user({ providerId: userInfo.sub })
        .associatedWith()
    }

    const account = await getAccount(exists, userInfo)

    const spheres = await context.db
      .user({ providerId: userInfo.sub })
      .associatedWith()
      .spheres()

    if (account.status === AccountStatus.Inactive) {
      throw new Error(ExchangeTokenError.AccountNotActive)
    }

    return {
      token: jwt.sign(
        {
          id: account.id,
          fullName: account.fullName,
          imageUrl: account.profileImageUrl,
          spheres: spheres.map(sphere => {
            return { id: sphere.id, name: sphere.alias }
          }),
        },
        process.env.SECURE_JWT_HASH || '',
        {
          issuer: 'graph.sphere.sh',
          audience: 'sphere.sh',
        },
      ),
    }
  } catch (e) {
    switch (e.message) {
      case ExchangeTokenError.InvalidToken:
        return { error: ExchangeTokenError.InvalidToken, token: null }
      case ExchangeTokenError.AccountNotActive:
        return { error: ExchangeTokenError.AccountNotActive, token: null }
      case ExchangeTokenError.ApplicationError:
        return { error: ExchangeTokenError.ApplicationError, token: null }
      default:
        return { error: ExchangeTokenError.ApplicationError, token: null }
    }
  }
}
