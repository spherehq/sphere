import { importSchema } from 'graphql-import'
import { PostsResolver, PostResolver } from './resolvers'
import { gql, makeExecutableSchema } from 'apollo-server'

const typeDefs = gql(importSchema(`${__dirname}/schema/schema.graphql`))
const resolvers = {
  Query: {
    posts: PostsResolver,
    post: PostResolver,
  },
}

export default makeExecutableSchema({ typeDefs, resolvers })
