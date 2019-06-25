import { DocumentNode } from "graphql";
import { BaseClientOptions, Model } from "prisma-client-lib";
export declare type AtLeastOne<T, U = {
    [K in keyof T]: Pick<T, K>;
}> = Partial<T> & U[keyof U];
export declare type Maybe<T> = T | undefined | null;
export interface Exists {
    account: (where?: AccountWhereInput) => Promise<boolean>;
    media: (where?: MediaWhereInput) => Promise<boolean>;
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
    account: (where: AccountWhereUniqueInput) => AccountNullablePromise;
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
    media: (where: MediaWhereUniqueInput) => MediaNullablePromise;
    medias: (args?: {
        where?: MediaWhereInput;
        orderBy?: MediaOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Media>;
    mediasConnection: (args?: {
        where?: MediaWhereInput;
        orderBy?: MediaOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => MediaConnectionPromise;
    post: (where: PostWhereUniqueInput) => PostNullablePromise;
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
    postMetadata: (where: PostMetadataWhereUniqueInput) => PostMetadataNullablePromise;
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
    sphere: (where: SphereWhereUniqueInput) => SphereNullablePromise;
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
    createMedia: (data: MediaCreateInput) => MediaPromise;
    updateMedia: (args: {
        data: MediaUpdateInput;
        where: MediaWhereUniqueInput;
    }) => MediaPromise;
    updateManyMedias: (args: {
        data: MediaUpdateManyMutationInput;
        where?: MediaWhereInput;
    }) => BatchPayloadPromise;
    upsertMedia: (args: {
        where: MediaWhereUniqueInput;
        create: MediaCreateInput;
        update: MediaUpdateInput;
    }) => MediaPromise;
    deleteMedia: (where: MediaWhereUniqueInput) => MediaPromise;
    deleteManyMedias: (where?: MediaWhereInput) => BatchPayloadPromise;
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
    media: (where?: MediaSubscriptionWhereInput) => MediaSubscriptionPayloadSubscription;
    post: (where?: PostSubscriptionWhereInput) => PostSubscriptionPayloadSubscription;
    postMetadata: (where?: PostMetadataSubscriptionWhereInput) => PostMetadataSubscriptionPayloadSubscription;
    sphere: (where?: SphereSubscriptionWhereInput) => SphereSubscriptionPayloadSubscription;
}
export interface ClientConstructor<T> {
    new (options?: BaseClientOptions): T;
}
export declare type MEDIA_TYPE = "IMAGE";
export declare type POST_STATUS = "PUBLISHED" | "DRAFT" | "ARCHIVED" | "SYNCING";
export declare type SphereOrderByInput = "id_ASC" | "id_DESC" | "alias_ASC" | "alias_DESC" | "aliasSlug_ASC" | "aliasSlug_DESC" | "slugPrefix_ASC" | "slugPrefix_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type PostOrderByInput = "id_ASC" | "id_DESC" | "title_ASC" | "title_DESC" | "content_ASC" | "content_DESC" | "slug_ASC" | "slug_DESC" | "timeToRead_ASC" | "timeToRead_DESC" | "isPublished_ASC" | "isPublished_DESC" | "publishedAt_ASC" | "publishedAt_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "status_ASC" | "status_DESC";
export declare type MediaOrderByInput = "id_ASC" | "id_DESC" | "url_ASC" | "url_DESC" | "type_ASC" | "type_DESC";
export declare type AccountOrderByInput = "id_ASC" | "id_DESC" | "status_ASC" | "status_DESC" | "firstName_ASC" | "firstName_DESC" | "lastName_ASC" | "lastName_DESC" | "emailAddress_ASC" | "emailAddress_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type AccountStatus = "VERIFIED" | "ACTIVE" | "INACTIVE";
export declare type PostMetadataOrderByInput = "id_ASC" | "id_DESC" | "fileHash_ASC" | "fileHash_DESC" | "filename_ASC" | "filename_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type MutationType = "CREATED" | "UPDATED" | "DELETED";
export interface SphereUpdateWithWhereUniqueWithoutAssociatedWithInput {
    where: SphereWhereUniqueInput;
    data: SphereUpdateWithoutAssociatedWithDataInput;
}
export declare type AccountWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    emailAddress?: Maybe<String>;
}>;
export interface MediaCreateManyInput {
    create?: Maybe<MediaCreateInput[] | MediaCreateInput>;
    connect?: Maybe<MediaWhereUniqueInput[] | MediaWhereUniqueInput>;
}
export interface PostUpdateManyWithoutAuthorInput {
    create?: Maybe<PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput>;
    delete?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
    connect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
    set?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
    disconnect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
    update?: Maybe<PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput>;
    upsert?: Maybe<PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput>;
    deleteMany?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
    updateMany?: Maybe<PostUpdateManyWithWhereNestedInput[] | PostUpdateManyWithWhereNestedInput>;
}
export interface AccountCreateOneWithoutPostsInput {
    create?: Maybe<AccountCreateWithoutPostsInput>;
    connect?: Maybe<AccountWhereUniqueInput>;
}
export interface MediaUpdateDataInput {
    url?: Maybe<String>;
    type?: Maybe<MEDIA_TYPE>;
}
export interface AccountCreateWithoutPostsInput {
    id?: Maybe<ID_Input>;
    status?: Maybe<AccountStatus>;
    firstName: String;
    lastName: String;
    emailAddress: String;
    spheres?: Maybe<SphereCreateManyWithoutAssociatedWithInput>;
}
export interface PostMetadataWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    fileHash?: Maybe<String>;
    fileHash_not?: Maybe<String>;
    fileHash_in?: Maybe<String[] | String>;
    fileHash_not_in?: Maybe<String[] | String>;
    fileHash_lt?: Maybe<String>;
    fileHash_lte?: Maybe<String>;
    fileHash_gt?: Maybe<String>;
    fileHash_gte?: Maybe<String>;
    fileHash_contains?: Maybe<String>;
    fileHash_not_contains?: Maybe<String>;
    fileHash_starts_with?: Maybe<String>;
    fileHash_not_starts_with?: Maybe<String>;
    fileHash_ends_with?: Maybe<String>;
    fileHash_not_ends_with?: Maybe<String>;
    filename?: Maybe<String>;
    filename_not?: Maybe<String>;
    filename_in?: Maybe<String[] | String>;
    filename_not_in?: Maybe<String[] | String>;
    filename_lt?: Maybe<String>;
    filename_lte?: Maybe<String>;
    filename_gt?: Maybe<String>;
    filename_gte?: Maybe<String>;
    filename_contains?: Maybe<String>;
    filename_not_contains?: Maybe<String>;
    filename_starts_with?: Maybe<String>;
    filename_not_starts_with?: Maybe<String>;
    filename_ends_with?: Maybe<String>;
    filename_not_ends_with?: Maybe<String>;
    createdAt?: Maybe<DateTimeInput>;
    createdAt_not?: Maybe<DateTimeInput>;
    createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    createdAt_lt?: Maybe<DateTimeInput>;
    createdAt_lte?: Maybe<DateTimeInput>;
    createdAt_gt?: Maybe<DateTimeInput>;
    createdAt_gte?: Maybe<DateTimeInput>;
    updatedAt?: Maybe<DateTimeInput>;
    updatedAt_not?: Maybe<DateTimeInput>;
    updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    updatedAt_lt?: Maybe<DateTimeInput>;
    updatedAt_lte?: Maybe<DateTimeInput>;
    updatedAt_gt?: Maybe<DateTimeInput>;
    updatedAt_gte?: Maybe<DateTimeInput>;
    AND?: Maybe<PostMetadataWhereInput[] | PostMetadataWhereInput>;
    OR?: Maybe<PostMetadataWhereInput[] | PostMetadataWhereInput>;
    NOT?: Maybe<PostMetadataWhereInput[] | PostMetadataWhereInput>;
}
export interface PostMetadataCreateOneInput {
    create?: Maybe<PostMetadataCreateInput>;
    connect?: Maybe<PostMetadataWhereUniqueInput>;
}
export interface SphereSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<SphereWhereInput>;
    AND?: Maybe<SphereSubscriptionWhereInput[] | SphereSubscriptionWhereInput>;
    OR?: Maybe<SphereSubscriptionWhereInput[] | SphereSubscriptionWhereInput>;
    NOT?: Maybe<SphereSubscriptionWhereInput[] | SphereSubscriptionWhereInput>;
}
export interface PostMetadataCreateInput {
    id?: Maybe<ID_Input>;
    fileHash: String;
    filename?: Maybe<String>;
}
export interface PostMetadataSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<PostMetadataWhereInput>;
    AND?: Maybe<PostMetadataSubscriptionWhereInput[] | PostMetadataSubscriptionWhereInput>;
    OR?: Maybe<PostMetadataSubscriptionWhereInput[] | PostMetadataSubscriptionWhereInput>;
    NOT?: Maybe<PostMetadataSubscriptionWhereInput[] | PostMetadataSubscriptionWhereInput>;
}
export interface PostCreateManyWithoutAuthorInput {
    create?: Maybe<PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput>;
    connect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
}
export interface MediaSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<MediaWhereInput>;
    AND?: Maybe<MediaSubscriptionWhereInput[] | MediaSubscriptionWhereInput>;
    OR?: Maybe<MediaSubscriptionWhereInput[] | MediaSubscriptionWhereInput>;
    NOT?: Maybe<MediaSubscriptionWhereInput[] | MediaSubscriptionWhereInput>;
}
export interface PostCreateWithoutAuthorInput {
    id?: Maybe<ID_Input>;
    title: String;
    featuredImage?: Maybe<MediaCreateOneInput>;
    content: Json;
    images?: Maybe<MediaCreateManyInput>;
    slug: String;
    timeToRead?: Maybe<Int>;
    isPublished?: Maybe<Boolean>;
    publishedAt?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
    metadata: PostMetadataCreateOneInput;
    associatedWith: SphereCreateOneWithoutPostsInput;
}
export interface AccountSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<AccountWhereInput>;
    AND?: Maybe<AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput>;
    OR?: Maybe<AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput>;
    NOT?: Maybe<AccountSubscriptionWhereInput[] | AccountSubscriptionWhereInput>;
}
export interface SphereCreateOneWithoutPostsInput {
    create?: Maybe<SphereCreateWithoutPostsInput>;
    connect?: Maybe<SphereWhereUniqueInput>;
}
export interface SphereUpdateInput {
    alias?: Maybe<String>;
    aliasSlug?: Maybe<String>;
    slugPrefix?: Maybe<String>;
    associatedWith?: Maybe<AccountUpdateOneRequiredWithoutSpheresInput>;
    posts?: Maybe<PostUpdateManyWithoutAssociatedWithInput>;
}
export interface SphereCreateWithoutPostsInput {
    id?: Maybe<ID_Input>;
    alias: String;
    aliasSlug: String;
    slugPrefix?: Maybe<String>;
    associatedWith: AccountCreateOneWithoutSpheresInput;
}
export interface PostMetadataUpdateManyMutationInput {
    fileHash?: Maybe<String>;
    filename?: Maybe<String>;
}
export interface AccountCreateOneWithoutSpheresInput {
    create?: Maybe<AccountCreateWithoutSpheresInput>;
    connect?: Maybe<AccountWhereUniqueInput>;
}
export declare type MediaWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
}>;
export interface AccountCreateWithoutSpheresInput {
    id?: Maybe<ID_Input>;
    status?: Maybe<AccountStatus>;
    firstName: String;
    lastName: String;
    emailAddress: String;
    posts?: Maybe<PostCreateManyWithoutAuthorInput>;
}
export interface PostUpdateInput {
    title?: Maybe<String>;
    featuredImage?: Maybe<MediaUpdateOneInput>;
    content?: Maybe<Json>;
    images?: Maybe<MediaUpdateManyInput>;
    slug?: Maybe<String>;
    timeToRead?: Maybe<Int>;
    isPublished?: Maybe<Boolean>;
    publishedAt?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
    author?: Maybe<AccountUpdateOneRequiredWithoutPostsInput>;
    metadata?: Maybe<PostMetadataUpdateOneRequiredInput>;
    associatedWith?: Maybe<SphereUpdateOneRequiredWithoutPostsInput>;
}
export interface AccountUpdateInput {
    status?: Maybe<AccountStatus>;
    firstName?: Maybe<String>;
    lastName?: Maybe<String>;
    emailAddress?: Maybe<String>;
    spheres?: Maybe<SphereUpdateManyWithoutAssociatedWithInput>;
    posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
}
export declare type PostWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    slug?: Maybe<String>;
}>;
export interface SphereUpdateManyWithoutAssociatedWithInput {
    create?: Maybe<SphereCreateWithoutAssociatedWithInput[] | SphereCreateWithoutAssociatedWithInput>;
    delete?: Maybe<SphereWhereUniqueInput[] | SphereWhereUniqueInput>;
    connect?: Maybe<SphereWhereUniqueInput[] | SphereWhereUniqueInput>;
    set?: Maybe<SphereWhereUniqueInput[] | SphereWhereUniqueInput>;
    disconnect?: Maybe<SphereWhereUniqueInput[] | SphereWhereUniqueInput>;
    update?: Maybe<SphereUpdateWithWhereUniqueWithoutAssociatedWithInput[] | SphereUpdateWithWhereUniqueWithoutAssociatedWithInput>;
    upsert?: Maybe<SphereUpsertWithWhereUniqueWithoutAssociatedWithInput[] | SphereUpsertWithWhereUniqueWithoutAssociatedWithInput>;
    deleteMany?: Maybe<SphereScalarWhereInput[] | SphereScalarWhereInput>;
    updateMany?: Maybe<SphereUpdateManyWithWhereNestedInput[] | SphereUpdateManyWithWhereNestedInput>;
}
export interface MediaUpdateInput {
    url?: Maybe<String>;
    type?: Maybe<MEDIA_TYPE>;
}
export interface PostUpdateWithoutAuthorDataInput {
    title?: Maybe<String>;
    featuredImage?: Maybe<MediaUpdateOneInput>;
    content?: Maybe<Json>;
    images?: Maybe<MediaUpdateManyInput>;
    slug?: Maybe<String>;
    timeToRead?: Maybe<Int>;
    isPublished?: Maybe<Boolean>;
    publishedAt?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
    metadata?: Maybe<PostMetadataUpdateOneRequiredInput>;
    associatedWith?: Maybe<SphereUpdateOneRequiredWithoutPostsInput>;
}
export declare type PostMetadataWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    fileHash?: Maybe<String>;
}>;
export interface SphereUpdateWithoutAssociatedWithDataInput {
    alias?: Maybe<String>;
    aliasSlug?: Maybe<String>;
    slugPrefix?: Maybe<String>;
    posts?: Maybe<PostUpdateManyWithoutAssociatedWithInput>;
}
export interface SphereUpsertWithoutPostsInput {
    update: SphereUpdateWithoutPostsDataInput;
    create: SphereCreateWithoutPostsInput;
}
export interface PostUpdateManyWithoutAssociatedWithInput {
    create?: Maybe<PostCreateWithoutAssociatedWithInput[] | PostCreateWithoutAssociatedWithInput>;
    delete?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
    connect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
    set?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
    disconnect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
    update?: Maybe<PostUpdateWithWhereUniqueWithoutAssociatedWithInput[] | PostUpdateWithWhereUniqueWithoutAssociatedWithInput>;
    upsert?: Maybe<PostUpsertWithWhereUniqueWithoutAssociatedWithInput[] | PostUpsertWithWhereUniqueWithoutAssociatedWithInput>;
    deleteMany?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
    updateMany?: Maybe<PostUpdateManyWithWhereNestedInput[] | PostUpdateManyWithWhereNestedInput>;
}
export interface AccountUpdateWithoutSpheresDataInput {
    status?: Maybe<AccountStatus>;
    firstName?: Maybe<String>;
    lastName?: Maybe<String>;
    emailAddress?: Maybe<String>;
    posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
}
export interface PostUpdateWithWhereUniqueWithoutAssociatedWithInput {
    where: PostWhereUniqueInput;
    data: PostUpdateWithoutAssociatedWithDataInput;
}
export interface AccountUpdateOneRequiredWithoutSpheresInput {
    create?: Maybe<AccountCreateWithoutSpheresInput>;
    update?: Maybe<AccountUpdateWithoutSpheresDataInput>;
    upsert?: Maybe<AccountUpsertWithoutSpheresInput>;
    connect?: Maybe<AccountWhereUniqueInput>;
}
export interface PostUpdateWithoutAssociatedWithDataInput {
    title?: Maybe<String>;
    featuredImage?: Maybe<MediaUpdateOneInput>;
    content?: Maybe<Json>;
    images?: Maybe<MediaUpdateManyInput>;
    slug?: Maybe<String>;
    timeToRead?: Maybe<Int>;
    isPublished?: Maybe<Boolean>;
    publishedAt?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
    author?: Maybe<AccountUpdateOneRequiredWithoutPostsInput>;
    metadata?: Maybe<PostMetadataUpdateOneRequiredInput>;
}
export interface SphereUpdateOneRequiredWithoutPostsInput {
    create?: Maybe<SphereCreateWithoutPostsInput>;
    update?: Maybe<SphereUpdateWithoutPostsDataInput>;
    upsert?: Maybe<SphereUpsertWithoutPostsInput>;
    connect?: Maybe<SphereWhereUniqueInput>;
}
export interface MediaUpdateOneInput {
    create?: Maybe<MediaCreateInput>;
    update?: Maybe<MediaUpdateDataInput>;
    upsert?: Maybe<MediaUpsertNestedInput>;
    delete?: Maybe<Boolean>;
    disconnect?: Maybe<Boolean>;
    connect?: Maybe<MediaWhereUniqueInput>;
}
export interface AccountCreateInput {
    id?: Maybe<ID_Input>;
    status?: Maybe<AccountStatus>;
    firstName: String;
    lastName: String;
    emailAddress: String;
    spheres?: Maybe<SphereCreateManyWithoutAssociatedWithInput>;
    posts?: Maybe<PostCreateManyWithoutAuthorInput>;
}
export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput;
    data: PostUpdateWithoutAuthorDataInput;
}
export interface SphereCreateWithoutAssociatedWithInput {
    id?: Maybe<ID_Input>;
    alias: String;
    aliasSlug: String;
    slugPrefix?: Maybe<String>;
    posts?: Maybe<PostCreateManyWithoutAssociatedWithInput>;
}
export interface MediaUpsertNestedInput {
    update: MediaUpdateDataInput;
    create: MediaCreateInput;
}
export interface PostCreateWithoutAssociatedWithInput {
    id?: Maybe<ID_Input>;
    title: String;
    featuredImage?: Maybe<MediaCreateOneInput>;
    content: Json;
    images?: Maybe<MediaCreateManyInput>;
    slug: String;
    timeToRead?: Maybe<Int>;
    isPublished?: Maybe<Boolean>;
    publishedAt?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
    author: AccountCreateOneWithoutPostsInput;
    metadata: PostMetadataCreateOneInput;
}
export interface MediaUpdateManyInput {
    create?: Maybe<MediaCreateInput[] | MediaCreateInput>;
    update?: Maybe<MediaUpdateWithWhereUniqueNestedInput[] | MediaUpdateWithWhereUniqueNestedInput>;
    upsert?: Maybe<MediaUpsertWithWhereUniqueNestedInput[] | MediaUpsertWithWhereUniqueNestedInput>;
    delete?: Maybe<MediaWhereUniqueInput[] | MediaWhereUniqueInput>;
    connect?: Maybe<MediaWhereUniqueInput[] | MediaWhereUniqueInput>;
    set?: Maybe<MediaWhereUniqueInput[] | MediaWhereUniqueInput>;
    disconnect?: Maybe<MediaWhereUniqueInput[] | MediaWhereUniqueInput>;
    deleteMany?: Maybe<MediaScalarWhereInput[] | MediaScalarWhereInput>;
    updateMany?: Maybe<MediaUpdateManyWithWhereNestedInput[] | MediaUpdateManyWithWhereNestedInput>;
}
export interface MediaCreateInput {
    id?: Maybe<ID_Input>;
    url: String;
    type?: Maybe<MEDIA_TYPE>;
}
export interface MediaUpdateWithWhereUniqueNestedInput {
    where: MediaWhereUniqueInput;
    data: MediaUpdateDataInput;
}
export interface PostWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    title?: Maybe<String>;
    title_not?: Maybe<String>;
    title_in?: Maybe<String[] | String>;
    title_not_in?: Maybe<String[] | String>;
    title_lt?: Maybe<String>;
    title_lte?: Maybe<String>;
    title_gt?: Maybe<String>;
    title_gte?: Maybe<String>;
    title_contains?: Maybe<String>;
    title_not_contains?: Maybe<String>;
    title_starts_with?: Maybe<String>;
    title_not_starts_with?: Maybe<String>;
    title_ends_with?: Maybe<String>;
    title_not_ends_with?: Maybe<String>;
    featuredImage?: Maybe<MediaWhereInput>;
    images_every?: Maybe<MediaWhereInput>;
    images_some?: Maybe<MediaWhereInput>;
    images_none?: Maybe<MediaWhereInput>;
    slug?: Maybe<String>;
    slug_not?: Maybe<String>;
    slug_in?: Maybe<String[] | String>;
    slug_not_in?: Maybe<String[] | String>;
    slug_lt?: Maybe<String>;
    slug_lte?: Maybe<String>;
    slug_gt?: Maybe<String>;
    slug_gte?: Maybe<String>;
    slug_contains?: Maybe<String>;
    slug_not_contains?: Maybe<String>;
    slug_starts_with?: Maybe<String>;
    slug_not_starts_with?: Maybe<String>;
    slug_ends_with?: Maybe<String>;
    slug_not_ends_with?: Maybe<String>;
    timeToRead?: Maybe<Int>;
    timeToRead_not?: Maybe<Int>;
    timeToRead_in?: Maybe<Int[] | Int>;
    timeToRead_not_in?: Maybe<Int[] | Int>;
    timeToRead_lt?: Maybe<Int>;
    timeToRead_lte?: Maybe<Int>;
    timeToRead_gt?: Maybe<Int>;
    timeToRead_gte?: Maybe<Int>;
    isPublished?: Maybe<Boolean>;
    isPublished_not?: Maybe<Boolean>;
    publishedAt?: Maybe<DateTimeInput>;
    publishedAt_not?: Maybe<DateTimeInput>;
    publishedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    publishedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    publishedAt_lt?: Maybe<DateTimeInput>;
    publishedAt_lte?: Maybe<DateTimeInput>;
    publishedAt_gt?: Maybe<DateTimeInput>;
    publishedAt_gte?: Maybe<DateTimeInput>;
    createdAt?: Maybe<DateTimeInput>;
    createdAt_not?: Maybe<DateTimeInput>;
    createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    createdAt_lt?: Maybe<DateTimeInput>;
    createdAt_lte?: Maybe<DateTimeInput>;
    createdAt_gt?: Maybe<DateTimeInput>;
    createdAt_gte?: Maybe<DateTimeInput>;
    updatedAt?: Maybe<DateTimeInput>;
    updatedAt_not?: Maybe<DateTimeInput>;
    updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    updatedAt_lt?: Maybe<DateTimeInput>;
    updatedAt_lte?: Maybe<DateTimeInput>;
    updatedAt_gt?: Maybe<DateTimeInput>;
    updatedAt_gte?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
    status_not?: Maybe<POST_STATUS>;
    status_in?: Maybe<POST_STATUS[] | POST_STATUS>;
    status_not_in?: Maybe<POST_STATUS[] | POST_STATUS>;
    author?: Maybe<AccountWhereInput>;
    metadata?: Maybe<PostMetadataWhereInput>;
    associatedWith?: Maybe<SphereWhereInput>;
    AND?: Maybe<PostWhereInput[] | PostWhereInput>;
    OR?: Maybe<PostWhereInput[] | PostWhereInput>;
    NOT?: Maybe<PostWhereInput[] | PostWhereInput>;
}
export interface MediaUpsertWithWhereUniqueNestedInput {
    where: MediaWhereUniqueInput;
    update: MediaUpdateDataInput;
    create: MediaCreateInput;
}
export interface PostSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<PostWhereInput>;
    AND?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
    OR?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
    NOT?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
}
export interface MediaScalarWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    url?: Maybe<String>;
    url_not?: Maybe<String>;
    url_in?: Maybe<String[] | String>;
    url_not_in?: Maybe<String[] | String>;
    url_lt?: Maybe<String>;
    url_lte?: Maybe<String>;
    url_gt?: Maybe<String>;
    url_gte?: Maybe<String>;
    url_contains?: Maybe<String>;
    url_not_contains?: Maybe<String>;
    url_starts_with?: Maybe<String>;
    url_not_starts_with?: Maybe<String>;
    url_ends_with?: Maybe<String>;
    url_not_ends_with?: Maybe<String>;
    type?: Maybe<MEDIA_TYPE>;
    type_not?: Maybe<MEDIA_TYPE>;
    type_in?: Maybe<MEDIA_TYPE[] | MEDIA_TYPE>;
    type_not_in?: Maybe<MEDIA_TYPE[] | MEDIA_TYPE>;
    AND?: Maybe<MediaScalarWhereInput[] | MediaScalarWhereInput>;
    OR?: Maybe<MediaScalarWhereInput[] | MediaScalarWhereInput>;
    NOT?: Maybe<MediaScalarWhereInput[] | MediaScalarWhereInput>;
}
export interface SphereUpdateManyMutationInput {
    alias?: Maybe<String>;
    aliasSlug?: Maybe<String>;
    slugPrefix?: Maybe<String>;
}
export interface MediaUpdateManyWithWhereNestedInput {
    where: MediaScalarWhereInput;
    data: MediaUpdateManyDataInput;
}
export interface PostMetadataUpdateInput {
    fileHash?: Maybe<String>;
    filename?: Maybe<String>;
}
export interface MediaUpdateManyDataInput {
    url?: Maybe<String>;
    type?: Maybe<MEDIA_TYPE>;
}
export interface PostCreateInput {
    id?: Maybe<ID_Input>;
    title: String;
    featuredImage?: Maybe<MediaCreateOneInput>;
    content: Json;
    images?: Maybe<MediaCreateManyInput>;
    slug: String;
    timeToRead?: Maybe<Int>;
    isPublished?: Maybe<Boolean>;
    publishedAt?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
    author: AccountCreateOneWithoutPostsInput;
    metadata: PostMetadataCreateOneInput;
    associatedWith: SphereCreateOneWithoutPostsInput;
}
export interface AccountUpdateOneRequiredWithoutPostsInput {
    create?: Maybe<AccountCreateWithoutPostsInput>;
    update?: Maybe<AccountUpdateWithoutPostsDataInput>;
    upsert?: Maybe<AccountUpsertWithoutPostsInput>;
    connect?: Maybe<AccountWhereUniqueInput>;
}
export interface AccountUpdateManyMutationInput {
    status?: Maybe<AccountStatus>;
    firstName?: Maybe<String>;
    lastName?: Maybe<String>;
    emailAddress?: Maybe<String>;
}
export interface AccountUpdateWithoutPostsDataInput {
    status?: Maybe<AccountStatus>;
    firstName?: Maybe<String>;
    lastName?: Maybe<String>;
    emailAddress?: Maybe<String>;
    spheres?: Maybe<SphereUpdateManyWithoutAssociatedWithInput>;
}
export interface AccountUpsertWithoutSpheresInput {
    update: AccountUpdateWithoutSpheresDataInput;
    create: AccountCreateWithoutSpheresInput;
}
export interface AccountUpsertWithoutPostsInput {
    update: AccountUpdateWithoutPostsDataInput;
    create: AccountCreateWithoutPostsInput;
}
export interface SphereUpdateWithoutPostsDataInput {
    alias?: Maybe<String>;
    aliasSlug?: Maybe<String>;
    slugPrefix?: Maybe<String>;
    associatedWith?: Maybe<AccountUpdateOneRequiredWithoutSpheresInput>;
}
export interface PostMetadataUpdateOneRequiredInput {
    create?: Maybe<PostMetadataCreateInput>;
    update?: Maybe<PostMetadataUpdateDataInput>;
    upsert?: Maybe<PostMetadataUpsertNestedInput>;
    connect?: Maybe<PostMetadataWhereUniqueInput>;
}
export interface SphereCreateManyWithoutAssociatedWithInput {
    create?: Maybe<SphereCreateWithoutAssociatedWithInput[] | SphereCreateWithoutAssociatedWithInput>;
    connect?: Maybe<SphereWhereUniqueInput[] | SphereWhereUniqueInput>;
}
export interface PostMetadataUpdateDataInput {
    fileHash?: Maybe<String>;
    filename?: Maybe<String>;
}
export interface MediaCreateOneInput {
    create?: Maybe<MediaCreateInput>;
    connect?: Maybe<MediaWhereUniqueInput>;
}
export interface PostMetadataUpsertNestedInput {
    update: PostMetadataUpdateDataInput;
    create: PostMetadataCreateInput;
}
export interface AccountWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    status?: Maybe<AccountStatus>;
    status_not?: Maybe<AccountStatus>;
    status_in?: Maybe<AccountStatus[] | AccountStatus>;
    status_not_in?: Maybe<AccountStatus[] | AccountStatus>;
    firstName?: Maybe<String>;
    firstName_not?: Maybe<String>;
    firstName_in?: Maybe<String[] | String>;
    firstName_not_in?: Maybe<String[] | String>;
    firstName_lt?: Maybe<String>;
    firstName_lte?: Maybe<String>;
    firstName_gt?: Maybe<String>;
    firstName_gte?: Maybe<String>;
    firstName_contains?: Maybe<String>;
    firstName_not_contains?: Maybe<String>;
    firstName_starts_with?: Maybe<String>;
    firstName_not_starts_with?: Maybe<String>;
    firstName_ends_with?: Maybe<String>;
    firstName_not_ends_with?: Maybe<String>;
    lastName?: Maybe<String>;
    lastName_not?: Maybe<String>;
    lastName_in?: Maybe<String[] | String>;
    lastName_not_in?: Maybe<String[] | String>;
    lastName_lt?: Maybe<String>;
    lastName_lte?: Maybe<String>;
    lastName_gt?: Maybe<String>;
    lastName_gte?: Maybe<String>;
    lastName_contains?: Maybe<String>;
    lastName_not_contains?: Maybe<String>;
    lastName_starts_with?: Maybe<String>;
    lastName_not_starts_with?: Maybe<String>;
    lastName_ends_with?: Maybe<String>;
    lastName_not_ends_with?: Maybe<String>;
    emailAddress?: Maybe<String>;
    emailAddress_not?: Maybe<String>;
    emailAddress_in?: Maybe<String[] | String>;
    emailAddress_not_in?: Maybe<String[] | String>;
    emailAddress_lt?: Maybe<String>;
    emailAddress_lte?: Maybe<String>;
    emailAddress_gt?: Maybe<String>;
    emailAddress_gte?: Maybe<String>;
    emailAddress_contains?: Maybe<String>;
    emailAddress_not_contains?: Maybe<String>;
    emailAddress_starts_with?: Maybe<String>;
    emailAddress_not_starts_with?: Maybe<String>;
    emailAddress_ends_with?: Maybe<String>;
    emailAddress_not_ends_with?: Maybe<String>;
    createdAt?: Maybe<DateTimeInput>;
    createdAt_not?: Maybe<DateTimeInput>;
    createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    createdAt_lt?: Maybe<DateTimeInput>;
    createdAt_lte?: Maybe<DateTimeInput>;
    createdAt_gt?: Maybe<DateTimeInput>;
    createdAt_gte?: Maybe<DateTimeInput>;
    updatedAt?: Maybe<DateTimeInput>;
    updatedAt_not?: Maybe<DateTimeInput>;
    updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    updatedAt_lt?: Maybe<DateTimeInput>;
    updatedAt_lte?: Maybe<DateTimeInput>;
    updatedAt_gt?: Maybe<DateTimeInput>;
    updatedAt_gte?: Maybe<DateTimeInput>;
    spheres_every?: Maybe<SphereWhereInput>;
    spheres_some?: Maybe<SphereWhereInput>;
    spheres_none?: Maybe<SphereWhereInput>;
    posts_every?: Maybe<PostWhereInput>;
    posts_some?: Maybe<PostWhereInput>;
    posts_none?: Maybe<PostWhereInput>;
    AND?: Maybe<AccountWhereInput[] | AccountWhereInput>;
    OR?: Maybe<AccountWhereInput[] | AccountWhereInput>;
    NOT?: Maybe<AccountWhereInput[] | AccountWhereInput>;
}
export interface PostUpsertWithWhereUniqueWithoutAssociatedWithInput {
    where: PostWhereUniqueInput;
    update: PostUpdateWithoutAssociatedWithDataInput;
    create: PostCreateWithoutAssociatedWithInput;
}
export interface SphereCreateInput {
    id?: Maybe<ID_Input>;
    alias: String;
    aliasSlug: String;
    slugPrefix?: Maybe<String>;
    associatedWith: AccountCreateOneWithoutSpheresInput;
    posts?: Maybe<PostCreateManyWithoutAssociatedWithInput>;
}
export interface PostScalarWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    title?: Maybe<String>;
    title_not?: Maybe<String>;
    title_in?: Maybe<String[] | String>;
    title_not_in?: Maybe<String[] | String>;
    title_lt?: Maybe<String>;
    title_lte?: Maybe<String>;
    title_gt?: Maybe<String>;
    title_gte?: Maybe<String>;
    title_contains?: Maybe<String>;
    title_not_contains?: Maybe<String>;
    title_starts_with?: Maybe<String>;
    title_not_starts_with?: Maybe<String>;
    title_ends_with?: Maybe<String>;
    title_not_ends_with?: Maybe<String>;
    slug?: Maybe<String>;
    slug_not?: Maybe<String>;
    slug_in?: Maybe<String[] | String>;
    slug_not_in?: Maybe<String[] | String>;
    slug_lt?: Maybe<String>;
    slug_lte?: Maybe<String>;
    slug_gt?: Maybe<String>;
    slug_gte?: Maybe<String>;
    slug_contains?: Maybe<String>;
    slug_not_contains?: Maybe<String>;
    slug_starts_with?: Maybe<String>;
    slug_not_starts_with?: Maybe<String>;
    slug_ends_with?: Maybe<String>;
    slug_not_ends_with?: Maybe<String>;
    timeToRead?: Maybe<Int>;
    timeToRead_not?: Maybe<Int>;
    timeToRead_in?: Maybe<Int[] | Int>;
    timeToRead_not_in?: Maybe<Int[] | Int>;
    timeToRead_lt?: Maybe<Int>;
    timeToRead_lte?: Maybe<Int>;
    timeToRead_gt?: Maybe<Int>;
    timeToRead_gte?: Maybe<Int>;
    isPublished?: Maybe<Boolean>;
    isPublished_not?: Maybe<Boolean>;
    publishedAt?: Maybe<DateTimeInput>;
    publishedAt_not?: Maybe<DateTimeInput>;
    publishedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    publishedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    publishedAt_lt?: Maybe<DateTimeInput>;
    publishedAt_lte?: Maybe<DateTimeInput>;
    publishedAt_gt?: Maybe<DateTimeInput>;
    publishedAt_gte?: Maybe<DateTimeInput>;
    createdAt?: Maybe<DateTimeInput>;
    createdAt_not?: Maybe<DateTimeInput>;
    createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    createdAt_lt?: Maybe<DateTimeInput>;
    createdAt_lte?: Maybe<DateTimeInput>;
    createdAt_gt?: Maybe<DateTimeInput>;
    createdAt_gte?: Maybe<DateTimeInput>;
    updatedAt?: Maybe<DateTimeInput>;
    updatedAt_not?: Maybe<DateTimeInput>;
    updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    updatedAt_lt?: Maybe<DateTimeInput>;
    updatedAt_lte?: Maybe<DateTimeInput>;
    updatedAt_gt?: Maybe<DateTimeInput>;
    updatedAt_gte?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
    status_not?: Maybe<POST_STATUS>;
    status_in?: Maybe<POST_STATUS[] | POST_STATUS>;
    status_not_in?: Maybe<POST_STATUS[] | POST_STATUS>;
    AND?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
    OR?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
    NOT?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
}
export interface MediaUpdateManyMutationInput {
    url?: Maybe<String>;
    type?: Maybe<MEDIA_TYPE>;
}
export interface PostUpdateManyWithWhereNestedInput {
    where: PostScalarWhereInput;
    data: PostUpdateManyDataInput;
}
export declare type SphereWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    alias?: Maybe<String>;
    aliasSlug?: Maybe<String>;
}>;
export interface PostUpdateManyDataInput {
    title?: Maybe<String>;
    content?: Maybe<Json>;
    slug?: Maybe<String>;
    timeToRead?: Maybe<Int>;
    isPublished?: Maybe<Boolean>;
    publishedAt?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
}
export interface PostCreateManyWithoutAssociatedWithInput {
    create?: Maybe<PostCreateWithoutAssociatedWithInput[] | PostCreateWithoutAssociatedWithInput>;
    connect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
}
export interface SphereWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    alias?: Maybe<String>;
    alias_not?: Maybe<String>;
    alias_in?: Maybe<String[] | String>;
    alias_not_in?: Maybe<String[] | String>;
    alias_lt?: Maybe<String>;
    alias_lte?: Maybe<String>;
    alias_gt?: Maybe<String>;
    alias_gte?: Maybe<String>;
    alias_contains?: Maybe<String>;
    alias_not_contains?: Maybe<String>;
    alias_starts_with?: Maybe<String>;
    alias_not_starts_with?: Maybe<String>;
    alias_ends_with?: Maybe<String>;
    alias_not_ends_with?: Maybe<String>;
    aliasSlug?: Maybe<String>;
    aliasSlug_not?: Maybe<String>;
    aliasSlug_in?: Maybe<String[] | String>;
    aliasSlug_not_in?: Maybe<String[] | String>;
    aliasSlug_lt?: Maybe<String>;
    aliasSlug_lte?: Maybe<String>;
    aliasSlug_gt?: Maybe<String>;
    aliasSlug_gte?: Maybe<String>;
    aliasSlug_contains?: Maybe<String>;
    aliasSlug_not_contains?: Maybe<String>;
    aliasSlug_starts_with?: Maybe<String>;
    aliasSlug_not_starts_with?: Maybe<String>;
    aliasSlug_ends_with?: Maybe<String>;
    aliasSlug_not_ends_with?: Maybe<String>;
    slugPrefix?: Maybe<String>;
    slugPrefix_not?: Maybe<String>;
    slugPrefix_in?: Maybe<String[] | String>;
    slugPrefix_not_in?: Maybe<String[] | String>;
    slugPrefix_lt?: Maybe<String>;
    slugPrefix_lte?: Maybe<String>;
    slugPrefix_gt?: Maybe<String>;
    slugPrefix_gte?: Maybe<String>;
    slugPrefix_contains?: Maybe<String>;
    slugPrefix_not_contains?: Maybe<String>;
    slugPrefix_starts_with?: Maybe<String>;
    slugPrefix_not_starts_with?: Maybe<String>;
    slugPrefix_ends_with?: Maybe<String>;
    slugPrefix_not_ends_with?: Maybe<String>;
    associatedWith?: Maybe<AccountWhereInput>;
    createdAt?: Maybe<DateTimeInput>;
    createdAt_not?: Maybe<DateTimeInput>;
    createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    createdAt_lt?: Maybe<DateTimeInput>;
    createdAt_lte?: Maybe<DateTimeInput>;
    createdAt_gt?: Maybe<DateTimeInput>;
    createdAt_gte?: Maybe<DateTimeInput>;
    updatedAt?: Maybe<DateTimeInput>;
    updatedAt_not?: Maybe<DateTimeInput>;
    updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    updatedAt_lt?: Maybe<DateTimeInput>;
    updatedAt_lte?: Maybe<DateTimeInput>;
    updatedAt_gt?: Maybe<DateTimeInput>;
    updatedAt_gte?: Maybe<DateTimeInput>;
    posts_every?: Maybe<PostWhereInput>;
    posts_some?: Maybe<PostWhereInput>;
    posts_none?: Maybe<PostWhereInput>;
    AND?: Maybe<SphereWhereInput[] | SphereWhereInput>;
    OR?: Maybe<SphereWhereInput[] | SphereWhereInput>;
    NOT?: Maybe<SphereWhereInput[] | SphereWhereInput>;
}
export interface SphereUpdateManyDataInput {
    alias?: Maybe<String>;
    aliasSlug?: Maybe<String>;
    slugPrefix?: Maybe<String>;
}
export interface SphereUpdateManyWithWhereNestedInput {
    where: SphereScalarWhereInput;
    data: SphereUpdateManyDataInput;
}
export interface SphereScalarWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    alias?: Maybe<String>;
    alias_not?: Maybe<String>;
    alias_in?: Maybe<String[] | String>;
    alias_not_in?: Maybe<String[] | String>;
    alias_lt?: Maybe<String>;
    alias_lte?: Maybe<String>;
    alias_gt?: Maybe<String>;
    alias_gte?: Maybe<String>;
    alias_contains?: Maybe<String>;
    alias_not_contains?: Maybe<String>;
    alias_starts_with?: Maybe<String>;
    alias_not_starts_with?: Maybe<String>;
    alias_ends_with?: Maybe<String>;
    alias_not_ends_with?: Maybe<String>;
    aliasSlug?: Maybe<String>;
    aliasSlug_not?: Maybe<String>;
    aliasSlug_in?: Maybe<String[] | String>;
    aliasSlug_not_in?: Maybe<String[] | String>;
    aliasSlug_lt?: Maybe<String>;
    aliasSlug_lte?: Maybe<String>;
    aliasSlug_gt?: Maybe<String>;
    aliasSlug_gte?: Maybe<String>;
    aliasSlug_contains?: Maybe<String>;
    aliasSlug_not_contains?: Maybe<String>;
    aliasSlug_starts_with?: Maybe<String>;
    aliasSlug_not_starts_with?: Maybe<String>;
    aliasSlug_ends_with?: Maybe<String>;
    aliasSlug_not_ends_with?: Maybe<String>;
    slugPrefix?: Maybe<String>;
    slugPrefix_not?: Maybe<String>;
    slugPrefix_in?: Maybe<String[] | String>;
    slugPrefix_not_in?: Maybe<String[] | String>;
    slugPrefix_lt?: Maybe<String>;
    slugPrefix_lte?: Maybe<String>;
    slugPrefix_gt?: Maybe<String>;
    slugPrefix_gte?: Maybe<String>;
    slugPrefix_contains?: Maybe<String>;
    slugPrefix_not_contains?: Maybe<String>;
    slugPrefix_starts_with?: Maybe<String>;
    slugPrefix_not_starts_with?: Maybe<String>;
    slugPrefix_ends_with?: Maybe<String>;
    slugPrefix_not_ends_with?: Maybe<String>;
    createdAt?: Maybe<DateTimeInput>;
    createdAt_not?: Maybe<DateTimeInput>;
    createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    createdAt_lt?: Maybe<DateTimeInput>;
    createdAt_lte?: Maybe<DateTimeInput>;
    createdAt_gt?: Maybe<DateTimeInput>;
    createdAt_gte?: Maybe<DateTimeInput>;
    updatedAt?: Maybe<DateTimeInput>;
    updatedAt_not?: Maybe<DateTimeInput>;
    updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    updatedAt_lt?: Maybe<DateTimeInput>;
    updatedAt_lte?: Maybe<DateTimeInput>;
    updatedAt_gt?: Maybe<DateTimeInput>;
    updatedAt_gte?: Maybe<DateTimeInput>;
    AND?: Maybe<SphereScalarWhereInput[] | SphereScalarWhereInput>;
    OR?: Maybe<SphereScalarWhereInput[] | SphereScalarWhereInput>;
    NOT?: Maybe<SphereScalarWhereInput[] | SphereScalarWhereInput>;
}
export interface SphereUpsertWithWhereUniqueWithoutAssociatedWithInput {
    where: SphereWhereUniqueInput;
    update: SphereUpdateWithoutAssociatedWithDataInput;
    create: SphereCreateWithoutAssociatedWithInput;
}
export interface PostUpdateManyMutationInput {
    title?: Maybe<String>;
    content?: Maybe<Json>;
    slug?: Maybe<String>;
    timeToRead?: Maybe<Int>;
    isPublished?: Maybe<Boolean>;
    publishedAt?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
}
export interface MediaWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    url?: Maybe<String>;
    url_not?: Maybe<String>;
    url_in?: Maybe<String[] | String>;
    url_not_in?: Maybe<String[] | String>;
    url_lt?: Maybe<String>;
    url_lte?: Maybe<String>;
    url_gt?: Maybe<String>;
    url_gte?: Maybe<String>;
    url_contains?: Maybe<String>;
    url_not_contains?: Maybe<String>;
    url_starts_with?: Maybe<String>;
    url_not_starts_with?: Maybe<String>;
    url_ends_with?: Maybe<String>;
    url_not_ends_with?: Maybe<String>;
    type?: Maybe<MEDIA_TYPE>;
    type_not?: Maybe<MEDIA_TYPE>;
    type_in?: Maybe<MEDIA_TYPE[] | MEDIA_TYPE>;
    type_not_in?: Maybe<MEDIA_TYPE[] | MEDIA_TYPE>;
    AND?: Maybe<MediaWhereInput[] | MediaWhereInput>;
    OR?: Maybe<MediaWhereInput[] | MediaWhereInput>;
    NOT?: Maybe<MediaWhereInput[] | MediaWhereInput>;
}
export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput;
    update: PostUpdateWithoutAuthorDataInput;
    create: PostCreateWithoutAuthorInput;
}
export interface NodeNode {
    id: ID_Output;
}
export interface SpherePreviousValues {
    id: ID_Output;
    alias: String;
    aliasSlug: String;
    slugPrefix: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface SpherePreviousValuesPromise extends Promise<SpherePreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    alias: () => Promise<String>;
    aliasSlug: () => Promise<String>;
    slugPrefix: () => Promise<String>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface SpherePreviousValuesSubscription extends Promise<AsyncIterator<SpherePreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    alias: () => Promise<AsyncIterator<String>>;
    aliasSlug: () => Promise<AsyncIterator<String>>;
    slugPrefix: () => Promise<AsyncIterator<String>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface MediaConnection {
    pageInfo: PageInfo;
    edges: MediaEdge[];
}
export interface MediaConnectionPromise extends Promise<MediaConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<MediaEdge>>() => T;
    aggregate: <T = AggregateMediaPromise>() => T;
}
export interface MediaConnectionSubscription extends Promise<AsyncIterator<MediaConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<MediaEdgeSubscription>>>() => T;
    aggregate: <T = AggregateMediaSubscription>() => T;
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
export interface AggregateAccount {
    count: Int;
}
export interface AggregateAccountPromise extends Promise<AggregateAccount>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateAccountSubscription extends Promise<AsyncIterator<AggregateAccount>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
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
export interface Sphere {
    id: ID_Output;
    alias: String;
    aliasSlug: String;
    slugPrefix: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface SpherePromise extends Promise<Sphere>, Fragmentable {
    id: () => Promise<ID_Output>;
    alias: () => Promise<String>;
    aliasSlug: () => Promise<String>;
    slugPrefix: () => Promise<String>;
    associatedWith: <T = AccountPromise>() => T;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    posts: <T = FragmentableArray<Post>>(args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface SphereSubscription extends Promise<AsyncIterator<Sphere>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    alias: () => Promise<AsyncIterator<String>>;
    aliasSlug: () => Promise<AsyncIterator<String>>;
    slugPrefix: () => Promise<AsyncIterator<String>>;
    associatedWith: <T = AccountSubscription>() => T;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    posts: <T = Promise<AsyncIterator<PostSubscription>>>(args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface SphereNullablePromise extends Promise<Sphere | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    alias: () => Promise<String>;
    aliasSlug: () => Promise<String>;
    slugPrefix: () => Promise<String>;
    associatedWith: <T = AccountPromise>() => T;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    posts: <T = FragmentableArray<Post>>(args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
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
export interface PostMetadataPreviousValues {
    id: ID_Output;
    fileHash: String;
    filename?: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface PostMetadataPreviousValuesPromise extends Promise<PostMetadataPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    fileHash: () => Promise<String>;
    filename: () => Promise<String>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface PostMetadataPreviousValuesSubscription extends Promise<AsyncIterator<PostMetadataPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    fileHash: () => Promise<AsyncIterator<String>>;
    filename: () => Promise<AsyncIterator<String>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
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
export interface PostMetadata {
    id: ID_Output;
    fileHash: String;
    filename?: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface PostMetadataPromise extends Promise<PostMetadata>, Fragmentable {
    id: () => Promise<ID_Output>;
    fileHash: () => Promise<String>;
    filename: () => Promise<String>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface PostMetadataSubscription extends Promise<AsyncIterator<PostMetadata>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    fileHash: () => Promise<AsyncIterator<String>>;
    filename: () => Promise<AsyncIterator<String>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface PostMetadataNullablePromise extends Promise<PostMetadata | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    fileHash: () => Promise<String>;
    filename: () => Promise<String>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
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
export interface MediaEdge {
    node: Media;
    cursor: String;
}
export interface MediaEdgePromise extends Promise<MediaEdge>, Fragmentable {
    node: <T = MediaPromise>() => T;
    cursor: () => Promise<String>;
}
export interface MediaEdgeSubscription extends Promise<AsyncIterator<MediaEdge>>, Fragmentable {
    node: <T = MediaSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
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
    featuredImage: <T = MediaPromise>() => T;
    content: () => Promise<Json>;
    images: <T = FragmentableArray<Media>>(args?: {
        where?: MediaWhereInput;
        orderBy?: MediaOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    slug: () => Promise<String>;
    timeToRead: () => Promise<Int>;
    isPublished: () => Promise<Boolean>;
    publishedAt: () => Promise<DateTimeOutput>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    status: () => Promise<POST_STATUS>;
    author: <T = AccountPromise>() => T;
    metadata: <T = PostMetadataPromise>() => T;
    associatedWith: <T = SpherePromise>() => T;
}
export interface PostSubscription extends Promise<AsyncIterator<Post>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    title: () => Promise<AsyncIterator<String>>;
    featuredImage: <T = MediaSubscription>() => T;
    content: () => Promise<AsyncIterator<Json>>;
    images: <T = Promise<AsyncIterator<MediaSubscription>>>(args?: {
        where?: MediaWhereInput;
        orderBy?: MediaOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    slug: () => Promise<AsyncIterator<String>>;
    timeToRead: () => Promise<AsyncIterator<Int>>;
    isPublished: () => Promise<AsyncIterator<Boolean>>;
    publishedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    status: () => Promise<AsyncIterator<POST_STATUS>>;
    author: <T = AccountSubscription>() => T;
    metadata: <T = PostMetadataSubscription>() => T;
    associatedWith: <T = SphereSubscription>() => T;
}
export interface PostNullablePromise extends Promise<Post | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    title: () => Promise<String>;
    featuredImage: <T = MediaPromise>() => T;
    content: () => Promise<Json>;
    images: <T = FragmentableArray<Media>>(args?: {
        where?: MediaWhereInput;
        orderBy?: MediaOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    slug: () => Promise<String>;
    timeToRead: () => Promise<Int>;
    isPublished: () => Promise<Boolean>;
    publishedAt: () => Promise<DateTimeOutput>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    status: () => Promise<POST_STATUS>;
    author: <T = AccountPromise>() => T;
    metadata: <T = PostMetadataPromise>() => T;
    associatedWith: <T = SpherePromise>() => T;
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
    spheres: <T = FragmentableArray<Sphere>>(args?: {
        where?: SphereWhereInput;
        orderBy?: SphereOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    posts: <T = FragmentableArray<Post>>(args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface AccountSubscription extends Promise<AsyncIterator<Account>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    status: () => Promise<AsyncIterator<AccountStatus>>;
    firstName: () => Promise<AsyncIterator<String>>;
    lastName: () => Promise<AsyncIterator<String>>;
    emailAddress: () => Promise<AsyncIterator<String>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    spheres: <T = Promise<AsyncIterator<SphereSubscription>>>(args?: {
        where?: SphereWhereInput;
        orderBy?: SphereOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    posts: <T = Promise<AsyncIterator<PostSubscription>>>(args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface AccountNullablePromise extends Promise<Account | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    status: () => Promise<AccountStatus>;
    firstName: () => Promise<String>;
    lastName: () => Promise<String>;
    emailAddress: () => Promise<String>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    spheres: <T = FragmentableArray<Sphere>>(args?: {
        where?: SphereWhereInput;
        orderBy?: SphereOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
    posts: <T = FragmentableArray<Post>>(args?: {
        where?: PostWhereInput;
        orderBy?: PostOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
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
export interface Media {
    id: ID_Output;
    url: String;
    type: MEDIA_TYPE;
}
export interface MediaPromise extends Promise<Media>, Fragmentable {
    id: () => Promise<ID_Output>;
    url: () => Promise<String>;
    type: () => Promise<MEDIA_TYPE>;
}
export interface MediaSubscription extends Promise<AsyncIterator<Media>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    url: () => Promise<AsyncIterator<String>>;
    type: () => Promise<AsyncIterator<MEDIA_TYPE>>;
}
export interface MediaNullablePromise extends Promise<Media | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    url: () => Promise<String>;
    type: () => Promise<MEDIA_TYPE>;
}
export interface MediaPreviousValues {
    id: ID_Output;
    url: String;
    type: MEDIA_TYPE;
}
export interface MediaPreviousValuesPromise extends Promise<MediaPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    url: () => Promise<String>;
    type: () => Promise<MEDIA_TYPE>;
}
export interface MediaPreviousValuesSubscription extends Promise<AsyncIterator<MediaPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    url: () => Promise<AsyncIterator<String>>;
    type: () => Promise<AsyncIterator<MEDIA_TYPE>>;
}
export interface MediaSubscriptionPayload {
    mutation: MutationType;
    node: Media;
    updatedFields: String[];
    previousValues: MediaPreviousValues;
}
export interface MediaSubscriptionPayloadPromise extends Promise<MediaSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = MediaPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = MediaPreviousValuesPromise>() => T;
}
export interface MediaSubscriptionPayloadSubscription extends Promise<AsyncIterator<MediaSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = MediaSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = MediaPreviousValuesSubscription>() => T;
}
export interface AggregateMedia {
    count: Int;
}
export interface AggregateMediaPromise extends Promise<AggregateMedia>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateMediaSubscription extends Promise<AsyncIterator<AggregateMedia>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
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
export interface AggregateSphere {
    count: Int;
}
export interface AggregateSpherePromise extends Promise<AggregateSphere>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateSphereSubscription extends Promise<AsyncIterator<AggregateSphere>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export declare type Int = number;
export declare type Boolean = boolean;
export declare type Long = string;
export declare type ID_Input = string | number;
export declare type ID_Output = string;
export declare type DateTimeInput = Date | string;
export declare type DateTimeOutput = string;
export declare type String = string;
export declare type Json = any;
export declare const models: Model[];
export declare const Prisma: ClientConstructor<Prisma>;
export declare const prisma: Prisma;
