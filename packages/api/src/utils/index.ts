import * as graphqlFields from 'graphql-fields'

import { gql } from 'apollo-server'

export const fragmentWithArgs = info => {
  const fields = graphqlFields(info)
  const fieldsWithArgs = graphqlFields(info, {}, { processArguments: true })

  let fragmentStr = `{`
  const recursive = (fields, fieldsWithArgs) => {
    Object.keys(fields).forEach(field => {
      if (Object.keys(fields[field]).length > 0) {
        if (
          Object.keys(fieldsWithArgs[field]).filter(
            key => key === '__arguments',
          ).length > 0
        ) {
          fragmentStr += `${field}(${fieldsWithArgs[field].__arguments
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
            .flat()}) {`
        } else {
          fragmentStr += `${field} {`
        }

        recursive(fields[field], fieldsWithArgs[field])
      } else {
        fragmentStr += ` ${field} `
      }
    })
    fragmentStr += `}`
  }
  recursive(fields, fieldsWithArgs)

  return gql(fragmentStr)
}
