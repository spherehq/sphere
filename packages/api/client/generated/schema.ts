import { Observable } from 'graphql-typed-client'

export interface Query {
  posts: (Post | null)[]
  post: Post | null
  spheres: (Sphere | null)[]
  sphere: Sphere | null
  account: Account | null
  __typename: 'Query'
}

/** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
export type ID = string

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

export enum MEDIA_TYPE {
  IMAGE = 'IMAGE',
}

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.  */
export type Int = number

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

export type DateTime = any

export enum POST_STATUS {
  PUBLISHED = 'PUBLISHED',
  DRAFT = 'DRAFT',
  ARCHIVED = 'ARCHIVED',
  SYNCING = 'SYNCING',
}

export enum AccountStatus {
  VERIFIED = 'VERIFIED',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum PostOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  content_ASC = 'content_ASC',
  content_DESC = 'content_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  timeToRead_ASC = 'timeToRead_ASC',
  timeToRead_DESC = 'timeToRead_DESC',
  isPublished_ASC = 'isPublished_ASC',
  isPublished_DESC = 'isPublished_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  status_ASC = 'status_ASC',
  status_DESC = 'status_DESC',
}

export interface Post {
  id: ID
  title: String
  featuredImage: Media | null
  content: Json
  images: Media[] | null
  slug: String
  timeToRead: Int
  isPublished: Boolean
  publishedAt: DateTime | null
  createdAt: DateTime
  updatedAt: DateTime
  status: POST_STATUS
  author: Account
  metadata: PostMetadata
  associatedWith: Sphere
  __typename: 'Post'
}

export interface Media {
  id: ID
  url: String
  type: MEDIA_TYPE
  __typename: 'Media'
}

export type Json = any

export enum MediaOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC',
  type_ASC = 'type_ASC',
  type_DESC = 'type_DESC',
}

export interface Account {
  id: ID
  status: AccountStatus
  firstName: String
  lastName: String
  emailAddress: String
  createdAt: DateTime
  updatedAt: DateTime
  spheres: Sphere[] | null
  posts: Post[] | null
  __typename: 'Account'
}

export enum SphereOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  alias_ASC = 'alias_ASC',
  alias_DESC = 'alias_DESC',
  aliasSlug_ASC = 'aliasSlug_ASC',
  aliasSlug_DESC = 'aliasSlug_DESC',
  slugPrefix_ASC = 'slugPrefix_ASC',
  slugPrefix_DESC = 'slugPrefix_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export interface Sphere {
  id: ID
  alias: String
  aliasSlug: String
  slugPrefix: String
  associatedWith: Account
  createdAt: DateTime
  updatedAt: DateTime
  posts: Post[] | null
  __typename: 'Sphere'
}

export interface PostMetadata {
  id: ID
  fileHash: String
  filename: String | null
  createdAt: DateTime
  updatedAt: DateTime
  __typename: 'PostMetadata'
}

export interface Mutation {
  mediaUpload: Media | null
  __typename: 'Mutation'
}

export type Upload = any

export interface QueryRequest {
  posts?:
    | [
        {
          where?: PostWhereInput | null
          orderBy?: PostOrderByInput | null
          skip?: Int | null
          after?: String | null
          before?: String | null
          first?: Int | null
          last?: Int | null
        },
        PostRequest,
      ]
    | PostRequest
  post?: [{ where: PostWhereUniqueInput }, PostRequest]
  spheres?:
    | [
        {
          where?: SphereWhereInput | null
          orderBy?: SphereOrderByInput | null
          skip?: Int | null
          after?: String | null
          before?: String | null
          first?: Int | null
          last?: Int | null
        },
        SphereRequest,
      ]
    | SphereRequest
  sphere?: [{ where: SphereWhereUniqueInput }, SphereRequest]
  account?: [{ where: AccountWhereUniqueInput }, AccountRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PostWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: ID[] | null
  id_not_in?: ID[] | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | null
  title_not_in?: String[] | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  featuredImage?: MediaWhereInput | null
  images_every?: MediaWhereInput | null
  images_some?: MediaWhereInput | null
  images_none?: MediaWhereInput | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | null
  slug_not_in?: String[] | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  timeToRead?: Int | null
  timeToRead_not?: Int | null
  timeToRead_in?: Int[] | null
  timeToRead_not_in?: Int[] | null
  timeToRead_lt?: Int | null
  timeToRead_lte?: Int | null
  timeToRead_gt?: Int | null
  timeToRead_gte?: Int | null
  isPublished?: Boolean | null
  isPublished_not?: Boolean | null
  publishedAt?: DateTime | null
  publishedAt_not?: DateTime | null
  publishedAt_in?: DateTime[] | null
  publishedAt_not_in?: DateTime[] | null
  publishedAt_lt?: DateTime | null
  publishedAt_lte?: DateTime | null
  publishedAt_gt?: DateTime | null
  publishedAt_gte?: DateTime | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | null
  createdAt_not_in?: DateTime[] | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | null
  updatedAt_not_in?: DateTime[] | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  status?: POST_STATUS | null
  status_not?: POST_STATUS | null
  status_in?: POST_STATUS[] | null
  status_not_in?: POST_STATUS[] | null
  author?: AccountWhereInput | null
  metadata?: PostMetadataWhereInput | null
  associatedWith?: SphereWhereInput | null
  AND?: PostWhereInput[] | null
  OR?: PostWhereInput[] | null
  NOT?: PostWhereInput[] | null
}

export interface MediaWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: ID[] | null
  id_not_in?: ID[] | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | null
  url_not_in?: String[] | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  type?: MEDIA_TYPE | null
  type_not?: MEDIA_TYPE | null
  type_in?: MEDIA_TYPE[] | null
  type_not_in?: MEDIA_TYPE[] | null
  AND?: MediaWhereInput[] | null
  OR?: MediaWhereInput[] | null
  NOT?: MediaWhereInput[] | null
}

export interface AccountWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: ID[] | null
  id_not_in?: ID[] | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  status?: AccountStatus | null
  status_not?: AccountStatus | null
  status_in?: AccountStatus[] | null
  status_not_in?: AccountStatus[] | null
  firstName?: String | null
  firstName_not?: String | null
  firstName_in?: String[] | null
  firstName_not_in?: String[] | null
  firstName_lt?: String | null
  firstName_lte?: String | null
  firstName_gt?: String | null
  firstName_gte?: String | null
  firstName_contains?: String | null
  firstName_not_contains?: String | null
  firstName_starts_with?: String | null
  firstName_not_starts_with?: String | null
  firstName_ends_with?: String | null
  firstName_not_ends_with?: String | null
  lastName?: String | null
  lastName_not?: String | null
  lastName_in?: String[] | null
  lastName_not_in?: String[] | null
  lastName_lt?: String | null
  lastName_lte?: String | null
  lastName_gt?: String | null
  lastName_gte?: String | null
  lastName_contains?: String | null
  lastName_not_contains?: String | null
  lastName_starts_with?: String | null
  lastName_not_starts_with?: String | null
  lastName_ends_with?: String | null
  lastName_not_ends_with?: String | null
  emailAddress?: String | null
  emailAddress_not?: String | null
  emailAddress_in?: String[] | null
  emailAddress_not_in?: String[] | null
  emailAddress_lt?: String | null
  emailAddress_lte?: String | null
  emailAddress_gt?: String | null
  emailAddress_gte?: String | null
  emailAddress_contains?: String | null
  emailAddress_not_contains?: String | null
  emailAddress_starts_with?: String | null
  emailAddress_not_starts_with?: String | null
  emailAddress_ends_with?: String | null
  emailAddress_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | null
  createdAt_not_in?: DateTime[] | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | null
  updatedAt_not_in?: DateTime[] | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  spheres_every?: SphereWhereInput | null
  spheres_some?: SphereWhereInput | null
  spheres_none?: SphereWhereInput | null
  posts_every?: PostWhereInput | null
  posts_some?: PostWhereInput | null
  posts_none?: PostWhereInput | null
  AND?: AccountWhereInput[] | null
  OR?: AccountWhereInput[] | null
  NOT?: AccountWhereInput[] | null
}

export interface SphereWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: ID[] | null
  id_not_in?: ID[] | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  alias?: String | null
  alias_not?: String | null
  alias_in?: String[] | null
  alias_not_in?: String[] | null
  alias_lt?: String | null
  alias_lte?: String | null
  alias_gt?: String | null
  alias_gte?: String | null
  alias_contains?: String | null
  alias_not_contains?: String | null
  alias_starts_with?: String | null
  alias_not_starts_with?: String | null
  alias_ends_with?: String | null
  alias_not_ends_with?: String | null
  aliasSlug?: String | null
  aliasSlug_not?: String | null
  aliasSlug_in?: String[] | null
  aliasSlug_not_in?: String[] | null
  aliasSlug_lt?: String | null
  aliasSlug_lte?: String | null
  aliasSlug_gt?: String | null
  aliasSlug_gte?: String | null
  aliasSlug_contains?: String | null
  aliasSlug_not_contains?: String | null
  aliasSlug_starts_with?: String | null
  aliasSlug_not_starts_with?: String | null
  aliasSlug_ends_with?: String | null
  aliasSlug_not_ends_with?: String | null
  slugPrefix?: String | null
  slugPrefix_not?: String | null
  slugPrefix_in?: String[] | null
  slugPrefix_not_in?: String[] | null
  slugPrefix_lt?: String | null
  slugPrefix_lte?: String | null
  slugPrefix_gt?: String | null
  slugPrefix_gte?: String | null
  slugPrefix_contains?: String | null
  slugPrefix_not_contains?: String | null
  slugPrefix_starts_with?: String | null
  slugPrefix_not_starts_with?: String | null
  slugPrefix_ends_with?: String | null
  slugPrefix_not_ends_with?: String | null
  associatedWith?: AccountWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | null
  createdAt_not_in?: DateTime[] | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | null
  updatedAt_not_in?: DateTime[] | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  posts_every?: PostWhereInput | null
  posts_some?: PostWhereInput | null
  posts_none?: PostWhereInput | null
  AND?: SphereWhereInput[] | null
  OR?: SphereWhereInput[] | null
  NOT?: SphereWhereInput[] | null
}

export interface PostMetadataWhereInput {
  id?: ID | null
  id_not?: ID | null
  id_in?: ID[] | null
  id_not_in?: ID[] | null
  id_lt?: ID | null
  id_lte?: ID | null
  id_gt?: ID | null
  id_gte?: ID | null
  id_contains?: ID | null
  id_not_contains?: ID | null
  id_starts_with?: ID | null
  id_not_starts_with?: ID | null
  id_ends_with?: ID | null
  id_not_ends_with?: ID | null
  fileHash?: String | null
  fileHash_not?: String | null
  fileHash_in?: String[] | null
  fileHash_not_in?: String[] | null
  fileHash_lt?: String | null
  fileHash_lte?: String | null
  fileHash_gt?: String | null
  fileHash_gte?: String | null
  fileHash_contains?: String | null
  fileHash_not_contains?: String | null
  fileHash_starts_with?: String | null
  fileHash_not_starts_with?: String | null
  fileHash_ends_with?: String | null
  fileHash_not_ends_with?: String | null
  filename?: String | null
  filename_not?: String | null
  filename_in?: String[] | null
  filename_not_in?: String[] | null
  filename_lt?: String | null
  filename_lte?: String | null
  filename_gt?: String | null
  filename_gte?: String | null
  filename_contains?: String | null
  filename_not_contains?: String | null
  filename_starts_with?: String | null
  filename_not_starts_with?: String | null
  filename_ends_with?: String | null
  filename_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | null
  createdAt_not_in?: DateTime[] | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | null
  updatedAt_not_in?: DateTime[] | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  AND?: PostMetadataWhereInput[] | null
  OR?: PostMetadataWhereInput[] | null
  NOT?: PostMetadataWhereInput[] | null
}

export interface PostRequest {
  id?: boolean | number
  title?: boolean | number
  featuredImage?: MediaRequest
  content?: boolean | number
  images?:
    | [
        {
          where?: MediaWhereInput | null
          orderBy?: MediaOrderByInput | null
          skip?: Int | null
          after?: String | null
          before?: String | null
          first?: Int | null
          last?: Int | null
        },
        MediaRequest,
      ]
    | MediaRequest
  slug?: boolean | number
  timeToRead?: boolean | number
  isPublished?: boolean | number
  publishedAt?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  status?: boolean | number
  author?: AccountRequest
  metadata?: PostMetadataRequest
  associatedWith?: SphereRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface MediaRequest {
  id?: boolean | number
  url?: boolean | number
  type?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface AccountRequest {
  id?: boolean | number
  status?: boolean | number
  firstName?: boolean | number
  lastName?: boolean | number
  emailAddress?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  spheres?:
    | [
        {
          where?: SphereWhereInput | null
          orderBy?: SphereOrderByInput | null
          skip?: Int | null
          after?: String | null
          before?: String | null
          first?: Int | null
          last?: Int | null
        },
        SphereRequest,
      ]
    | SphereRequest
  posts?:
    | [
        {
          where?: PostWhereInput | null
          orderBy?: PostOrderByInput | null
          skip?: Int | null
          after?: String | null
          before?: String | null
          first?: Int | null
          last?: Int | null
        },
        PostRequest,
      ]
    | PostRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface SphereRequest {
  id?: boolean | number
  alias?: boolean | number
  aliasSlug?: boolean | number
  slugPrefix?: boolean | number
  associatedWith?: AccountRequest
  createdAt?: boolean | number
  updatedAt?: boolean | number
  posts?:
    | [
        {
          where?: PostWhereInput | null
          orderBy?: PostOrderByInput | null
          skip?: Int | null
          after?: String | null
          before?: String | null
          first?: Int | null
          last?: Int | null
        },
        PostRequest,
      ]
    | PostRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PostMetadataRequest {
  id?: boolean | number
  fileHash?: boolean | number
  filename?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PostWhereUniqueInput {
  id?: ID | null
  slug?: String | null
}

export interface SphereWhereUniqueInput {
  id?: ID | null
  alias?: String | null
  aliasSlug?: String | null
}

export interface AccountWhereUniqueInput {
  id?: ID | null
  emailAddress?: String | null
}

export interface MutationRequest {
  mediaUpload?: [{ file: Upload }, MediaRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

const Query_possibleTypes = ['Query']
export const isQuery = (obj: { __typename: String }): obj is Query => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Query_possibleTypes.includes(obj.__typename)
}

const Post_possibleTypes = ['Post']
export const isPost = (obj: { __typename: String }): obj is Post => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Post_possibleTypes.includes(obj.__typename)
}

const Media_possibleTypes = ['Media']
export const isMedia = (obj: { __typename: String }): obj is Media => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Media_possibleTypes.includes(obj.__typename)
}

const Account_possibleTypes = ['Account']
export const isAccount = (obj: { __typename: String }): obj is Account => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Account_possibleTypes.includes(obj.__typename)
}

const Sphere_possibleTypes = ['Sphere']
export const isSphere = (obj: { __typename: String }): obj is Sphere => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Sphere_possibleTypes.includes(obj.__typename)
}

const PostMetadata_possibleTypes = ['PostMetadata']
export const isPostMetadata = (obj: { __typename: String }): obj is PostMetadata => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PostMetadata_possibleTypes.includes(obj.__typename)
}

const Mutation_possibleTypes = ['Mutation']
export const isMutation = (obj: { __typename: String }): obj is Mutation => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Mutation_possibleTypes.includes(obj.__typename)
}

export interface QueryPromiseChain {
  posts: ((args?: {
    where?: PostWhereInput | null
    orderBy?: PostOrderByInput | null
    skip?: Int | null
    after?: String | null
    before?: String | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: PostRequest, defaultValue?: (Post | null)[]) => Promise<(Post | null)[]> }) &
    ({ execute: (request: PostRequest, defaultValue?: (Post | null)[]) => Promise<(Post | null)[]> })
  post: (args: {
    where: PostWhereUniqueInput
  }) => PostPromiseChain & { execute: (request: PostRequest, defaultValue?: Post | null) => Promise<Post | null> }
  spheres: ((args?: {
    where?: SphereWhereInput | null
    orderBy?: SphereOrderByInput | null
    skip?: Int | null
    after?: String | null
    before?: String | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: SphereRequest, defaultValue?: (Sphere | null)[]) => Promise<(Sphere | null)[]> }) &
    ({ execute: (request: SphereRequest, defaultValue?: (Sphere | null)[]) => Promise<(Sphere | null)[]> })
  sphere: (args: {
    where: SphereWhereUniqueInput
  }) => SpherePromiseChain & { execute: (request: SphereRequest, defaultValue?: Sphere | null) => Promise<Sphere | null> }
  account: (args: {
    where: AccountWhereUniqueInput
  }) => AccountPromiseChain & {
    execute: (request: AccountRequest, defaultValue?: Account | null) => Promise<Account | null>
  }
}

export interface QueryObservableChain {
  posts: ((args?: {
    where?: PostWhereInput | null
    orderBy?: PostOrderByInput | null
    skip?: Int | null
    after?: String | null
    before?: String | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: PostRequest, defaultValue?: (Post | null)[]) => Observable<(Post | null)[]> }) &
    ({ execute: (request: PostRequest, defaultValue?: (Post | null)[]) => Observable<(Post | null)[]> })
  post: (args: {
    where: PostWhereUniqueInput
  }) => PostObservableChain & { execute: (request: PostRequest, defaultValue?: Post | null) => Observable<Post | null> }
  spheres: ((args?: {
    where?: SphereWhereInput | null
    orderBy?: SphereOrderByInput | null
    skip?: Int | null
    after?: String | null
    before?: String | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: SphereRequest, defaultValue?: (Sphere | null)[]) => Observable<(Sphere | null)[]> }) &
    ({ execute: (request: SphereRequest, defaultValue?: (Sphere | null)[]) => Observable<(Sphere | null)[]> })
  sphere: (args: {
    where: SphereWhereUniqueInput
  }) => SphereObservableChain & {
    execute: (request: SphereRequest, defaultValue?: Sphere | null) => Observable<Sphere | null>
  }
  account: (args: {
    where: AccountWhereUniqueInput
  }) => AccountObservableChain & {
    execute: (request: AccountRequest, defaultValue?: Account | null) => Observable<Account | null>
  }
}

export interface PostPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  featuredImage: MediaPromiseChain & {
    execute: (request: MediaRequest, defaultValue?: Media | null) => Promise<Media | null>
  }
  content: { execute: (request?: boolean | number, defaultValue?: Json) => Promise<Json> }
  images: ((args?: {
    where?: MediaWhereInput | null
    orderBy?: MediaOrderByInput | null
    skip?: Int | null
    after?: String | null
    before?: String | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: MediaRequest, defaultValue?: Media[] | null) => Promise<Media[] | null> }) &
    ({ execute: (request: MediaRequest, defaultValue?: Media[] | null) => Promise<Media[] | null> })
  slug: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  timeToRead: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  isPublished: { execute: (request?: boolean | number, defaultValue?: Boolean) => Promise<Boolean> }
  publishedAt: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Promise<DateTime | null> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
  status: { execute: (request?: boolean | number, defaultValue?: POST_STATUS) => Promise<POST_STATUS> }
  author: AccountPromiseChain & { execute: (request: AccountRequest, defaultValue?: Account) => Promise<Account> }
  metadata: PostMetadataPromiseChain & {
    execute: (request: PostMetadataRequest, defaultValue?: PostMetadata) => Promise<PostMetadata>
  }
  associatedWith: SpherePromiseChain & { execute: (request: SphereRequest, defaultValue?: Sphere) => Promise<Sphere> }
}

export interface PostObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  featuredImage: MediaObservableChain & {
    execute: (request: MediaRequest, defaultValue?: Media | null) => Observable<Media | null>
  }
  content: { execute: (request?: boolean | number, defaultValue?: Json) => Observable<Json> }
  images: ((args?: {
    where?: MediaWhereInput | null
    orderBy?: MediaOrderByInput | null
    skip?: Int | null
    after?: String | null
    before?: String | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: MediaRequest, defaultValue?: Media[] | null) => Observable<Media[] | null> }) &
    ({ execute: (request: MediaRequest, defaultValue?: Media[] | null) => Observable<Media[] | null> })
  slug: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  timeToRead: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  isPublished: { execute: (request?: boolean | number, defaultValue?: Boolean) => Observable<Boolean> }
  publishedAt: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Observable<DateTime | null> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
  status: { execute: (request?: boolean | number, defaultValue?: POST_STATUS) => Observable<POST_STATUS> }
  author: AccountObservableChain & { execute: (request: AccountRequest, defaultValue?: Account) => Observable<Account> }
  metadata: PostMetadataObservableChain & {
    execute: (request: PostMetadataRequest, defaultValue?: PostMetadata) => Observable<PostMetadata>
  }
  associatedWith: SphereObservableChain & { execute: (request: SphereRequest, defaultValue?: Sphere) => Observable<Sphere> }
}

export interface MediaPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  url: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  type: { execute: (request?: boolean | number, defaultValue?: MEDIA_TYPE) => Promise<MEDIA_TYPE> }
}

export interface MediaObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  url: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  type: { execute: (request?: boolean | number, defaultValue?: MEDIA_TYPE) => Observable<MEDIA_TYPE> }
}

export interface AccountPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  status: { execute: (request?: boolean | number, defaultValue?: AccountStatus) => Promise<AccountStatus> }
  firstName: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  lastName: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  emailAddress: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
  spheres: ((args?: {
    where?: SphereWhereInput | null
    orderBy?: SphereOrderByInput | null
    skip?: Int | null
    after?: String | null
    before?: String | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: SphereRequest, defaultValue?: Sphere[] | null) => Promise<Sphere[] | null> }) &
    ({ execute: (request: SphereRequest, defaultValue?: Sphere[] | null) => Promise<Sphere[] | null> })
  posts: ((args?: {
    where?: PostWhereInput | null
    orderBy?: PostOrderByInput | null
    skip?: Int | null
    after?: String | null
    before?: String | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: PostRequest, defaultValue?: Post[] | null) => Promise<Post[] | null> }) &
    ({ execute: (request: PostRequest, defaultValue?: Post[] | null) => Promise<Post[] | null> })
}

export interface AccountObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  status: { execute: (request?: boolean | number, defaultValue?: AccountStatus) => Observable<AccountStatus> }
  firstName: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  lastName: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  emailAddress: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
  spheres: ((args?: {
    where?: SphereWhereInput | null
    orderBy?: SphereOrderByInput | null
    skip?: Int | null
    after?: String | null
    before?: String | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: SphereRequest, defaultValue?: Sphere[] | null) => Observable<Sphere[] | null> }) &
    ({ execute: (request: SphereRequest, defaultValue?: Sphere[] | null) => Observable<Sphere[] | null> })
  posts: ((args?: {
    where?: PostWhereInput | null
    orderBy?: PostOrderByInput | null
    skip?: Int | null
    after?: String | null
    before?: String | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: PostRequest, defaultValue?: Post[] | null) => Observable<Post[] | null> }) &
    ({ execute: (request: PostRequest, defaultValue?: Post[] | null) => Observable<Post[] | null> })
}

export interface SpherePromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  alias: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  aliasSlug: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  slugPrefix: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  associatedWith: AccountPromiseChain & { execute: (request: AccountRequest, defaultValue?: Account) => Promise<Account> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
  posts: ((args?: {
    where?: PostWhereInput | null
    orderBy?: PostOrderByInput | null
    skip?: Int | null
    after?: String | null
    before?: String | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: PostRequest, defaultValue?: Post[] | null) => Promise<Post[] | null> }) &
    ({ execute: (request: PostRequest, defaultValue?: Post[] | null) => Promise<Post[] | null> })
}

export interface SphereObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  alias: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  aliasSlug: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  slugPrefix: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  associatedWith: AccountObservableChain & {
    execute: (request: AccountRequest, defaultValue?: Account) => Observable<Account>
  }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
  posts: ((args?: {
    where?: PostWhereInput | null
    orderBy?: PostOrderByInput | null
    skip?: Int | null
    after?: String | null
    before?: String | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: PostRequest, defaultValue?: Post[] | null) => Observable<Post[] | null> }) &
    ({ execute: (request: PostRequest, defaultValue?: Post[] | null) => Observable<Post[] | null> })
}

export interface PostMetadataPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  fileHash: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  filename: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
}

export interface PostMetadataObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  fileHash: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  filename: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
}

export interface MutationPromiseChain {
  mediaUpload: (args: {
    file: Upload
  }) => MediaPromiseChain & { execute: (request: MediaRequest, defaultValue?: Media | null) => Promise<Media | null> }
}

export interface MutationObservableChain {
  mediaUpload: (args: {
    file: Upload
  }) => MediaObservableChain & { execute: (request: MediaRequest, defaultValue?: Media | null) => Observable<Media | null> }
}
