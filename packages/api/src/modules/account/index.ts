import { importSchema } from 'graphql-import'
import { SpheresResolver, SphereResolver } from './resolvers'
import { gql, makeExecutableSchema } from 'apollo-server'
// import { PostsResolver } from '../content/resolvers'

const typeDefs = gql(importSchema(`${__dirname}/schema/schema.graphql`))
const resolvers = {
  Query: {
    spheres: SpheresResolver,
    sphere: SphereResolver,
  },
}

export default makeExecutableSchema({ typeDefs, resolvers })
