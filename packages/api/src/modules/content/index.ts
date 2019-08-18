import { importSchema } from 'graphql-import'
import { PostsResolver, PostResolver, MediaResolver } from './resolvers'
import { gql, makeExecutableSchema } from 'apollo-server'

const typeDefs = gql(importSchema(`${__dirname}/schema/schema.graphql`))
const resolvers = {
  Query: {
    posts: PostsResolver,
    post: PostResolver,
  },
  Mutation: {
    mediaUpload: MediaResolver,
  },
}

export default makeExecutableSchema({ typeDefs, resolvers })
