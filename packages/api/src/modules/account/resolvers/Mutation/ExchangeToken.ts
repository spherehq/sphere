import * as jwt from 'jsonwebtoken'

import fetch from 'node-fetch'

import { Prisma } from '@spherehq/database'

interface UserInfo {
  sub: string
  name: string
  email: string
  picture: string
}

export const ExchangeTokenResolver = async (
  _,
  args: { input: { opaqueToken: string } },
  context: { db: Prisma },
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
      throw new Error('INVALID_TOKEN')
    }

    const userInfo: UserInfo = await res.json()

    const exists = await context.db.$exists.user({ providerId: userInfo.sub })

    const getAccount = async (exists: boolean, userInfo: UserInfo) => {
      if (!exists) {
        const user = await context.db.createUser({
          providerId: userInfo.sub,
          associatedWith: {
            create: {
              status: 'ACTIVE',
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

    if (account.status === 'INACTIVE') {
      throw new Error('ACCOUNT_NOT_ACTIVE')
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
      ),
    }
  } catch (e) {
    console.log(e.message)
    return {
      error: 'APPLICATION_ERROR',
    }
  }
}
