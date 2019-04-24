'use strict'
exports.__esModule = true
exports.typeDefs =
  'type Account {\n  id: ID!\n  status: AccountStatus!\n  firstName: String!\n  lastName: String!\n  emailAddress: String!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ntype AccountConnection {\n  pageInfo: PageInfo!\n  edges: [AccountEdge]!\n  aggregate: AggregateAccount!\n}\n\ninput AccountCreateInput {\n  status: AccountStatus\n  firstName: String!\n  lastName: String!\n  emailAddress: String!\n}\n\ninput AccountCreateManyInput {\n  create: [AccountCreateInput!]\n  connect: [AccountWhereUniqueInput!]\n}\n\ntype AccountEdge {\n  node: Account!\n  cursor: String!\n}\n\nenum AccountOrderByInput {\n  id_ASC\n  id_DESC\n  status_ASC\n  status_DESC\n  firstName_ASC\n  firstName_DESC\n  lastName_ASC\n  lastName_DESC\n  emailAddress_ASC\n  emailAddress_DESC\n  createdAt_ASC\n  createdAt_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n}\n\ntype AccountPreviousValues {\n  id: ID!\n  status: AccountStatus!\n  firstName: String!\n  lastName: String!\n  emailAddress: String!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ninput AccountScalarWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  status: AccountStatus\n  status_not: AccountStatus\n  status_in: [AccountStatus!]\n  status_not_in: [AccountStatus!]\n  firstName: String\n  firstName_not: String\n  firstName_in: [String!]\n  firstName_not_in: [String!]\n  firstName_lt: String\n  firstName_lte: String\n  firstName_gt: String\n  firstName_gte: String\n  firstName_contains: String\n  firstName_not_contains: String\n  firstName_starts_with: String\n  firstName_not_starts_with: String\n  firstName_ends_with: String\n  firstName_not_ends_with: String\n  lastName: String\n  lastName_not: String\n  lastName_in: [String!]\n  lastName_not_in: [String!]\n  lastName_lt: String\n  lastName_lte: String\n  lastName_gt: String\n  lastName_gte: String\n  lastName_contains: String\n  lastName_not_contains: String\n  lastName_starts_with: String\n  lastName_not_starts_with: String\n  lastName_ends_with: String\n  lastName_not_ends_with: String\n  emailAddress: String\n  emailAddress_not: String\n  emailAddress_in: [String!]\n  emailAddress_not_in: [String!]\n  emailAddress_lt: String\n  emailAddress_lte: String\n  emailAddress_gt: String\n  emailAddress_gte: String\n  emailAddress_contains: String\n  emailAddress_not_contains: String\n  emailAddress_starts_with: String\n  emailAddress_not_starts_with: String\n  emailAddress_ends_with: String\n  emailAddress_not_ends_with: String\n  createdAt: DateTime\n  createdAt_not: DateTime\n  createdAt_in: [DateTime!]\n  createdAt_not_in: [DateTime!]\n  createdAt_lt: DateTime\n  createdAt_lte: DateTime\n  createdAt_gt: DateTime\n  createdAt_gte: DateTime\n  updatedAt: DateTime\n  updatedAt_not: DateTime\n  updatedAt_in: [DateTime!]\n  updatedAt_not_in: [DateTime!]\n  updatedAt_lt: DateTime\n  updatedAt_lte: DateTime\n  updatedAt_gt: DateTime\n  updatedAt_gte: DateTime\n  AND: [AccountScalarWhereInput!]\n  OR: [AccountScalarWhereInput!]\n  NOT: [AccountScalarWhereInput!]\n}\n\nenum AccountStatus {\n  VERIFIED\n  ACTIVE\n  INACTIVE\n}\n\ntype AccountSubscriptionPayload {\n  mutation: MutationType!\n  node: Account\n  updatedFields: [String!]\n  previousValues: AccountPreviousValues\n}\n\ninput AccountSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: AccountWhereInput\n  AND: [AccountSubscriptionWhereInput!]\n  OR: [AccountSubscriptionWhereInput!]\n  NOT: [AccountSubscriptionWhereInput!]\n}\n\ninput AccountUpdateDataInput {\n  status: AccountStatus\n  firstName: String\n  lastName: String\n  emailAddress: String\n}\n\ninput AccountUpdateInput {\n  status: AccountStatus\n  firstName: String\n  lastName: String\n  emailAddress: String\n}\n\ninput AccountUpdateManyDataInput {\n  status: AccountStatus\n  firstName: String\n  lastName: String\n  emailAddress: String\n}\n\ninput AccountUpdateManyInput {\n  create: [AccountCreateInput!]\n  update: [AccountUpdateWithWhereUniqueNestedInput!]\n  upsert: [AccountUpsertWithWhereUniqueNestedInput!]\n  delete: [AccountWhereUniqueInput!]\n  connect: [AccountWhereUniqueInput!]\n  set: [AccountWhereUniqueInput!]\n  disconnect: [AccountWhereUniqueInput!]\n  deleteMany: [AccountScalarWhereInput!]\n  updateMany: [AccountUpdateManyWithWhereNestedInput!]\n}\n\ninput AccountUpdateManyMutationInput {\n  status: AccountStatus\n  firstName: String\n  lastName: String\n  emailAddress: String\n}\n\ninput AccountUpdateManyWithWhereNestedInput {\n  where: AccountScalarWhereInput!\n  data: AccountUpdateManyDataInput!\n}\n\ninput AccountUpdateWithWhereUniqueNestedInput {\n  where: AccountWhereUniqueInput!\n  data: AccountUpdateDataInput!\n}\n\ninput AccountUpsertWithWhereUniqueNestedInput {\n  where: AccountWhereUniqueInput!\n  update: AccountUpdateDataInput!\n  create: AccountCreateInput!\n}\n\ninput AccountWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  status: AccountStatus\n  status_not: AccountStatus\n  status_in: [AccountStatus!]\n  status_not_in: [AccountStatus!]\n  firstName: String\n  firstName_not: String\n  firstName_in: [String!]\n  firstName_not_in: [String!]\n  firstName_lt: String\n  firstName_lte: String\n  firstName_gt: String\n  firstName_gte: String\n  firstName_contains: String\n  firstName_not_contains: String\n  firstName_starts_with: String\n  firstName_not_starts_with: String\n  firstName_ends_with: String\n  firstName_not_ends_with: String\n  lastName: String\n  lastName_not: String\n  lastName_in: [String!]\n  lastName_not_in: [String!]\n  lastName_lt: String\n  lastName_lte: String\n  lastName_gt: String\n  lastName_gte: String\n  lastName_contains: String\n  lastName_not_contains: String\n  lastName_starts_with: String\n  lastName_not_starts_with: String\n  lastName_ends_with: String\n  lastName_not_ends_with: String\n  emailAddress: String\n  emailAddress_not: String\n  emailAddress_in: [String!]\n  emailAddress_not_in: [String!]\n  emailAddress_lt: String\n  emailAddress_lte: String\n  emailAddress_gt: String\n  emailAddress_gte: String\n  emailAddress_contains: String\n  emailAddress_not_contains: String\n  emailAddress_starts_with: String\n  emailAddress_not_starts_with: String\n  emailAddress_ends_with: String\n  emailAddress_not_ends_with: String\n  createdAt: DateTime\n  createdAt_not: DateTime\n  createdAt_in: [DateTime!]\n  createdAt_not_in: [DateTime!]\n  createdAt_lt: DateTime\n  createdAt_lte: DateTime\n  createdAt_gt: DateTime\n  createdAt_gte: DateTime\n  updatedAt: DateTime\n  updatedAt_not: DateTime\n  updatedAt_in: [DateTime!]\n  updatedAt_not_in: [DateTime!]\n  updatedAt_lt: DateTime\n  updatedAt_lte: DateTime\n  updatedAt_gt: DateTime\n  updatedAt_gte: DateTime\n  AND: [AccountWhereInput!]\n  OR: [AccountWhereInput!]\n  NOT: [AccountWhereInput!]\n}\n\ninput AccountWhereUniqueInput {\n  id: ID\n}\n\ntype AggregateAccount {\n  count: Int!\n}\n\ntype AggregatePost {\n  count: Int!\n}\n\ntype AggregatePostMetadata {\n  count: Int!\n}\n\ntype AggregateSphere {\n  count: Int!\n}\n\ntype BatchPayload {\n  count: Long!\n}\n\nscalar DateTime\n\nscalar Json\n\nscalar Long\n\ntype Mutation {\n  createAccount(data: AccountCreateInput!): Account!\n  updateAccount(data: AccountUpdateInput!, where: AccountWhereUniqueInput!): Account\n  updateManyAccounts(data: AccountUpdateManyMutationInput!, where: AccountWhereInput): BatchPayload!\n  upsertAccount(where: AccountWhereUniqueInput!, create: AccountCreateInput!, update: AccountUpdateInput!): Account!\n  deleteAccount(where: AccountWhereUniqueInput!): Account\n  deleteManyAccounts(where: AccountWhereInput): BatchPayload!\n  createPost(data: PostCreateInput!): Post!\n  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post\n  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!\n  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!\n  deletePost(where: PostWhereUniqueInput!): Post\n  deleteManyPosts(where: PostWhereInput): BatchPayload!\n  createPostMetadata(data: PostMetadataCreateInput!): PostMetadata!\n  updatePostMetadata(data: PostMetadataUpdateInput!, where: PostMetadataWhereUniqueInput!): PostMetadata\n  updateManyPostMetadatas(data: PostMetadataUpdateManyMutationInput!, where: PostMetadataWhereInput): BatchPayload!\n  upsertPostMetadata(where: PostMetadataWhereUniqueInput!, create: PostMetadataCreateInput!, update: PostMetadataUpdateInput!): PostMetadata!\n  deletePostMetadata(where: PostMetadataWhereUniqueInput!): PostMetadata\n  deleteManyPostMetadatas(where: PostMetadataWhereInput): BatchPayload!\n  createSphere(data: SphereCreateInput!): Sphere!\n  updateSphere(data: SphereUpdateInput!, where: SphereWhereUniqueInput!): Sphere\n  updateManySpheres(data: SphereUpdateManyMutationInput!, where: SphereWhereInput): BatchPayload!\n  upsertSphere(where: SphereWhereUniqueInput!, create: SphereCreateInput!, update: SphereUpdateInput!): Sphere!\n  deleteSphere(where: SphereWhereUniqueInput!): Sphere\n  deleteManySpheres(where: SphereWhereInput): BatchPayload!\n}\n\nenum MutationType {\n  CREATED\n  UPDATED\n  DELETED\n}\n\ninterface Node {\n  id: ID!\n}\n\ntype PageInfo {\n  hasNextPage: Boolean!\n  hasPreviousPage: Boolean!\n  startCursor: String\n  endCursor: String\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  content: Json!\n  slug: String!\n  timeToRead: Int!\n  isPublished: Boolean!\n  publishedAt: DateTime\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  status: POST_STATUS!\n  metadata: PostMetadata!\n  associatedWith: Sphere!\n}\n\nenum POST_STATUS {\n  PUBLISHED\n  DRAFT\n  ARCHIVED\n  SYNCING\n}\n\ntype PostConnection {\n  pageInfo: PageInfo!\n  edges: [PostEdge]!\n  aggregate: AggregatePost!\n}\n\ninput PostCreateInput {\n  title: String!\n  content: Json!\n  slug: String!\n  timeToRead: Int\n  isPublished: Boolean\n  publishedAt: DateTime\n  status: POST_STATUS\n  metadata: PostMetadataCreateOneInput!\n  associatedWith: SphereCreateOneInput!\n}\n\ntype PostEdge {\n  node: Post!\n  cursor: String!\n}\n\ntype PostMetadata {\n  id: ID!\n  fileHash: String!\n  filename: String\n}\n\ntype PostMetadataConnection {\n  pageInfo: PageInfo!\n  edges: [PostMetadataEdge]!\n  aggregate: AggregatePostMetadata!\n}\n\ninput PostMetadataCreateInput {\n  fileHash: String!\n  filename: String\n}\n\ninput PostMetadataCreateOneInput {\n  create: PostMetadataCreateInput\n  connect: PostMetadataWhereUniqueInput\n}\n\ntype PostMetadataEdge {\n  node: PostMetadata!\n  cursor: String!\n}\n\nenum PostMetadataOrderByInput {\n  id_ASC\n  id_DESC\n  fileHash_ASC\n  fileHash_DESC\n  filename_ASC\n  filename_DESC\n  createdAt_ASC\n  createdAt_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n}\n\ntype PostMetadataPreviousValues {\n  id: ID!\n  fileHash: String!\n  filename: String\n}\n\ntype PostMetadataSubscriptionPayload {\n  mutation: MutationType!\n  node: PostMetadata\n  updatedFields: [String!]\n  previousValues: PostMetadataPreviousValues\n}\n\ninput PostMetadataSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: PostMetadataWhereInput\n  AND: [PostMetadataSubscriptionWhereInput!]\n  OR: [PostMetadataSubscriptionWhereInput!]\n  NOT: [PostMetadataSubscriptionWhereInput!]\n}\n\ninput PostMetadataUpdateDataInput {\n  fileHash: String\n  filename: String\n}\n\ninput PostMetadataUpdateInput {\n  fileHash: String\n  filename: String\n}\n\ninput PostMetadataUpdateManyMutationInput {\n  fileHash: String\n  filename: String\n}\n\ninput PostMetadataUpdateOneRequiredInput {\n  create: PostMetadataCreateInput\n  update: PostMetadataUpdateDataInput\n  upsert: PostMetadataUpsertNestedInput\n  connect: PostMetadataWhereUniqueInput\n}\n\ninput PostMetadataUpsertNestedInput {\n  update: PostMetadataUpdateDataInput!\n  create: PostMetadataCreateInput!\n}\n\ninput PostMetadataWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  fileHash: String\n  fileHash_not: String\n  fileHash_in: [String!]\n  fileHash_not_in: [String!]\n  fileHash_lt: String\n  fileHash_lte: String\n  fileHash_gt: String\n  fileHash_gte: String\n  fileHash_contains: String\n  fileHash_not_contains: String\n  fileHash_starts_with: String\n  fileHash_not_starts_with: String\n  fileHash_ends_with: String\n  fileHash_not_ends_with: String\n  filename: String\n  filename_not: String\n  filename_in: [String!]\n  filename_not_in: [String!]\n  filename_lt: String\n  filename_lte: String\n  filename_gt: String\n  filename_gte: String\n  filename_contains: String\n  filename_not_contains: String\n  filename_starts_with: String\n  filename_not_starts_with: String\n  filename_ends_with: String\n  filename_not_ends_with: String\n  AND: [PostMetadataWhereInput!]\n  OR: [PostMetadataWhereInput!]\n  NOT: [PostMetadataWhereInput!]\n}\n\ninput PostMetadataWhereUniqueInput {\n  id: ID\n}\n\nenum PostOrderByInput {\n  id_ASC\n  id_DESC\n  title_ASC\n  title_DESC\n  content_ASC\n  content_DESC\n  slug_ASC\n  slug_DESC\n  timeToRead_ASC\n  timeToRead_DESC\n  isPublished_ASC\n  isPublished_DESC\n  publishedAt_ASC\n  publishedAt_DESC\n  createdAt_ASC\n  createdAt_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n  status_ASC\n  status_DESC\n}\n\ntype PostPreviousValues {\n  id: ID!\n  title: String!\n  content: Json!\n  slug: String!\n  timeToRead: Int!\n  isPublished: Boolean!\n  publishedAt: DateTime\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  status: POST_STATUS!\n}\n\ntype PostSubscriptionPayload {\n  mutation: MutationType!\n  node: Post\n  updatedFields: [String!]\n  previousValues: PostPreviousValues\n}\n\ninput PostSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: PostWhereInput\n  AND: [PostSubscriptionWhereInput!]\n  OR: [PostSubscriptionWhereInput!]\n  NOT: [PostSubscriptionWhereInput!]\n}\n\ninput PostUpdateInput {\n  title: String\n  content: Json\n  slug: String\n  timeToRead: Int\n  isPublished: Boolean\n  publishedAt: DateTime\n  status: POST_STATUS\n  metadata: PostMetadataUpdateOneRequiredInput\n  associatedWith: SphereUpdateOneRequiredInput\n}\n\ninput PostUpdateManyMutationInput {\n  title: String\n  content: Json\n  slug: String\n  timeToRead: Int\n  isPublished: Boolean\n  publishedAt: DateTime\n  status: POST_STATUS\n}\n\ninput PostWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  title: String\n  title_not: String\n  title_in: [String!]\n  title_not_in: [String!]\n  title_lt: String\n  title_lte: String\n  title_gt: String\n  title_gte: String\n  title_contains: String\n  title_not_contains: String\n  title_starts_with: String\n  title_not_starts_with: String\n  title_ends_with: String\n  title_not_ends_with: String\n  slug: String\n  slug_not: String\n  slug_in: [String!]\n  slug_not_in: [String!]\n  slug_lt: String\n  slug_lte: String\n  slug_gt: String\n  slug_gte: String\n  slug_contains: String\n  slug_not_contains: String\n  slug_starts_with: String\n  slug_not_starts_with: String\n  slug_ends_with: String\n  slug_not_ends_with: String\n  timeToRead: Int\n  timeToRead_not: Int\n  timeToRead_in: [Int!]\n  timeToRead_not_in: [Int!]\n  timeToRead_lt: Int\n  timeToRead_lte: Int\n  timeToRead_gt: Int\n  timeToRead_gte: Int\n  isPublished: Boolean\n  isPublished_not: Boolean\n  publishedAt: DateTime\n  publishedAt_not: DateTime\n  publishedAt_in: [DateTime!]\n  publishedAt_not_in: [DateTime!]\n  publishedAt_lt: DateTime\n  publishedAt_lte: DateTime\n  publishedAt_gt: DateTime\n  publishedAt_gte: DateTime\n  createdAt: DateTime\n  createdAt_not: DateTime\n  createdAt_in: [DateTime!]\n  createdAt_not_in: [DateTime!]\n  createdAt_lt: DateTime\n  createdAt_lte: DateTime\n  createdAt_gt: DateTime\n  createdAt_gte: DateTime\n  updatedAt: DateTime\n  updatedAt_not: DateTime\n  updatedAt_in: [DateTime!]\n  updatedAt_not_in: [DateTime!]\n  updatedAt_lt: DateTime\n  updatedAt_lte: DateTime\n  updatedAt_gt: DateTime\n  updatedAt_gte: DateTime\n  status: POST_STATUS\n  status_not: POST_STATUS\n  status_in: [POST_STATUS!]\n  status_not_in: [POST_STATUS!]\n  metadata: PostMetadataWhereInput\n  associatedWith: SphereWhereInput\n  AND: [PostWhereInput!]\n  OR: [PostWhereInput!]\n  NOT: [PostWhereInput!]\n}\n\ninput PostWhereUniqueInput {\n  id: ID\n  slug: String\n}\n\ntype Query {\n  account(where: AccountWhereUniqueInput!): Account\n  accounts(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account]!\n  accountsConnection(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccountConnection!\n  post(where: PostWhereUniqueInput!): Post\n  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!\n  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!\n  postMetadata(where: PostMetadataWhereUniqueInput!): PostMetadata\n  postMetadatas(where: PostMetadataWhereInput, orderBy: PostMetadataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostMetadata]!\n  postMetadatasConnection(where: PostMetadataWhereInput, orderBy: PostMetadataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostMetadataConnection!\n  sphere(where: SphereWhereUniqueInput!): Sphere\n  spheres(where: SphereWhereInput, orderBy: SphereOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sphere]!\n  spheresConnection(where: SphereWhereInput, orderBy: SphereOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SphereConnection!\n  node(id: ID!): Node\n}\n\ntype Sphere {\n  id: ID!\n  alias: String!\n  slugPrefix: String!\n  associatedWith(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ntype SphereConnection {\n  pageInfo: PageInfo!\n  edges: [SphereEdge]!\n  aggregate: AggregateSphere!\n}\n\ninput SphereCreateInput {\n  alias: String!\n  slugPrefix: String\n  associatedWith: AccountCreateManyInput\n}\n\ninput SphereCreateOneInput {\n  create: SphereCreateInput\n  connect: SphereWhereUniqueInput\n}\n\ntype SphereEdge {\n  node: Sphere!\n  cursor: String!\n}\n\nenum SphereOrderByInput {\n  id_ASC\n  id_DESC\n  alias_ASC\n  alias_DESC\n  slugPrefix_ASC\n  slugPrefix_DESC\n  createdAt_ASC\n  createdAt_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n}\n\ntype SpherePreviousValues {\n  id: ID!\n  alias: String!\n  slugPrefix: String!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ntype SphereSubscriptionPayload {\n  mutation: MutationType!\n  node: Sphere\n  updatedFields: [String!]\n  previousValues: SpherePreviousValues\n}\n\ninput SphereSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: SphereWhereInput\n  AND: [SphereSubscriptionWhereInput!]\n  OR: [SphereSubscriptionWhereInput!]\n  NOT: [SphereSubscriptionWhereInput!]\n}\n\ninput SphereUpdateDataInput {\n  alias: String\n  slugPrefix: String\n  associatedWith: AccountUpdateManyInput\n}\n\ninput SphereUpdateInput {\n  alias: String\n  slugPrefix: String\n  associatedWith: AccountUpdateManyInput\n}\n\ninput SphereUpdateManyMutationInput {\n  alias: String\n  slugPrefix: String\n}\n\ninput SphereUpdateOneRequiredInput {\n  create: SphereCreateInput\n  update: SphereUpdateDataInput\n  upsert: SphereUpsertNestedInput\n  connect: SphereWhereUniqueInput\n}\n\ninput SphereUpsertNestedInput {\n  update: SphereUpdateDataInput!\n  create: SphereCreateInput!\n}\n\ninput SphereWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  alias: String\n  alias_not: String\n  alias_in: [String!]\n  alias_not_in: [String!]\n  alias_lt: String\n  alias_lte: String\n  alias_gt: String\n  alias_gte: String\n  alias_contains: String\n  alias_not_contains: String\n  alias_starts_with: String\n  alias_not_starts_with: String\n  alias_ends_with: String\n  alias_not_ends_with: String\n  slugPrefix: String\n  slugPrefix_not: String\n  slugPrefix_in: [String!]\n  slugPrefix_not_in: [String!]\n  slugPrefix_lt: String\n  slugPrefix_lte: String\n  slugPrefix_gt: String\n  slugPrefix_gte: String\n  slugPrefix_contains: String\n  slugPrefix_not_contains: String\n  slugPrefix_starts_with: String\n  slugPrefix_not_starts_with: String\n  slugPrefix_ends_with: String\n  slugPrefix_not_ends_with: String\n  associatedWith_every: AccountWhereInput\n  associatedWith_some: AccountWhereInput\n  associatedWith_none: AccountWhereInput\n  createdAt: DateTime\n  createdAt_not: DateTime\n  createdAt_in: [DateTime!]\n  createdAt_not_in: [DateTime!]\n  createdAt_lt: DateTime\n  createdAt_lte: DateTime\n  createdAt_gt: DateTime\n  createdAt_gte: DateTime\n  updatedAt: DateTime\n  updatedAt_not: DateTime\n  updatedAt_in: [DateTime!]\n  updatedAt_not_in: [DateTime!]\n  updatedAt_lt: DateTime\n  updatedAt_lte: DateTime\n  updatedAt_gt: DateTime\n  updatedAt_gte: DateTime\n  AND: [SphereWhereInput!]\n  OR: [SphereWhereInput!]\n  NOT: [SphereWhereInput!]\n}\n\ninput SphereWhereUniqueInput {\n  id: ID\n  alias: String\n}\n\ntype Subscription {\n  account(where: AccountSubscriptionWhereInput): AccountSubscriptionPayload\n  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload\n  postMetadata(where: PostMetadataSubscriptionWhereInput): PostMetadataSubscriptionPayload\n  sphere(where: SphereSubscriptionWhereInput): SphereSubscriptionPayload\n}\n'
//# sourceMappingURL=prisma-schema.js.map
