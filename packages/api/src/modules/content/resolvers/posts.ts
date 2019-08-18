import {
  Prisma,
  PostWhereInput,
  PostOrderByInput,
  Int,
} from '@spherehq/database'

import { fragmentWithArgs } from '../../../utils'

export const PostsResolver = (
  _: any,
  args: {
    where?: PostWhereInput
    orderBy?: PostOrderByInput
    skip?: Int
    after?: string
    before?: string
    first?: Int
    last?: Int
  },
  context: { db: Prisma },
  info,
) => context.db.posts(args).$fragment(fragmentWithArgs(info))
