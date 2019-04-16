import { importSchema } from 'graphql-import'
import { PostsResolver, PostResolver } from './resolvers'
import { gql, makeExecutableSchema } from 'apollo-server'

const typeDefs = gql(importSchema(`${__dirname}/schema/schema.graphql`))
const resolvers = {
  Query: {
    posts: PostsResolver,
    post: PostResolver,
  },
  // Need to supress GraphQL Tools error https://github.com/apollographql/apollo-server/issues/1075#issuecomment-427476421
  Node: {
    // tslint:disable-next-line:function-name
    __resolveType() {
      return null
    },
  },
}

export default makeExecutableSchema({ typeDefs, resolvers })
