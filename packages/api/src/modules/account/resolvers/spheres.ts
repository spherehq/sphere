import { Prisma } from '@spherehq/database'
import { gql } from 'apollo-server'

import * as graphqlFields from 'graphql-fields'

export const SpheresResolver = (
  _: any,
  args: any,
  context: { db: Prisma },
  info,
) => {
  const fields = graphqlFields(info)
  const fieldsWithArgs = graphqlFields(info, {}, { processArguments: true })
  const keys = Object.keys(fields)
  const selections = keys.filter(key => Object.keys(fields[key]).length === 0)
  const subSelections = keys.filter(key => Object.keys(fields[key]).length > 0)
  const fragmentStr = `{ ${selections.join(' ')} ${subSelections
    .map(
      selection =>
        `${selection} ${
          fieldsWithArgs[selection].__arguments &&
          fieldsWithArgs[selection].__arguments.length > 0
            ? `(${fieldsWithArgs[selection].__arguments
                .map(
                  arg =>
                    `${Object.keys(arg).map(
                      a =>
                        `${a}: ${Object.keys(arg).map(key => {
                          switch (arg[key].kind) {
                            case 'ObjectValue':
                              return `{${Object.keys(arg[key].value).map(
                                k => `${k} : ${arg[key].value[k]}`,
                              )}}`
                            case 'StringValue':
                              return `"${arg[key].value}"`
                            default:
                              return arg[key].value
                          }
                        })}`,
                    )}`,
                )
                .flat()})`
            : ''
        } { ${Object.keys(fields[selection]).join(' ')} }`,
    )
    .join(' ')} }`

  console.log(fragmentStr, fields)

  const fragment = gql(fragmentStr)

  return context.db.spheres(args).$fragment(fragment)
}
