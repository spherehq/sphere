import { Prisma } from '@spherehq/database'

import { fragmentWithArgs } from '../../../utils'

export const PostResolver = (
  _: any,
  args: any,
  context: { db: Prisma },
  info,
) => {
  const fragment = fragmentWithArgs(info)

  return context.db.post(args.where).$fragment(fragment)
}
