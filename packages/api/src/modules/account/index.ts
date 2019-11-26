import { importSchema } from 'graphql-import'
import {
  SpheresResolver,
  SphereResolver,
  ExchangeTokenResolver,
} from './resolvers'
import { gql, makeExecutableSchema } from 'apollo-server'

const typeDefs = gql(importSchema(`${__dirname}/schema/schema.graphql`))
const resolvers = {
  Query: {
    spheres: SpheresResolver,
    sphere: SphereResolver,
  },
  Mutation: {
    exchangeToken: ExchangeTokenResolver,
  },
}

export default makeExecutableSchema({ typeDefs, resolvers })
