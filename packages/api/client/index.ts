import { createClient } from './generated/createClient'
import { Client } from 'graphql-typed-client'
import {
  QueryRequest,
  QueryPromiseChain,
  Query,
  MutationRequest,
  MutationPromiseChain,
  Mutation,
  SphereWhereUniqueInput,
  AccountWhereUniqueInput,
} from './generated/schema'

const _client: Client<
  QueryRequest,
  QueryPromiseChain,
  Query,
  MutationRequest,
  MutationPromiseChain,
  Mutation,
  never,
  never,
  never
> = createClient({
  fetcher: ({ query, variables }, fetch, qs) =>
    fetch(
      `http://localhost:4000/graphql?${qs.stringify({ query, variables })}`,
    ).then(r => r.json()),
})

interface Exists {
  sphere: (input: SphereWhereUniqueInput) => Promise<boolean>
  account: (input: AccountWhereUniqueInput) => Promise<boolean>
}

const exists: Exists = {
  sphere: async (input: SphereWhereUniqueInput) => {
    const result = await client.query({
      sphere: [{ where: input }, { id: true }],
    })

    return (
      typeof result.errors === 'undefined' && typeof result.data !== 'undefined'
    )
  },
  account: async (input: AccountWhereUniqueInput) => {
    const result = await client.query({
      account: [{ where: input }, { id: true }],
    })

    return (
      typeof result.errors === 'undefined' && typeof result.data !== 'undefined'
    )
  },
}

export const client: Client<
  QueryRequest,
  QueryPromiseChain,
  Query,
  MutationRequest,
  MutationPromiseChain,
  Mutation,
  never,
  never,
  never
> & {
  exists: Exists
} = {
  ..._client,
  exists,
}

export default client
