import { Prisma } from '@spherehq/database'

import { fragmentWithArgs } from '../../../utils'

export const PostsResolver = (
  _: any,
  args: any,
  context: { db: Prisma },
  info,
) => context.db.posts(args).$fragment(fragmentWithArgs(info))
