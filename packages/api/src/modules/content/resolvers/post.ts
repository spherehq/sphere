import { Prisma, PostWhereUniqueInput } from '@spherehq/database'

import { fragmentWithArgs } from '../../../utils'

export const PostResolver = (
  _: any,
  args: { where: PostWhereUniqueInput },
  context: { db: Prisma },
  info,
) => context.db.post(args.where).$fragment(fragmentWithArgs(info))
