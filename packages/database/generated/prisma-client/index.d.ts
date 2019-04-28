import { DocumentNode } from "graphql";
import { BaseClientOptions, Model } from "prisma-client-lib";
export declare type AtLeastOne<T, U = {
    [K in keyof T]: Pick<T, K>;
}> = Partial<T> & U[keyof U];
export interface Exists {
    account: (where?: AccountWhereInput) => Promise<boolean>;
    post: (where?: PostWhereInput) => Promise<boolean>;
    postMetadata: (where?: PostMetadataWhereInput) => Promise<boolean>;
    sphere: (where?: SphereWhereInput) => Promise<boolean>;
}
export interface Node {
}
export declare type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;
export interface Fragmentable {
    $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}
export interface Prisma {
    $exists: Exists;
    $graphql: <T = any>(query: string, variables?: {
        [key: string]: any;
    }) => Promise<T>;
    account: (where: AccountWhereUniqueInput) => AccountPromise;
    accounts: (args?: {
        where?: AccountWhereInput;
        orderBy?: AccountOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Account>;
    accountsConnection: (args?: {
        where?: AccountWhereInput;
        orderBy?: AccountOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => AccountConnectionPromise;
    post: (where: PostWhereUniqueInput) => PostPromise;
    posts: (args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Post>;
    postsConnection: (args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => PostConnectionPromise;
    postMetadata: (where: PostMetadataWhereUniqueInput) => PostMetadataPromise;
    postMetadatas: (args?: {
        where?: PostMetadataWhereInput;
        orderBy?: PostMetadataOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<PostMetadata>;
    postMetadatasConnection: (args?: {
        where?: PostMetadataWhereInput;
        orderBy?: PostMetadataOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => PostMetadataConnectionPromise;
    sphere: (where: SphereWhereUniqueInput) => SpherePromise;
    spheres: (args?: {
        where?: SphereWhereInput;
        orderBy?: SphereOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Sphere>;
    spheresConnection: (args?: {
        where?: SphereWhereInput;
        orderBy?: SphereOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => SphereConnectionPromise;
    node: (args: {
        id: ID_Output;
    }) => Node;
    createAccount: (data: AccountCreateInput) => AccountPromise;
    updateAccount: (args: {
        data: AccountUpdateInput;
        where: AccountWhereUniqueInput;
    }) => AccountPromise;
    updateManyAccounts: (args: {
        data: AccountUpdateManyMutationInput;
        where?: AccountWhereInput;
    }) => BatchPayloadPromise;
    upsertAccount: (args: {
        where: AccountWhereUniqueInput;
        create: AccountCreateInput;
        update: AccountUpdateInput;
    }) => AccountPromise;
    deleteAccount: (where: AccountWhereUniqueInput) => AccountPromise;
    deleteManyAccounts: (where?: AccountWhereInput) => BatchPayloadPromise;
    createPost: (data: PostCreateInput) => PostPromise;
    updatePost: (args: {
        data: PostUpdateInput;
        where: PostWhereUniqueInput;
    }) => PostPromise;
    updateManyPosts: (args: {
        data: PostUpdateManyMutationInput;
        where?: PostWhereInput;
    }) => BatchPayloadPromise;
    upsertPost: (args: {
        where: PostWhereUniqueInput;
        create: PostCreateInput;
        update: PostUpdateInput;
    }) => PostPromise;
    deletePost: (where: PostWhereUniqueInput) => PostPromise;
    deleteManyPosts: (where?: PostWhereInput) => BatchPayloadPromise;
    createPostMetadata: (data: PostMetadataCreateInput) => PostMetadataPromise;
    updatePostMetadata: (args: {
        data: PostMetadataUpdateInput;
        where: PostMetadataWhereUniqueInput;
    }) => PostMetadataPromise;
    updateManyPostMetadatas: (args: {
        data: PostMetadataUpdateManyMutationInput;
        where?: PostMetadataWhereInput;
    }) => BatchPayloadPromise;
    upsertPostMetadata: (args: {
        where: PostMetadataWhereUniqueInput;
        create: PostMetadataCreateInput;
        update: PostMetadataUpdateInput;
    }) => PostMetadataPromise;
    deletePostMetadata: (where: PostMetadataWhereUniqueInput) => PostMetadataPromise;
    deleteManyPostMetadatas: (where?: PostMetadataWhereInput) => BatchPayloadPromise;
    createSphere: (data: SphereCreateInput) => SpherePromise;
    updateSphere: (args: {
        data: SphereUpdateInput;
        where: SphereWhereUniqueInput;
    }) => SpherePromise;
    updateManySpheres: (args: {
        data: SphereUpdateManyMutationInput;
        where?: SphereWhereInput;
    }) => BatchPayloadPromise;
    upsertSphere: (args: {
        where: SphereWhereUniqueInput;
        create: SphereCreateInput;
        update: SphereUpdateInput;
    }) => SpherePromise;
    deleteSphere: (where: SphereWhereUniqueInput) => SpherePromise;
    deleteManySpheres: (where?: SphereWhereInput) => BatchPayloadPromise;
    $subscribe: Subscription;
}
export interface Subscription {
    account: (where?: AccountSubscriptionWhereInput) => AccountSubscriptionPayloadSubscription;
    post: (where?: PostSubscriptionWhereInput) => PostSubscriptionPayloadSubscription;
    postMetadata: (where?: PostMetadataSubscriptionWhereInput) => PostMetadataSubscriptionPayloadSubscription;
    sphere: (where?: SphereSubscriptionWhereInput) => SphereSubscriptionPayloadSubscription;
}
export interface ClientConstructor<T> {
    new (options?: BaseClientOptions): T;
}
export declare type POST_STATUS = "PUBLISHED" | "DRAFT" | "ARCHIVED" | "SYNCING";
export declare type AccountOrderByInput = "id_ASC" | "id_DESC" | "status_ASC" | "status_DESC" | "firstName_ASC" | "firstName_DESC" | "lastName_ASC" | "lastName_DESC" | "emailAddress_ASC" | "emailAddress_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type PostOrderByInput = "id_ASC" | "id_DESC" | "title_ASC" | "title_DESC" | "content_ASC" | "content_DESC" | "slug_ASC" | "slug_DESC" | "timeToRead_ASC" | "timeToRead_DESC" | "isPublished_ASC" | "isPublished_DESC" | "publishedAt_ASC" | "publishedAt_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "status_ASC" | "status_DESC";
export declare type PostMetadataOrderByInput = "id_ASC" | "id_DESC" | "fileHash_ASC" | "fileHash_DESC" | "filename_ASC" | "filename_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type AccountStatus = "VERIFIED" | "ACTIVE" | "INACTIVE";
export declare type SphereOrderByInput = "id_ASC" | "id_DESC" | "alias_ASC" | "alias_DESC" | "slugPrefix_ASC" | "slugPrefix_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type MutationType = "CREATED" | "UPDATED" | "DELETED";
export interface AccountUpdateManyMutationInput {
    status?: AccountStatus;
    firstName?: String;
    lastName?: String;
    emailAddress?: String;
}
export declare type AccountWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
    emailAddress?: String;
}>;
export interface AccountScalarWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    status?: AccountStatus;
    status_not?: AccountStatus;
    status_in?: AccountStatus[] | AccountStatus;
    status_not_in?: AccountStatus[] | AccountStatus;
    firstName?: String;
    firstName_not?: String;
    firstName_in?: String[] | String;
    firstName_not_in?: String[] | String;
    firstName_lt?: String;
    firstName_lte?: String;
    firstName_gt?: String;
    firstName_gte?: String;
    firstName_contains?: String;
    firstName_not_contains?: String;
    firstName_starts_with?: String;
    firstName_not_starts_with?: String;
    firstName_ends_with?: String;
    firstName_not_ends_with?: String;
    lastName?: String;
    lastName_not?: String;
    lastName_in?: String[] | String;
    lastName_not_in?: String[] | String;
    lastName_lt?: String;
    lastName_lte?: String;
    lastName_gt?: String;
    lastName_gte?: String;
    lastName_contains?: String;
    lastName_not_contains?: String;
    lastName_starts_with?: String;
    lastName_not_starts_with?: String;
    lastName_ends_with?: String;
    lastName_not_ends_with?: String;
    emailAddress?: String;
    emailAddress_not?: String;
    emailAddress_in?: String[] | String;
    emailAddress_not_in?: String[] | String;
    emailAddress_lt?: String;
    emailAddress_lte?: String;
    emailAddress_gt?: String;
    emailAddress_gte?: String;
    emailAddress_contains?: String;
    emailAddress_not_contains?: String;
    emailAddress_starts_with?: String;
    emailAddress_not_starts_with?: String;
    emailAddress_ends_with?: String;
    emailAddress_not_ends_with?: String;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    AND?: AccountScalarWhereInput[] | AccountScalarWhereInput;
    OR?: AccountScalarWhereInput[] | AccountScalarWhereInput;
    NOT?: AccountScalarWhereInput[] | AccountScalarWhereInput;
}
export interface AccountCreateManyInput {
    create?: AccountCreateInput[] | AccountCreateInput;
    connect?: AccountWhereUniqueInput[] | AccountWhereUniqueInput;
}
export interface AccountUpsertWithWhereUniqueNestedInput {
    where: AccountWhereUniqueInput;
    update: AccountUpdateDataInput;
    create: AccountCreateInput;
}
export interface PostMetadataCreateInput {
    fileHash: String;
    filename?: String;
}
export interface AccountUpdateDataInput {
    status?: AccountStatus;
    firstName?: String;
    lastName?: String;
    emailAddress?: String;
}
export interface PostMetadataSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: PostMetadataWhereInput;
    AND?: PostMetadataSubscriptionWhereInput[] | PostMetadataSubscriptionWhereInput;
    OR?: PostMetadataSubscriptionWhereInput[] | PostMetadataSubscriptionWhereInput;
    NOT?: PostMetadataSubscriptionWhereInput[] | PostMetadataSubscriptionWhereInput;
}
export declare type SphereWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
    alias?: String;
}>;
export declare type PostWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
    slug?: String;
}>;
export interface AccountUpdateWithWhereUniqueNestedInput {
    where: AccountWhereUniqueInput;
    data: AccountUpdateDataInput;
}
export interface SphereUpdateManyMutationInput {
    alias?: String;
    slugPrefix?: String;
}
export interface AccountUpdateManyInput {
    create?: AccountCreateInput[] | AccountCreateInput;
    update?: AccountUpdateWithWhereUniqueNestedInput[] | AccountUpdateWithWhereUniqueNestedInput;
    upsert?: AccountUpsertWithWhereUniqueNestedInput[] | AccountUpsertWithWhereUniqueNestedInput;
    delete?: AccountWhereUniqueInput[] | AccountWhereUniqueInput;
    connect?: AccountWhereUniqueInput[] | AccountWhereUniqueInput;
    set?: AccountWhereUniqueInput[] | AccountWhereUniqueInput;
    disconnect?: AccountWhereUniqueInput[] | AccountWhereUniqueInput;
    deleteMany?: AccountScalarWhereInput[] | AccountScalarWhereInput;
    updateMany?: AccountUpdateManyWithWhereNestedInput[] | AccountUpdateManyWithWhereNestedInput;
}
export interface PostMetadataUpdateManyMutationInput {
    fileHash?: String;
    filename?: String;
}
export interface SphereUpdateDataInput {
    alias?: String;
    slugPrefix?: String;
    associatedWith?: AccountUpdateManyInput;
}
export interface PostWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    title?: String;
    title_not?: String;
    title_in?: String[] | String;
    title_not_in?: String[] | String;
    title_lt?: String;
    title_lte?: String;
    title_gt?: String;
    title_gte?: String;
    title_contains?: String;
    title_not_contains?: String;
    title_starts_with?: String;
    title_not_starts_with?: String;
    title_ends_with?: String;
    title_not_ends_with?: String;
    slug?: String;
    slug_not?: String;
    slug_in?: String[] | String;
    slug_not_in?: String[] | String;
    slug_lt?: String;
    slug_lte?: String;
    slug_gt?: String;
    slug_gte?: String;
    slug_contains?: String;
    slug_not_contains?: String;
    slug_starts_with?: String;
    slug_not_starts_with?: String;
    slug_ends_with?: String;
    slug_not_ends_with?: String;
    timeToRead?: Int;
    timeToRead_not?: Int;
    timeToRead_in?: Int[] | Int;
    timeToRead_not_in?: Int[] | Int;
    timeToRead_lt?: Int;
    timeToRead_lte?: Int;
    timeToRead_gt?: Int;
    timeToRead_gte?: Int;
    isPublished?: Boolean;
    isPublished_not?: Boolean;
    publishedAt?: DateTimeInput;
    publishedAt_not?: DateTimeInput;
    publishedAt_in?: DateTimeInput[] | DateTimeInput;
    publishedAt_not_in?: DateTimeInput[] | DateTimeInput;
    publishedAt_lt?: DateTimeInput;
    publishedAt_lte?: DateTimeInput;
    publishedAt_gt?: DateTimeInput;
    publishedAt_gte?: DateTimeInput;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    status?: POST_STATUS;
    status_not?: POST_STATUS;
    status_in?: POST_STATUS[] | POST_STATUS;
    status_not_in?: POST_STATUS[] | POST_STATUS;
    metadata?: PostMetadataWhereInput;
    associatedWith?: SphereWhereInput;
    AND?: PostWhereInput[] | PostWhereInput;
    OR?: PostWhereInput[] | PostWhereInput;
    NOT?: PostWhereInput[] | PostWhereInput;
}
export interface SphereUpdateOneRequiredInput {
    create?: SphereCreateInput;
    update?: SphereUpdateDataInput;
    upsert?: SphereUpsertNestedInput;
    connect?: SphereWhereUniqueInput;
}
export interface SphereWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    alias?: String;
    alias_not?: String;
    alias_in?: String[] | String;
    alias_not_in?: String[] | String;
    alias_lt?: String;
    alias_lte?: String;
    alias_gt?: String;
    alias_gte?: String;
    alias_contains?: String;
    alias_not_contains?: String;
    alias_starts_with?: String;
    alias_not_starts_with?: String;
    alias_ends_with?: String;
    alias_not_ends_with?: String;
    slugPrefix?: String;
    slugPrefix_not?: String;
    slugPrefix_in?: String[] | String;
    slugPrefix_not_in?: String[] | String;
    slugPrefix_lt?: String;
    slugPrefix_lte?: String;
    slugPrefix_gt?: String;
    slugPrefix_gte?: String;
    slugPrefix_contains?: String;
    slugPrefix_not_contains?: String;
    slugPrefix_starts_with?: String;
    slugPrefix_not_starts_with?: String;
    slugPrefix_ends_with?: String;
    slugPrefix_not_ends_with?: String;
    associatedWith_every?: AccountWhereInput;
    associatedWith_some?: AccountWhereInput;
    associatedWith_none?: AccountWhereInput;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    AND?: SphereWhereInput[] | SphereWhereInput;
    OR?: SphereWhereInput[] | SphereWhereInput;
    NOT?: SphereWhereInput[] | SphereWhereInput;
}
export interface PostUpdateManyMutationInput {
    title?: String;
    content?: Json;
    slug?: String;
    timeToRead?: Int;
    isPublished?: Boolean;
    publishedAt?: DateTimeInput;
    status?: POST_STATUS;
}
export interface AccountUpdateManyDataInput {
    status?: AccountStatus;
    firstName?: String;
    lastName?: String;
    emailAddress?: String;
}
export interface AccountCreateInput {
    status?: AccountStatus;
    firstName: String;
    lastName: String;
    emailAddress: String;
}
export interface AccountUpdateManyWithWhereNestedInput {
    where: AccountScalarWhereInput;
    data: AccountUpdateManyDataInput;
}
export interface AccountUpdateInput {
    status?: AccountStatus;
    firstName?: String;
    lastName?: String;
    emailAddress?: String;
}
export interface PostSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: PostWhereInput;
    AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
    OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
    NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
}
export interface PostMetadataUpsertNestedInput {
    update: PostMetadataUpdateDataInput;
    create: PostMetadataCreateInput;
}
export interface SphereUpdateInput {
    alias?: String;
    slugPrefix?: String;
    associatedWith?: AccountUpdateManyInput;
}
export interface PostMetadataUpdateDataInput {
    fileHash?: String;
    filename?: String;
}
export interface PostMetadataWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    fileHash?: String;
    fileHash_not?: String;
    fileHash_in?: String[] | String;
    fileHash_not_in?: String[] | String;
    fileHash_lt?: String;
    fileHash_lte?: String;
    fileHash_gt?: String;
    fileHash_gte?: String;
    fileHash_contains?: String;
    fileHash_not_contains?: String;
    fileHash_starts_with?: String;
    fileHash_not_starts_with?: String;
    fileHash_ends_with?: String;
    fileHash_not_ends_with?: String;
    filename?: String;
    filename_not?: String;
    filename_in?: String[] | String;
    filename_not_in?: String[] | String;
    filename_lt?: String;
    filename_lte?: String;
    filename_gt?: String;
    filename_gte?: String;
    filename_contains?: String;
    filename_not_contains?: String;
    filename_starts_with?: String;
    filename_not_starts_with?: String;
    filename_ends_with?: String;
    filename_not_ends_with?: String;
    AND?: PostMetadataWhereInput[] | PostMetadataWhereInput;
    OR?: PostMetadataWhereInput[] | PostMetadataWhereInput;
    NOT?: PostMetadataWhereInput[] | PostMetadataWhereInput;
}
export interface PostMetadataUpdateOneRequiredInput {
    create?: PostMetadataCreateInput;
    update?: PostMetadataUpdateDataInput;
    upsert?: PostMetadataUpsertNestedInput;
    connect?: PostMetadataWhereUniqueInput;
}
export interface SphereUpsertNestedInput {
    update: SphereUpdateDataInput;
    create: SphereCreateInput;
}
export interface PostCreateInput {
    title: String;
    content: Json;
    slug: String;
    timeToRead?: Int;
    isPublished?: Boolean;
    publishedAt?: DateTimeInput;
    status?: POST_STATUS;
    metadata: PostMetadataCreateOneInput;
    associatedWith: SphereCreateOneInput;
}
export interface SphereSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: SphereWhereInput;
    AND?: SphereSubscriptionWhereInput[] | SphereSubscriptionWhereInput;
    OR?: SphereSubscriptionWhereInput[] | SphereSubscriptionWhereInput;
    NOT?: SphereSubscriptionWhereInput[] | SphereSubscriptionWhereInput;
}
export interface SphereCreateInput {
    alias: String;
    slugPrefix?: String;
    associatedWith?: AccountCreateManyInput;
}
export interface SphereCreateOneInput {
    create?: SphereCreateInput;
    connect?: SphereWhereUniqueInput;
}
export interface PostUpdateInput {
    title?: String;
    content?: Json;
    slug?: String;
    timeToRead?: Int;
    isPublished?: Boolean;
    publishedAt?: DateTimeInput;
    status?: POST_STATUS;
    metadata?: PostMetadataUpdateOneRequiredInput;
    associatedWith?: SphereUpdateOneRequiredInput;
}
export interface PostMetadataCreateOneInput {
    create?: PostMetadataCreateInput;
    connect?: PostMetadataWhereUniqueInput;
}
export interface AccountSubscriptionWhereInput {
    mutation_in?: MutationType[] | MutationType;
    updatedFields_contains?: String;
    updatedFields_contains_every?: String[] | String;
    updatedFields_contains_some?: String[] | String;
    node?: AccountWhereInput;
    AND?: AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput;
    OR?: AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput;
    NOT?: AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput;
}
export declare type PostMetadataWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
}>;
export interface AccountWhereInput {
    id?: ID_Input;
    id_not?: ID_Input;
    id_in?: ID_Input[] | ID_Input;
    id_not_in?: ID_Input[] | ID_Input;
    id_lt?: ID_Input;
    id_lte?: ID_Input;
    id_gt?: ID_Input;
    id_gte?: ID_Input;
    id_contains?: ID_Input;
    id_not_contains?: ID_Input;
    id_starts_with?: ID_Input;
    id_not_starts_with?: ID_Input;
    id_ends_with?: ID_Input;
    id_not_ends_with?: ID_Input;
    status?: AccountStatus;
    status_not?: AccountStatus;
    status_in?: AccountStatus[] | AccountStatus;
    status_not_in?: AccountStatus[] | AccountStatus;
    firstName?: String;
    firstName_not?: String;
    firstName_in?: String[] | String;
    firstName_not_in?: String[] | String;
    firstName_lt?: String;
    firstName_lte?: String;
    firstName_gt?: String;
    firstName_gte?: String;
    firstName_contains?: String;
    firstName_not_contains?: String;
    firstName_starts_with?: String;
    firstName_not_starts_with?: String;
    firstName_ends_with?: String;
    firstName_not_ends_with?: String;
    lastName?: String;
    lastName_not?: String;
    lastName_in?: String[] | String;
    lastName_not_in?: String[] | String;
    lastName_lt?: String;
    lastName_lte?: String;
    lastName_gt?: String;
    lastName_gte?: String;
    lastName_contains?: String;
    lastName_not_contains?: String;
    lastName_starts_with?: String;
    lastName_not_starts_with?: String;
    lastName_ends_with?: String;
    lastName_not_ends_with?: String;
    emailAddress?: String;
    emailAddress_not?: String;
    emailAddress_in?: String[] | String;
    emailAddress_not_in?: String[] | String;
    emailAddress_lt?: String;
    emailAddress_lte?: String;
    emailAddress_gt?: String;
    emailAddress_gte?: String;
    emailAddress_contains?: String;
    emailAddress_not_contains?: String;
    emailAddress_starts_with?: String;
    emailAddress_not_starts_with?: String;
    emailAddress_ends_with?: String;
    emailAddress_not_ends_with?: String;
    createdAt?: DateTimeInput;
    createdAt_not?: DateTimeInput;
    createdAt_in?: DateTimeInput[] | DateTimeInput;
    createdAt_not_in?: DateTimeInput[] | DateTimeInput;
    createdAt_lt?: DateTimeInput;
    createdAt_lte?: DateTimeInput;
    createdAt_gt?: DateTimeInput;
    createdAt_gte?: DateTimeInput;
    updatedAt?: DateTimeInput;
    updatedAt_not?: DateTimeInput;
    updatedAt_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
    updatedAt_lt?: DateTimeInput;
    updatedAt_lte?: DateTimeInput;
    updatedAt_gt?: DateTimeInput;
    updatedAt_gte?: DateTimeInput;
    AND?: AccountWhereInput[] | AccountWhereInput;
    OR?: AccountWhereInput[] | AccountWhereInput;
    NOT?: AccountWhereInput[] | AccountWhereInput;
}
export interface PostMetadataUpdateInput {
    fileHash?: String;
    filename?: String;
}
export interface NodeNode {
    id: ID_Output;
}
export interface SpherePreviousValues {
    id: ID_Output;
    alias: String;
    slugPrefix: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface SpherePreviousValuesPromise extends Promise<SpherePreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    alias: () => Promise<String>;
    slugPrefix: () => Promise<String>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface SpherePreviousValuesSubscription extends Promise<AsyncIterator<SpherePreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    alias: () => Promise<AsyncIterator<String>>;
    slugPrefix: () => Promise<AsyncIterator<String>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface PostMetadata {
    id: ID_Output;
    fileHash: String;
    filename?: String;
}
export interface PostMetadataPromise extends Promise<PostMetadata>, Fragmentable {
    id: () => Promise<ID_Output>;
    fileHash: () => Promise<String>;
    filename: () => Promise<String>;
}
export interface PostMetadataSubscription extends Promise<AsyncIterator<PostMetadata>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    fileHash: () => Promise<AsyncIterator<String>>;
    filename: () => Promise<AsyncIterator<String>>;
}
export interface AccountConnection {
    pageInfo: PageInfo;
    edges: AccountEdge[];
}
export interface AccountConnectionPromise extends Promise<AccountConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<AccountEdge>>() => T;
    aggregate: <T = AggregateAccountPromise>() => T;
}
export interface AccountConnectionSubscription extends Promise<AsyncIterator<AccountConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<AccountEdgeSubscription>>>() => T;
    aggregate: <T = AggregateAccountSubscription>() => T;
}
export interface PageInfo {
    hasNextPage: Boolean;
    hasPreviousPage: Boolean;
    startCursor?: String;
    endCursor?: String;
}
export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
    hasNextPage: () => Promise<Boolean>;
    hasPreviousPage: () => Promise<Boolean>;
    startCursor: () => Promise<String>;
    endCursor: () => Promise<String>;
}
export interface PageInfoSubscription extends Promise<AsyncIterator<PageInfo>>, Fragmentable {
    hasNextPage: () => Promise<AsyncIterator<Boolean>>;
    hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
    startCursor: () => Promise<AsyncIterator<String>>;
    endCursor: () => Promise<AsyncIterator<String>>;
}
export interface BatchPayload {
    count: Long;
}
export interface BatchPayloadPromise extends Promise<BatchPayload>, Fragmentable {
    count: () => Promise<Long>;
}
export interface BatchPayloadSubscription extends Promise<AsyncIterator<BatchPayload>>, Fragmentable {
    count: () => Promise<AsyncIterator<Long>>;
}
export interface Sphere {
    id: ID_Output;
    alias: String;
    slugPrefix: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface SpherePromise extends Promise<Sphere>, Fragmentable {
    id: () => Promise<ID_Output>;
    alias: () => Promise<String>;
    slugPrefix: () => Promise<String>;
    associatedWith: <T = FragmentableArray<Account>>(args?: {
        where?: AccountWhereInput;
        orderBy?: AccountOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface SphereSubscription extends Promise<AsyncIterator<Sphere>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    alias: () => Promise<AsyncIterator<String>>;
    slugPrefix: () => Promise<AsyncIterator<String>>;
    associatedWith: <T = Promise<AsyncIterator<AccountSubscription>>>(args?: {
        where?: AccountWhereInput;
        orderBy?: AccountOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface PostPreviousValues {
    id: ID_Output;
    title: String;
    content: Json;
    slug: String;
    timeToRead: Int;
    isPublished: Boolean;
    publishedAt?: DateTimeOutput;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
    status: POST_STATUS;
}
export interface PostPreviousValuesPromise extends Promise<PostPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    title: () => Promise<String>;
    content: () => Promise<Json>;
    slug: () => Promise<String>;
    timeToRead: () => Promise<Int>;
    isPublished: () => Promise<Boolean>;
    publishedAt: () => Promise<DateTimeOutput>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    status: () => Promise<POST_STATUS>;
}
export interface PostPreviousValuesSubscription extends Promise<AsyncIterator<PostPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    title: () => Promise<AsyncIterator<String>>;
    content: () => Promise<AsyncIterator<Json>>;
    slug: () => Promise<AsyncIterator<String>>;
    timeToRead: () => Promise<AsyncIterator<Int>>;
    isPublished: () => Promise<AsyncIterator<Boolean>>;
    publishedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    status: () => Promise<AsyncIterator<POST_STATUS>>;
}
export interface PostMetadataPreviousValues {
    id: ID_Output;
    fileHash: String;
    filename?: String;
}
export interface PostMetadataPreviousValuesPromise extends Promise<PostMetadataPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    fileHash: () => Promise<String>;
    filename: () => Promise<String>;
}
export interface PostMetadataPreviousValuesSubscription extends Promise<AsyncIterator<PostMetadataPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    fileHash: () => Promise<AsyncIterator<String>>;
    filename: () => Promise<AsyncIterator<String>>;
}
export interface AggregateSphere {
    count: Int;
}
export interface AggregateSpherePromise extends Promise<AggregateSphere>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateSphereSubscription extends Promise<AsyncIterator<AggregateSphere>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface PostMetadataSubscriptionPayload {
    mutation: MutationType;
    node: PostMetadata;
    updatedFields: String[];
    previousValues: PostMetadataPreviousValues;
}
export interface PostMetadataSubscriptionPayloadPromise extends Promise<PostMetadataSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = PostMetadataPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = PostMetadataPreviousValuesPromise>() => T;
}
export interface PostMetadataSubscriptionPayloadSubscription extends Promise<AsyncIterator<PostMetadataSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = PostMetadataSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = PostMetadataPreviousValuesSubscription>() => T;
}
export interface Account {
    id: ID_Output;
    status: AccountStatus;
    firstName: String;
    lastName: String;
    emailAddress: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface AccountPromise extends Promise<Account>, Fragmentable {
    id: () => Promise<ID_Output>;
    status: () => Promise<AccountStatus>;
    firstName: () => Promise<String>;
    lastName: () => Promise<String>;
    emailAddress: () => Promise<String>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface AccountSubscription extends Promise<AsyncIterator<Account>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    status: () => Promise<AsyncIterator<AccountStatus>>;
    firstName: () => Promise<AsyncIterator<String>>;
    lastName: () => Promise<AsyncIterator<String>>;
    emailAddress: () => Promise<AsyncIterator<String>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface SphereEdge {
    node: Sphere;
    cursor: String;
}
export interface SphereEdgePromise extends Promise<SphereEdge>, Fragmentable {
    node: <T = SpherePromise>() => T;
    cursor: () => Promise<String>;
}
export interface SphereEdgeSubscription extends Promise<AsyncIterator<SphereEdge>>, Fragmentable {
    node: <T = SphereSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface PostMetadataEdge {
    node: PostMetadata;
    cursor: String;
}
export interface PostMetadataEdgePromise extends Promise<PostMetadataEdge>, Fragmentable {
    node: <T = PostMetadataPromise>() => T;
    cursor: () => Promise<String>;
}
export interface PostMetadataEdgeSubscription extends Promise<AsyncIterator<PostMetadataEdge>>, Fragmentable {
    node: <T = PostMetadataSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface Post {
    id: ID_Output;
    title: String;
    content: Json;
    slug: String;
    timeToRead: Int;
    isPublished: Boolean;
    publishedAt?: DateTimeOutput;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
    status: POST_STATUS;
}
export interface PostPromise extends Promise<Post>, Fragmentable {
    id: () => Promise<ID_Output>;
    title: () => Promise<String>;
    content: () => Promise<Json>;
    slug: () => Promise<String>;
    timeToRead: () => Promise<Int>;
    isPublished: () => Promise<Boolean>;
    publishedAt: () => Promise<DateTimeOutput>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    status: () => Promise<POST_STATUS>;
    metadata: <T = PostMetadataPromise>() => T;
    associatedWith: <T = SpherePromise>() => T;
}
export interface PostSubscription extends Promise<AsyncIterator<Post>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    title: () => Promise<AsyncIterator<String>>;
    content: () => Promise<AsyncIterator<Json>>;
    slug: () => Promise<AsyncIterator<String>>;
    timeToRead: () => Promise<AsyncIterator<Int>>;
    isPublished: () => Promise<AsyncIterator<Boolean>>;
    publishedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    status: () => Promise<AsyncIterator<POST_STATUS>>;
    metadata: <T = PostMetadataSubscription>() => T;
    associatedWith: <T = SphereSubscription>() => T;
}
export interface SphereSubscriptionPayload {
    mutation: MutationType;
    node: Sphere;
    updatedFields: String[];
    previousValues: SpherePreviousValues;
}
export interface SphereSubscriptionPayloadPromise extends Promise<SphereSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = SpherePromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = SpherePreviousValuesPromise>() => T;
}
export interface SphereSubscriptionPayloadSubscription extends Promise<AsyncIterator<SphereSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = SphereSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = SpherePreviousValuesSubscription>() => T;
}
export interface AccountEdge {
    node: Account;
    cursor: String;
}
export interface AccountEdgePromise extends Promise<AccountEdge>, Fragmentable {
    node: <T = AccountPromise>() => T;
    cursor: () => Promise<String>;
}
export interface AccountEdgeSubscription extends Promise<AsyncIterator<AccountEdge>>, Fragmentable {
    node: <T = AccountSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface PostEdge {
    node: Post;
    cursor: String;
}
export interface PostEdgePromise extends Promise<PostEdge>, Fragmentable {
    node: <T = PostPromise>() => T;
    cursor: () => Promise<String>;
}
export interface PostEdgeSubscription extends Promise<AsyncIterator<PostEdge>>, Fragmentable {
    node: <T = PostSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface SphereConnection {
    pageInfo: PageInfo;
    edges: SphereEdge[];
}
export interface SphereConnectionPromise extends Promise<SphereConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<SphereEdge>>() => T;
    aggregate: <T = AggregateSpherePromise>() => T;
}
export interface SphereConnectionSubscription extends Promise<AsyncIterator<SphereConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<SphereEdgeSubscription>>>() => T;
    aggregate: <T = AggregateSphereSubscription>() => T;
}
export interface PostSubscriptionPayload {
    mutation: MutationType;
    node: Post;
    updatedFields: String[];
    previousValues: PostPreviousValues;
}
export interface PostSubscriptionPayloadPromise extends Promise<PostSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = PostPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = PostPreviousValuesPromise>() => T;
}
export interface PostSubscriptionPayloadSubscription extends Promise<AsyncIterator<PostSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = PostSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = PostPreviousValuesSubscription>() => T;
}
export interface AggregateAccount {
    count: Int;
}
export interface AggregateAccountPromise extends Promise<AggregateAccount>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateAccountSubscription extends Promise<AsyncIterator<AggregateAccount>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface AccountPreviousValues {
    id: ID_Output;
    status: AccountStatus;
    firstName: String;
    lastName: String;
    emailAddress: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface AccountPreviousValuesPromise extends Promise<AccountPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    status: () => Promise<AccountStatus>;
    firstName: () => Promise<String>;
    lastName: () => Promise<String>;
    emailAddress: () => Promise<String>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface AccountPreviousValuesSubscription extends Promise<AsyncIterator<AccountPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    status: () => Promise<AsyncIterator<AccountStatus>>;
    firstName: () => Promise<AsyncIterator<String>>;
    lastName: () => Promise<AsyncIterator<String>>;
    emailAddress: () => Promise<AsyncIterator<String>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface AccountSubscriptionPayload {
    mutation: MutationType;
    node: Account;
    updatedFields: String[];
    previousValues: AccountPreviousValues;
}
export interface AccountSubscriptionPayloadPromise extends Promise<AccountSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = AccountPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = AccountPreviousValuesPromise>() => T;
}
export interface AccountSubscriptionPayloadSubscription extends Promise<AsyncIterator<AccountSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = AccountSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = AccountPreviousValuesSubscription>() => T;
}
export interface AggregatePostMetadata {
    count: Int;
}
export interface AggregatePostMetadataPromise extends Promise<AggregatePostMetadata>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregatePostMetadataSubscription extends Promise<AsyncIterator<AggregatePostMetadata>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface PostConnection {
    pageInfo: PageInfo;
    edges: PostEdge[];
}
export interface PostConnectionPromise extends Promise<PostConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<PostEdge>>() => T;
    aggregate: <T = AggregatePostPromise>() => T;
}
export interface PostConnectionSubscription extends Promise<AsyncIterator<PostConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<PostEdgeSubscription>>>() => T;
    aggregate: <T = AggregatePostSubscription>() => T;
}
export interface AggregatePost {
    count: Int;
}
export interface AggregatePostPromise extends Promise<AggregatePost>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregatePostSubscription extends Promise<AsyncIterator<AggregatePost>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface PostMetadataConnection {
    pageInfo: PageInfo;
    edges: PostMetadataEdge[];
}
export interface PostMetadataConnectionPromise extends Promise<PostMetadataConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<PostMetadataEdge>>() => T;
    aggregate: <T = AggregatePostMetadataPromise>() => T;
}
export interface PostMetadataConnectionSubscription extends Promise<AsyncIterator<PostMetadataConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<PostMetadataEdgeSubscription>>>() => T;
    aggregate: <T = AggregatePostMetadataSubscription>() => T;
}
export declare type Json = any;
export declare type Int = number;
export declare type DateTimeInput = Date | string;
export declare type DateTimeOutput = string;
export declare type Boolean = boolean;
export declare type Long = string;
export declare type ID_Input = string | number;
export declare type ID_Output = string;
export declare type String = string;
export declare const models: Model[];
export declare const Prisma: ClientConstructor<Prisma>;
export declare const prisma: Prisma;
