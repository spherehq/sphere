import { Prisma } from '@spherehq/database'

import { fragmentWithArgs } from '../../../../utils'

export const SpheresResolver = (
  _: any,
  args: any,
  context: { db: Prisma },
  info,
) => context.db.spheres(args).$fragment(fragmentWithArgs(info))
