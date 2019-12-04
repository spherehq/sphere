import {
  Prisma,
  SphereWhereInput,
  SphereOrderByInput,
} from '@spherehq/database'

import { fragmentWithArgs } from '../../../../utils'

export const SpheresResolver = (
  _,
  args: {
    where?: SphereWhereInput
    orderBy?: SphereOrderByInput
    skip?: number
    after?: string
    before?: string
    first?: number
    last?: number
  },
  context: { db: Prisma },
  info,
) => context.db.spheres(args).$fragment(fragmentWithArgs(info))
