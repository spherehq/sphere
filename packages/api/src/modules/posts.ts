import { Prisma } from '@spherehq/database'

export default (_: any, args: any, context: { db: Prisma }) => {
  return context.db.posts(args)
}
