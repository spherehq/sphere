import { DocumentNode } from 'graphql'
import { BaseClientOptions, Model } from 'prisma-client-lib'
export declare type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<
  T
> &
  U[keyof U]
export interface Exists {
  post: (where?: PostWhereInput) => Promise<boolean>
  postMetadata: (where?: PostMetadataWhereInput) => Promise<boolean>
}
export interface Node {}
export declare type FragmentableArray<T> = Promise<Array<T>> & Fragmentable
export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>
}
export interface Prisma {
  $exists: Exists
  $graphql: <T = any>(
    query: string,
    variables?: {
      [key: string]: any
    },
  ) => Promise<T>
  post: (where: PostWhereUniqueInput) => PostPromise
  posts: (args?: {
    where?: PostWhereInput
    orderBy?: PostOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => FragmentableArray<Post>
  postsConnection: (args?: {
    where?: PostWhereInput
    orderBy?: PostOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => PostConnectionPromise
  postMetadatas: (args?: {
    where?: PostMetadataWhereInput
    orderBy?: PostMetadataOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => FragmentableArray<PostMetadata>
  postMetadatasConnection: (args?: {
    where?: PostMetadataWhereInput
    orderBy?: PostMetadataOrderByInput
    skip?: Int
    after?: String
    before?: String
    first?: Int
    last?: Int
  }) => PostMetadataConnectionPromise
  node: (args: { id: ID_Output }) => Node
  createPost: (data: PostCreateInput) => PostPromise
  updatePost: (args: {
    data: PostUpdateInput
    where: PostWhereUniqueInput
  }) => PostPromise
  updateManyPosts: (args: {
    data: PostUpdateManyMutationInput
    where?: PostWhereInput
  }) => BatchPayloadPromise
  upsertPost: (args: {
    where: PostWhereUniqueInput
    create: PostCreateInput
    update: PostUpdateInput
  }) => PostPromise
  deletePost: (where: PostWhereUniqueInput) => PostPromise
  deleteManyPosts: (where?: PostWhereInput) => BatchPayloadPromise
  createPostMetadata: (data: PostMetadataCreateInput) => PostMetadataPromise
  updateManyPostMetadatas: (args: {
    data: PostMetadataUpdateManyMutationInput
    where?: PostMetadataWhereInput
  }) => BatchPayloadPromise
  deleteManyPostMetadatas: (
    where?: PostMetadataWhereInput,
  ) => BatchPayloadPromise
  $subscribe: Subscription
}
export interface Subscription {
  post: (
    where?: PostSubscriptionWhereInput,
  ) => PostSubscriptionPayloadSubscription
  postMetadata: (
    where?: PostMetadataSubscriptionWhereInput,
  ) => PostMetadataSubscriptionPayloadSubscription
}
export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T
}
export declare type POST_STATUS = 'PUBLISHED' | 'DRAFT' | 'ARCHIVED' | 'SYNCING'
export declare type PostOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'content_ASC'
  | 'content_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'timeToRead_ASC'
  | 'timeToRead_DESC'
  | 'isPublished_ASC'
  | 'isPublished_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'status_ASC'
  | 'status_DESC'
export declare type PostMetadataOrderByInput =
  | 'fileHash_ASC'
  | 'fileHash_DESC'
  | 'filename_ASC'
  | 'filename_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
export declare type MutationType = 'CREATED' | 'UPDATED' | 'DELETED'
export interface PostWhereInput {
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  timeToRead?: Int
  timeToRead_not?: Int
  timeToRead_in?: Int[] | Int
  timeToRead_not_in?: Int[] | Int
  timeToRead_lt?: Int
  timeToRead_lte?: Int
  timeToRead_gt?: Int
  timeToRead_gte?: Int
  isPublished?: Boolean
  isPublished_not?: Boolean
  publishedAt?: DateTimeInput
  publishedAt_not?: DateTimeInput
  publishedAt_in?: DateTimeInput[] | DateTimeInput
  publishedAt_not_in?: DateTimeInput[] | DateTimeInput
  publishedAt_lt?: DateTimeInput
  publishedAt_lte?: DateTimeInput
  publishedAt_gt?: DateTimeInput
  publishedAt_gte?: DateTimeInput
  createdAt?: DateTimeInput
  createdAt_not?: DateTimeInput
  createdAt_in?: DateTimeInput[] | DateTimeInput
  createdAt_not_in?: DateTimeInput[] | DateTimeInput
  createdAt_lt?: DateTimeInput
  createdAt_lte?: DateTimeInput
  createdAt_gt?: DateTimeInput
  createdAt_gte?: DateTimeInput
  updatedAt?: DateTimeInput
  updatedAt_not?: DateTimeInput
  updatedAt_in?: DateTimeInput[] | DateTimeInput
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput
  updatedAt_lt?: DateTimeInput
  updatedAt_lte?: DateTimeInput
  updatedAt_gt?: DateTimeInput
  updatedAt_gte?: DateTimeInput
  status?: POST_STATUS
  status_not?: POST_STATUS
  status_in?: POST_STATUS[] | POST_STATUS
  status_not_in?: POST_STATUS[] | POST_STATUS
  metadata?: PostMetadataWhereInput
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
}
export declare type PostWhereUniqueInput = AtLeastOne<{
  id: ID_Input
  slug?: String
}>
export interface PostMetadataUpdateOneRequiredInput {
  create?: PostMetadataCreateInput
  update?: PostMetadataUpdateDataInput
  upsert?: PostMetadataUpsertNestedInput
}
export interface PostMetadataUpsertNestedInput {
  update: PostMetadataUpdateDataInput
  create: PostMetadataCreateInput
}
export interface PostUpdateInput {
  title?: String
  content?: Json
  slug?: String
  timeToRead?: Int
  isPublished?: Boolean
  publishedAt?: DateTimeInput
  status?: POST_STATUS
  metadata?: PostMetadataUpdateOneRequiredInput
}
export interface PostMetadataUpdateDataInput {
  fileHash?: String
  filename?: String
}
export interface PostCreateInput {
  title: String
  content: Json
  slug: String
  timeToRead?: Int
  isPublished?: Boolean
  publishedAt?: DateTimeInput
  status?: POST_STATUS
  metadata: PostMetadataCreateOneInput
}
export interface PostSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
}
export interface PostMetadataCreateOneInput {
  create?: PostMetadataCreateInput
}
export interface PostMetadataCreateInput {
  fileHash: String
  filename?: String
}
export interface PostMetadataSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostMetadataWhereInput
  AND?:
    | PostMetadataSubscriptionWhereInput[]
    | PostMetadataSubscriptionWhereInput
  OR?: PostMetadataSubscriptionWhereInput[] | PostMetadataSubscriptionWhereInput
  NOT?:
    | PostMetadataSubscriptionWhereInput[]
    | PostMetadataSubscriptionWhereInput
}
export interface PostUpdateManyMutationInput {
  title?: String
  content?: Json
  slug?: String
  timeToRead?: Int
  isPublished?: Boolean
  publishedAt?: DateTimeInput
  status?: POST_STATUS
}
export interface PostMetadataUpdateManyMutationInput {
  fileHash?: String
  filename?: String
}
export interface PostMetadataWhereInput {
  fileHash?: String
  fileHash_not?: String
  fileHash_in?: String[] | String
  fileHash_not_in?: String[] | String
  fileHash_lt?: String
  fileHash_lte?: String
  fileHash_gt?: String
  fileHash_gte?: String
  fileHash_contains?: String
  fileHash_not_contains?: String
  fileHash_starts_with?: String
  fileHash_not_starts_with?: String
  fileHash_ends_with?: String
  fileHash_not_ends_with?: String
  filename?: String
  filename_not?: String
  filename_in?: String[] | String
  filename_not_in?: String[] | String
  filename_lt?: String
  filename_lte?: String
  filename_gt?: String
  filename_gte?: String
  filename_contains?: String
  filename_not_contains?: String
  filename_starts_with?: String
  filename_not_starts_with?: String
  filename_ends_with?: String
  filename_not_ends_with?: String
  AND?: PostMetadataWhereInput[] | PostMetadataWhereInput
  OR?: PostMetadataWhereInput[] | PostMetadataWhereInput
  NOT?: PostMetadataWhereInput[] | PostMetadataWhereInput
}
export interface NodeNode {
  id: ID_Output
}
export interface AggregatePostMetadata {
  count: Int
}
export interface AggregatePostMetadataPromise
  extends Promise<AggregatePostMetadata>,
    Fragmentable {
  count: () => Promise<Int>
}
export interface AggregatePostMetadataSubscription
  extends Promise<AsyncIterator<AggregatePostMetadata>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>
}
export interface BatchPayload {
  count: Long
}
export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>
}
export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>
}
export interface PostMetadataPreviousValues {
  fileHash: String
  filename?: String
}
export interface PostMetadataPreviousValuesPromise
  extends Promise<PostMetadataPreviousValues>,
    Fragmentable {
  fileHash: () => Promise<String>
  filename: () => Promise<String>
}
export interface PostMetadataPreviousValuesSubscription
  extends Promise<AsyncIterator<PostMetadataPreviousValues>>,
    Fragmentable {
  fileHash: () => Promise<AsyncIterator<String>>
  filename: () => Promise<AsyncIterator<String>>
}
export interface PostMetadataSubscriptionPayload {
  mutation: MutationType
  node: PostMetadata
  updatedFields: String[]
  previousValues: PostMetadataPreviousValues
}
export interface PostMetadataSubscriptionPayloadPromise
  extends Promise<PostMetadataSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>
  node: <T = PostMetadataPromise>() => T
  updatedFields: () => Promise<String[]>
  previousValues: <T = PostMetadataPreviousValuesPromise>() => T
}
export interface PostMetadataSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostMetadataSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>
  node: <T = PostMetadataSubscription>() => T
  updatedFields: () => Promise<AsyncIterator<String[]>>
  previousValues: <T = PostMetadataPreviousValuesSubscription>() => T
}
export interface Post {
  id: ID_Output
  title: String
  content: Json
  slug: String
  timeToRead: Int
  isPublished: Boolean
  publishedAt?: DateTimeOutput
  createdAt: DateTimeOutput
  updatedAt: DateTimeOutput
  status: POST_STATUS
}
export interface PostPromise extends Promise<Post>, Fragmentable {
  id: () => Promise<ID_Output>
  title: () => Promise<String>
  content: () => Promise<Json>
  slug: () => Promise<String>
  timeToRead: () => Promise<Int>
  isPublished: () => Promise<Boolean>
  publishedAt: () => Promise<DateTimeOutput>
  createdAt: () => Promise<DateTimeOutput>
  updatedAt: () => Promise<DateTimeOutput>
  status: () => Promise<POST_STATUS>
  metadata: <T = PostMetadataPromise>() => T
}
export interface PostSubscription
  extends Promise<AsyncIterator<Post>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>
  title: () => Promise<AsyncIterator<String>>
  content: () => Promise<AsyncIterator<Json>>
  slug: () => Promise<AsyncIterator<String>>
  timeToRead: () => Promise<AsyncIterator<Int>>
  isPublished: () => Promise<AsyncIterator<Boolean>>
  publishedAt: () => Promise<AsyncIterator<DateTimeOutput>>
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>
  status: () => Promise<AsyncIterator<POST_STATUS>>
  metadata: <T = PostMetadataSubscription>() => T
}
export interface PostMetadataConnection {
  pageInfo: PageInfo
  edges: PostMetadataEdge[]
}
export interface PostMetadataConnectionPromise
  extends Promise<PostMetadataConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T
  edges: <T = FragmentableArray<PostMetadataEdge>>() => T
  aggregate: <T = AggregatePostMetadataPromise>() => T
}
export interface PostMetadataConnectionSubscription
  extends Promise<AsyncIterator<PostMetadataConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T
  edges: <T = Promise<AsyncIterator<PostMetadataEdgeSubscription>>>() => T
  aggregate: <T = AggregatePostMetadataSubscription>() => T
}
export interface PostSubscriptionPayload {
  mutation: MutationType
  node: Post
  updatedFields: String[]
  previousValues: PostPreviousValues
}
export interface PostSubscriptionPayloadPromise
  extends Promise<PostSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>
  node: <T = PostPromise>() => T
  updatedFields: () => Promise<String[]>
  previousValues: <T = PostPreviousValuesPromise>() => T
}
export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>
  node: <T = PostSubscription>() => T
  updatedFields: () => Promise<AsyncIterator<String[]>>
  previousValues: <T = PostPreviousValuesSubscription>() => T
}
export interface AggregatePost {
  count: Int
}
export interface AggregatePostPromise
  extends Promise<AggregatePost>,
    Fragmentable {
  count: () => Promise<Int>
}
export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePost>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>
}
export interface PostMetadataEdge {
  node: PostMetadata
  cursor: String
}
export interface PostMetadataEdgePromise
  extends Promise<PostMetadataEdge>,
    Fragmentable {
  node: <T = PostMetadataPromise>() => T
  cursor: () => Promise<String>
}
export interface PostMetadataEdgeSubscription
  extends Promise<AsyncIterator<PostMetadataEdge>>,
    Fragmentable {
  node: <T = PostMetadataSubscription>() => T
  cursor: () => Promise<AsyncIterator<String>>
}
export interface PostPreviousValues {
  id: ID_Output
  title: String
  content: Json
  slug: String
  timeToRead: Int
  isPublished: Boolean
  publishedAt?: DateTimeOutput
  createdAt: DateTimeOutput
  updatedAt: DateTimeOutput
  status: POST_STATUS
}
export interface PostPreviousValuesPromise
  extends Promise<PostPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>
  title: () => Promise<String>
  content: () => Promise<Json>
  slug: () => Promise<String>
  timeToRead: () => Promise<Int>
  isPublished: () => Promise<Boolean>
  publishedAt: () => Promise<DateTimeOutput>
  createdAt: () => Promise<DateTimeOutput>
  updatedAt: () => Promise<DateTimeOutput>
  status: () => Promise<POST_STATUS>
}
export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>
  title: () => Promise<AsyncIterator<String>>
  content: () => Promise<AsyncIterator<Json>>
  slug: () => Promise<AsyncIterator<String>>
  timeToRead: () => Promise<AsyncIterator<Int>>
  isPublished: () => Promise<AsyncIterator<Boolean>>
  publishedAt: () => Promise<AsyncIterator<DateTimeOutput>>
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>
  status: () => Promise<AsyncIterator<POST_STATUS>>
}
export interface PostEdge {
  node: Post
  cursor: String
}
export interface PostEdgePromise extends Promise<PostEdge>, Fragmentable {
  node: <T = PostPromise>() => T
  cursor: () => Promise<String>
}
export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdge>>,
    Fragmentable {
  node: <T = PostSubscription>() => T
  cursor: () => Promise<AsyncIterator<String>>
}
export interface PostMetadata {
  fileHash: String
  filename?: String
}
export interface PostMetadataPromise
  extends Promise<PostMetadata>,
    Fragmentable {
  fileHash: () => Promise<String>
  filename: () => Promise<String>
}
export interface PostMetadataSubscription
  extends Promise<AsyncIterator<PostMetadata>>,
    Fragmentable {
  fileHash: () => Promise<AsyncIterator<String>>
  filename: () => Promise<AsyncIterator<String>>
}
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
}
export interface PostConnectionPromise
  extends Promise<PostConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T
  edges: <T = FragmentableArray<PostEdge>>() => T
  aggregate: <T = AggregatePostPromise>() => T
}
export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T
  edges: <T = Promise<AsyncIterator<PostEdgeSubscription>>>() => T
  aggregate: <T = AggregatePostSubscription>() => T
}
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}
export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>
  hasPreviousPage: () => Promise<Boolean>
  startCursor: () => Promise<String>
  endCursor: () => Promise<String>
}
export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>
  startCursor: () => Promise<AsyncIterator<String>>
  endCursor: () => Promise<AsyncIterator<String>>
}
export declare type Long = string
export declare type ID_Input = string | number
export declare type ID_Output = string
export declare type DateTimeInput = Date | string
export declare type DateTimeOutput = string
export declare type String = string
export declare type Boolean = boolean
export declare type Int = number
export declare type Json = any
export declare const models: Model[]
export declare const Prisma: ClientConstructor<Prisma>
export declare const prisma: Prisma
