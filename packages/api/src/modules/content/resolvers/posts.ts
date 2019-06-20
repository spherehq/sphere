import { Prisma } from '@spherehq/database'

import { fragmentWithArgs } from '../../../utils'

export const PostsResolver = (
  _: any,
  args: any,
  context: { db: Prisma },
  info,
) => {
  const fragment = fragmentWithArgs(info)

  return context.db.posts(args).$fragment(fragment)
}
