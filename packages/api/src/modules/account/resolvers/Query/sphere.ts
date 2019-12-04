import { Prisma, SphereWhereUniqueInput } from '@spherehq/database'

import { fragmentWithArgs } from '../../../../utils'

export const SphereResolver = (
  _: any,
  args: { where: SphereWhereUniqueInput },
  context: { db: Prisma },
  info,
) => context.db.sphere(args.where).$fragment(fragmentWithArgs(info))
