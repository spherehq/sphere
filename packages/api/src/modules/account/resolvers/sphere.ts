import { Prisma } from '@spherehq/database'

import { fragmentWithArgs } from '../../../utils'

export const SphereResolver = (
  _: any,
  args: any,
  context: { db: Prisma },
  info,
) => {
  const fragment = fragmentWithArgs(info)

  return context.db.sphere(args.where).$fragment(fragment)
}
