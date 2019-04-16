import { Prisma } from '@spherehq/database'
import { gql } from 'apollo-server'

import * as graphqlFields from 'graphql-fields'

export const PostsResolver = (
  _: any,
  args: any,
  context: { db: Prisma },
  info,
) => {
  const fields = graphqlFields(info)
  const keys = Object.keys(fields)
  const selections = keys.filter(key => Object.keys(fields[key]).length === 0)
  const subSelections = keys.filter(key => Object.keys(fields[key]).length > 0)

  const fragment = gql`{ ${selections.join(' ')} ${subSelections
    .map(
      selection =>
        `${selection} { ${Object.keys(fields[selection]).join(' ')} }`,
    )
    .join(' ')} }`

  return context.db.posts(args).$fragment(fragment)
}
