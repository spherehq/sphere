import { Prisma } from '@spherehq/database'

export const PostResolver = (_: any, args: any, context: { db: Prisma }) => {
  return context.db.post(args.where)
}
