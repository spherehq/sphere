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
    sphere: (where?: SphereWhereInput) => Promise<boolean>;
    sphereVerification: (where?: SphereVerificationWhereInput) => Promise<boolean>;
    sphereVerificationCode: (where?: SphereVerificationCodeWhereInput) => Promise<boolean>;
    user: (where?: UserWhereInput) => Promise<boolean>;
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
    sphereVerification: (where: SphereVerificationWhereUniqueInput) => SphereVerificationNullablePromise;
    sphereVerifications: (args?: {
        where?: SphereVerificationWhereInput;
        orderBy?: SphereVerificationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<SphereVerification>;
    sphereVerificationsConnection: (args?: {
        where?: SphereVerificationWhereInput;
        orderBy?: SphereVerificationOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => SphereVerificationConnectionPromise;
    sphereVerificationCode: (where: SphereVerificationCodeWhereUniqueInput) => SphereVerificationCodeNullablePromise;
    sphereVerificationCodes: (args?: {
        where?: SphereVerificationCodeWhereInput;
        orderBy?: SphereVerificationCodeOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<SphereVerificationCode>;
    sphereVerificationCodesConnection: (args?: {
        where?: SphereVerificationCodeWhereInput;
        orderBy?: SphereVerificationCodeOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => SphereVerificationCodeConnectionPromise;
    user: (where: UserWhereUniqueInput) => UserNullablePromise;
    users: (args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<User>;
    usersConnection: (args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => UserConnectionPromise;
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
    createSphereVerification: (data: SphereVerificationCreateInput) => SphereVerificationPromise;
    updateSphereVerification: (args: {
        data: SphereVerificationUpdateInput;
        where: SphereVerificationWhereUniqueInput;
    }) => SphereVerificationPromise;
    updateManySphereVerifications: (args: {
        data: SphereVerificationUpdateManyMutationInput;
        where?: SphereVerificationWhereInput;
    }) => BatchPayloadPromise;
    upsertSphereVerification: (args: {
        where: SphereVerificationWhereUniqueInput;
        create: SphereVerificationCreateInput;
        update: SphereVerificationUpdateInput;
    }) => SphereVerificationPromise;
    deleteSphereVerification: (where: SphereVerificationWhereUniqueInput) => SphereVerificationPromise;
    deleteManySphereVerifications: (where?: SphereVerificationWhereInput) => BatchPayloadPromise;
    createSphereVerificationCode: (data: SphereVerificationCodeCreateInput) => SphereVerificationCodePromise;
    updateSphereVerificationCode: (args: {
        data: SphereVerificationCodeUpdateInput;
        where: SphereVerificationCodeWhereUniqueInput;
    }) => SphereVerificationCodePromise;
    updateManySphereVerificationCodes: (args: {
        data: SphereVerificationCodeUpdateManyMutationInput;
        where?: SphereVerificationCodeWhereInput;
    }) => BatchPayloadPromise;
    upsertSphereVerificationCode: (args: {
        where: SphereVerificationCodeWhereUniqueInput;
        create: SphereVerificationCodeCreateInput;
        update: SphereVerificationCodeUpdateInput;
    }) => SphereVerificationCodePromise;
    deleteSphereVerificationCode: (where: SphereVerificationCodeWhereUniqueInput) => SphereVerificationCodePromise;
    deleteManySphereVerificationCodes: (where?: SphereVerificationCodeWhereInput) => BatchPayloadPromise;
    createUser: (data: UserCreateInput) => UserPromise;
    updateUser: (args: {
        data: UserUpdateInput;
        where: UserWhereUniqueInput;
    }) => UserPromise;
    updateManyUsers: (args: {
        data: UserUpdateManyMutationInput;
        where?: UserWhereInput;
    }) => BatchPayloadPromise;
    upsertUser: (args: {
        where: UserWhereUniqueInput;
        create: UserCreateInput;
        update: UserUpdateInput;
    }) => UserPromise;
    deleteUser: (where: UserWhereUniqueInput) => UserPromise;
    deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
    $subscribe: Subscription;
}
export interface Subscription {
    account: (where?: AccountSubscriptionWhereInput) => AccountSubscriptionPayloadSubscription;
    media: (where?: MediaSubscriptionWhereInput) => MediaSubscriptionPayloadSubscription;
    post: (where?: PostSubscriptionWhereInput) => PostSubscriptionPayloadSubscription;
    sphere: (where?: SphereSubscriptionWhereInput) => SphereSubscriptionPayloadSubscription;
    sphereVerification: (where?: SphereVerificationSubscriptionWhereInput) => SphereVerificationSubscriptionPayloadSubscription;
    sphereVerificationCode: (where?: SphereVerificationCodeSubscriptionWhereInput) => SphereVerificationCodeSubscriptionPayloadSubscription;
    user: (where?: UserSubscriptionWhereInput) => UserSubscriptionPayloadSubscription;
}
export interface ClientConstructor<T> {
    new (options?: BaseClientOptions): T;
}
export declare type MEDIA_TYPE = "IMAGE";
export declare type SphereVerificationStatus = "VERIFIED" | "AWAITING_VERIFICATION" | "DISABLED";
export declare type AccountOrderByInput = "id_ASC" | "id_DESC" | "status_ASC" | "status_DESC" | "fullName_ASC" | "fullName_DESC" | "emailAddress_ASC" | "emailAddress_DESC" | "profileImageUrl_ASC" | "profileImageUrl_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type UserOrderByInput = "id_ASC" | "id_DESC" | "providerId_ASC" | "providerId_DESC";
export declare type SphereVerificationCodeStatus = "ISSUED" | "CLAIMED" | "INVALIDATED";
export declare type SphereOrderByInput = "id_ASC" | "id_DESC" | "alias_ASC" | "alias_DESC" | "aliasSlug_ASC" | "aliasSlug_DESC" | "slugPrefix_ASC" | "slugPrefix_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type PostOrderByInput = "id_ASC" | "id_DESC" | "title_ASC" | "title_DESC" | "featuredImage_ASC" | "featuredImage_DESC" | "slug_ASC" | "slug_DESC" | "timeToRead_ASC" | "timeToRead_DESC" | "publishedAt_ASC" | "publishedAt_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "status_ASC" | "status_DESC" | "author_ASC" | "author_DESC";
export declare type POST_STATUS = "PUBLISHED" | "DRAFT" | "ARCHIVED";
export declare type AccountStatus = "VERIFIED" | "ACTIVE" | "INACTIVE";
export declare type MutationType = "CREATED" | "UPDATED" | "DELETED";
export declare type MediaOrderByInput = "id_ASC" | "id_DESC" | "url_ASC" | "url_DESC" | "type_ASC" | "type_DESC";
export declare type SphereVerificationOrderByInput = "id_ASC" | "id_DESC" | "url_ASC" | "url_DESC" | "status_ASC" | "status_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC";
export declare type SphereVerificationCodeOrderByInput = "id_ASC" | "id_DESC" | "issuedAt_ASC" | "issuedAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "value_ASC" | "value_DESC" | "status_ASC" | "status_DESC";
export interface AccountCreateOneWithoutSpheresInput {
    create?: Maybe<AccountCreateWithoutSpheresInput>;
    connect?: Maybe<AccountWhereUniqueInput>;
}
export declare type AccountWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    emailAddress?: Maybe<String>;
}>;
export interface SphereVerificationCodeUpdateOneRequiredInput {
    create?: Maybe<SphereVerificationCodeCreateInput>;
    update?: Maybe<SphereVerificationCodeUpdateDataInput>;
    upsert?: Maybe<SphereVerificationCodeUpsertNestedInput>;
    connect?: Maybe<SphereVerificationCodeWhereUniqueInput>;
}
export interface SphereVerificationCodeWhereInput {
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
    issuedAt?: Maybe<DateTimeInput>;
    issuedAt_not?: Maybe<DateTimeInput>;
    issuedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    issuedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    issuedAt_lt?: Maybe<DateTimeInput>;
    issuedAt_lte?: Maybe<DateTimeInput>;
    issuedAt_gt?: Maybe<DateTimeInput>;
    issuedAt_gte?: Maybe<DateTimeInput>;
    updatedAt?: Maybe<DateTimeInput>;
    updatedAt_not?: Maybe<DateTimeInput>;
    updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
    updatedAt_lt?: Maybe<DateTimeInput>;
    updatedAt_lte?: Maybe<DateTimeInput>;
    updatedAt_gt?: Maybe<DateTimeInput>;
    updatedAt_gte?: Maybe<DateTimeInput>;
    value?: Maybe<String>;
    value_not?: Maybe<String>;
    value_in?: Maybe<String[] | String>;
    value_not_in?: Maybe<String[] | String>;
    value_lt?: Maybe<String>;
    value_lte?: Maybe<String>;
    value_gt?: Maybe<String>;
    value_gte?: Maybe<String>;
    value_contains?: Maybe<String>;
    value_not_contains?: Maybe<String>;
    value_starts_with?: Maybe<String>;
    value_not_starts_with?: Maybe<String>;
    value_ends_with?: Maybe<String>;
    value_not_ends_with?: Maybe<String>;
    status?: Maybe<SphereVerificationCodeStatus>;
    status_not?: Maybe<SphereVerificationCodeStatus>;
    status_in?: Maybe<SphereVerificationCodeStatus[] | SphereVerificationCodeStatus>;
    status_not_in?: Maybe<SphereVerificationCodeStatus[] | SphereVerificationCodeStatus>;
    associatedWith?: Maybe<AccountWhereInput>;
    AND?: Maybe<SphereVerificationCodeWhereInput[] | SphereVerificationCodeWhereInput>;
    OR?: Maybe<SphereVerificationCodeWhereInput[] | SphereVerificationCodeWhereInput>;
    NOT?: Maybe<SphereVerificationCodeWhereInput[] | SphereVerificationCodeWhereInput>;
}
export interface SphereVerificationCodeUpsertNestedInput {
    update: SphereVerificationCodeUpdateDataInput;
    create: SphereVerificationCodeCreateInput;
}
export interface SphereVerificationCodeUpdateDataInput {
    value?: Maybe<String>;
    status?: Maybe<SphereVerificationCodeStatus>;
    associatedWith?: Maybe<AccountUpdateOneRequiredInput>;
}
export interface AccountCreateInput {
    id?: Maybe<ID_Input>;
    status?: Maybe<AccountStatus>;
    fullName: String;
    emailAddress: String;
    profileImageUrl?: Maybe<String>;
    spheres?: Maybe<SphereCreateManyWithoutAssociatedWithInput>;
    posts?: Maybe<PostCreateManyInput>;
}
export interface UserSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<UserWhereInput>;
    AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
    OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
    NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}
export interface SphereCreateManyWithoutAssociatedWithInput {
    create?: Maybe<SphereCreateWithoutAssociatedWithInput[] | SphereCreateWithoutAssociatedWithInput>;
    connect?: Maybe<SphereWhereUniqueInput[] | SphereWhereUniqueInput>;
}
export interface SphereVerificationSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<SphereVerificationWhereInput>;
    AND?: Maybe<SphereVerificationSubscriptionWhereInput[] | SphereVerificationSubscriptionWhereInput>;
    OR?: Maybe<SphereVerificationSubscriptionWhereInput[] | SphereVerificationSubscriptionWhereInput>;
    NOT?: Maybe<SphereVerificationSubscriptionWhereInput[] | SphereVerificationSubscriptionWhereInput>;
}
export interface SphereCreateWithoutAssociatedWithInput {
    id?: Maybe<ID_Input>;
    alias?: Maybe<String>;
    aliasSlug: String;
    slugPrefix?: Maybe<String>;
    verifiedBy: SphereVerificationCreateOneInput;
    posts?: Maybe<PostCreateManyWithoutAssociatedWithInput>;
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
export interface SphereVerificationCreateOneInput {
    create?: Maybe<SphereVerificationCreateInput>;
    connect?: Maybe<SphereVerificationWhereUniqueInput>;
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
export interface SphereVerificationCreateInput {
    id?: Maybe<ID_Input>;
    url: String;
    code: SphereVerificationCodeCreateOneInput;
    status?: Maybe<SphereVerificationStatus>;
}
export interface UserUpdateManyMutationInput {
    providerId?: Maybe<String>;
}
export interface SphereVerificationCodeCreateOneInput {
    create?: Maybe<SphereVerificationCodeCreateInput>;
    connect?: Maybe<SphereVerificationCodeWhereUniqueInput>;
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
export interface SphereVerificationCodeCreateInput {
    id?: Maybe<ID_Input>;
    value: String;
    status?: Maybe<SphereVerificationCodeStatus>;
    associatedWith: AccountCreateOneInput;
}
export interface UserUpdateInput {
    providerId?: Maybe<String>;
    associatedWith?: Maybe<AccountUpdateOneRequiredInput>;
}
export interface AccountCreateOneInput {
    create?: Maybe<AccountCreateInput>;
    connect?: Maybe<AccountWhereUniqueInput>;
}
export interface SphereVerificationCodeUpdateManyMutationInput {
    value?: Maybe<String>;
    status?: Maybe<SphereVerificationCodeStatus>;
}
export interface PostCreateManyWithoutAssociatedWithInput {
    create?: Maybe<PostCreateWithoutAssociatedWithInput[] | PostCreateWithoutAssociatedWithInput>;
    connect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
}
export interface SphereVerificationCodeUpdateInput {
    value?: Maybe<String>;
    status?: Maybe<SphereVerificationCodeStatus>;
    associatedWith?: Maybe<AccountUpdateOneRequiredInput>;
}
export interface PostCreateWithoutAssociatedWithInput {
    id?: Maybe<ID_Input>;
    title: String;
    featuredImage: String;
    slug: String;
    timeToRead?: Maybe<Int>;
    publishedAt?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
    author?: Maybe<String>;
}
export interface SphereVerificationUpdateInput {
    url?: Maybe<String>;
    code?: Maybe<SphereVerificationCodeUpdateOneRequiredInput>;
    status?: Maybe<SphereVerificationStatus>;
}
export interface PostCreateManyInput {
    create?: Maybe<PostCreateInput[] | PostCreateInput>;
    connect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
}
export interface SphereUpdateManyMutationInput {
    alias?: Maybe<String>;
    aliasSlug?: Maybe<String>;
    slugPrefix?: Maybe<String>;
}
export interface PostCreateInput {
    id?: Maybe<ID_Input>;
    title: String;
    featuredImage: String;
    slug: String;
    timeToRead?: Maybe<Int>;
    publishedAt?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
    author?: Maybe<String>;
    associatedWith: SphereCreateOneWithoutPostsInput;
}
export interface SphereCreateInput {
    id?: Maybe<ID_Input>;
    alias?: Maybe<String>;
    aliasSlug: String;
    slugPrefix?: Maybe<String>;
    associatedWith: AccountCreateOneWithoutSpheresInput;
    verifiedBy: SphereVerificationCreateOneInput;
    posts?: Maybe<PostCreateManyWithoutAssociatedWithInput>;
}
export interface SphereCreateOneWithoutPostsInput {
    create?: Maybe<SphereCreateWithoutPostsInput>;
    connect?: Maybe<SphereWhereUniqueInput>;
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
    verifiedBy?: Maybe<SphereVerificationWhereInput>;
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
export interface SphereCreateWithoutPostsInput {
    id?: Maybe<ID_Input>;
    alias?: Maybe<String>;
    aliasSlug: String;
    slugPrefix?: Maybe<String>;
    associatedWith: AccountCreateOneWithoutSpheresInput;
    verifiedBy: SphereVerificationCreateOneInput;
}
export interface PostUpdateInput {
    title?: Maybe<String>;
    featuredImage?: Maybe<String>;
    slug?: Maybe<String>;
    timeToRead?: Maybe<Int>;
    publishedAt?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
    author?: Maybe<String>;
    associatedWith?: Maybe<SphereUpdateOneRequiredWithoutPostsInput>;
}
export interface PostUpdateWithWhereUniqueWithoutAssociatedWithInput {
    where: PostWhereUniqueInput;
    data: PostUpdateWithoutAssociatedWithDataInput;
}
export declare type SphereVerificationCodeWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    value?: Maybe<String>;
}>;
export interface AccountCreateWithoutSpheresInput {
    id?: Maybe<ID_Input>;
    status?: Maybe<AccountStatus>;
    fullName: String;
    emailAddress: String;
    profileImageUrl?: Maybe<String>;
    posts?: Maybe<PostCreateManyInput>;
}
export interface MediaCreateInput {
    id?: Maybe<ID_Input>;
    url: String;
    type?: Maybe<MEDIA_TYPE>;
}
export interface AccountUpdateInput {
    status?: Maybe<AccountStatus>;
    fullName?: Maybe<String>;
    emailAddress?: Maybe<String>;
    profileImageUrl?: Maybe<String>;
    spheres?: Maybe<SphereUpdateManyWithoutAssociatedWithInput>;
    posts?: Maybe<PostUpdateManyInput>;
}
export interface SphereUpdateManyDataInput {
    alias?: Maybe<String>;
    aliasSlug?: Maybe<String>;
    slugPrefix?: Maybe<String>;
}
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
export interface SphereUpdateManyWithWhereNestedInput {
    where: SphereScalarWhereInput;
    data: SphereUpdateManyDataInput;
}
export interface SphereUpdateWithWhereUniqueWithoutAssociatedWithInput {
    where: SphereWhereUniqueInput;
    data: SphereUpdateWithoutAssociatedWithDataInput;
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
export interface SphereUpdateWithoutAssociatedWithDataInput {
    alias?: Maybe<String>;
    aliasSlug?: Maybe<String>;
    slugPrefix?: Maybe<String>;
    verifiedBy?: Maybe<SphereVerificationUpdateOneRequiredInput>;
    posts?: Maybe<PostUpdateManyWithoutAssociatedWithInput>;
}
export interface PostUpsertWithWhereUniqueWithoutAssociatedWithInput {
    where: PostWhereUniqueInput;
    update: PostUpdateWithoutAssociatedWithDataInput;
    create: PostCreateWithoutAssociatedWithInput;
}
export interface SphereVerificationUpdateOneRequiredInput {
    create?: Maybe<SphereVerificationCreateInput>;
    update?: Maybe<SphereVerificationUpdateDataInput>;
    upsert?: Maybe<SphereVerificationUpsertNestedInput>;
    connect?: Maybe<SphereVerificationWhereUniqueInput>;
}
export interface SphereVerificationWhereInput {
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
    code?: Maybe<SphereVerificationCodeWhereInput>;
    status?: Maybe<SphereVerificationStatus>;
    status_not?: Maybe<SphereVerificationStatus>;
    status_in?: Maybe<SphereVerificationStatus[] | SphereVerificationStatus>;
    status_not_in?: Maybe<SphereVerificationStatus[] | SphereVerificationStatus>;
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
    AND?: Maybe<SphereVerificationWhereInput[] | SphereVerificationWhereInput>;
    OR?: Maybe<SphereVerificationWhereInput[] | SphereVerificationWhereInput>;
    NOT?: Maybe<SphereVerificationWhereInput[] | SphereVerificationWhereInput>;
}
export interface SphereVerificationUpdateDataInput {
    url?: Maybe<String>;
    code?: Maybe<SphereVerificationCodeUpdateOneRequiredInput>;
    status?: Maybe<SphereVerificationStatus>;
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
export declare type MediaWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
}>;
export interface SphereVerificationUpsertNestedInput {
    update: SphereVerificationUpdateDataInput;
    create: SphereVerificationCreateInput;
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
    fullName?: Maybe<String>;
    fullName_not?: Maybe<String>;
    fullName_in?: Maybe<String[] | String>;
    fullName_not_in?: Maybe<String[] | String>;
    fullName_lt?: Maybe<String>;
    fullName_lte?: Maybe<String>;
    fullName_gt?: Maybe<String>;
    fullName_gte?: Maybe<String>;
    fullName_contains?: Maybe<String>;
    fullName_not_contains?: Maybe<String>;
    fullName_starts_with?: Maybe<String>;
    fullName_not_starts_with?: Maybe<String>;
    fullName_ends_with?: Maybe<String>;
    fullName_not_ends_with?: Maybe<String>;
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
    profileImageUrl?: Maybe<String>;
    profileImageUrl_not?: Maybe<String>;
    profileImageUrl_in?: Maybe<String[] | String>;
    profileImageUrl_not_in?: Maybe<String[] | String>;
    profileImageUrl_lt?: Maybe<String>;
    profileImageUrl_lte?: Maybe<String>;
    profileImageUrl_gt?: Maybe<String>;
    profileImageUrl_gte?: Maybe<String>;
    profileImageUrl_contains?: Maybe<String>;
    profileImageUrl_not_contains?: Maybe<String>;
    profileImageUrl_starts_with?: Maybe<String>;
    profileImageUrl_not_starts_with?: Maybe<String>;
    profileImageUrl_ends_with?: Maybe<String>;
    profileImageUrl_not_ends_with?: Maybe<String>;
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
export interface AccountUpdateOneRequiredInput {
    create?: Maybe<AccountCreateInput>;
    update?: Maybe<AccountUpdateDataInput>;
    upsert?: Maybe<AccountUpsertNestedInput>;
    connect?: Maybe<AccountWhereUniqueInput>;
}
export declare type PostWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    slug?: Maybe<String>;
}>;
export interface AccountUpdateDataInput {
    status?: Maybe<AccountStatus>;
    fullName?: Maybe<String>;
    emailAddress?: Maybe<String>;
    profileImageUrl?: Maybe<String>;
    spheres?: Maybe<SphereUpdateManyWithoutAssociatedWithInput>;
    posts?: Maybe<PostUpdateManyInput>;
}
export declare type SphereWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    alias?: Maybe<String>;
    aliasSlug?: Maybe<String>;
}>;
export interface PostUpdateManyInput {
    create?: Maybe<PostCreateInput[] | PostCreateInput>;
    update?: Maybe<PostUpdateWithWhereUniqueNestedInput[] | PostUpdateWithWhereUniqueNestedInput>;
    upsert?: Maybe<PostUpsertWithWhereUniqueNestedInput[] | PostUpsertWithWhereUniqueNestedInput>;
    delete?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
    connect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
    set?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
    disconnect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
    deleteMany?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
    updateMany?: Maybe<PostUpdateManyWithWhereNestedInput[] | PostUpdateManyWithWhereNestedInput>;
}
export declare type SphereVerificationWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
}>;
export interface PostUpdateWithWhereUniqueNestedInput {
    where: PostWhereUniqueInput;
    data: PostUpdateDataInput;
}
export interface MediaUpdateManyMutationInput {
    url?: Maybe<String>;
    type?: Maybe<MEDIA_TYPE>;
}
export interface PostUpdateDataInput {
    title?: Maybe<String>;
    featuredImage?: Maybe<String>;
    slug?: Maybe<String>;
    timeToRead?: Maybe<Int>;
    publishedAt?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
    author?: Maybe<String>;
    associatedWith?: Maybe<SphereUpdateOneRequiredWithoutPostsInput>;
}
export interface AccountUpdateManyMutationInput {
    status?: Maybe<AccountStatus>;
    fullName?: Maybe<String>;
    emailAddress?: Maybe<String>;
    profileImageUrl?: Maybe<String>;
}
export interface SphereUpdateOneRequiredWithoutPostsInput {
    create?: Maybe<SphereCreateWithoutPostsInput>;
    update?: Maybe<SphereUpdateWithoutPostsDataInput>;
    upsert?: Maybe<SphereUpsertWithoutPostsInput>;
    connect?: Maybe<SphereWhereUniqueInput>;
}
export interface UserWhereInput {
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
    providerId?: Maybe<String>;
    providerId_not?: Maybe<String>;
    providerId_in?: Maybe<String[] | String>;
    providerId_not_in?: Maybe<String[] | String>;
    providerId_lt?: Maybe<String>;
    providerId_lte?: Maybe<String>;
    providerId_gt?: Maybe<String>;
    providerId_gte?: Maybe<String>;
    providerId_contains?: Maybe<String>;
    providerId_not_contains?: Maybe<String>;
    providerId_starts_with?: Maybe<String>;
    providerId_not_starts_with?: Maybe<String>;
    providerId_ends_with?: Maybe<String>;
    providerId_not_ends_with?: Maybe<String>;
    associatedWith?: Maybe<AccountWhereInput>;
    AND?: Maybe<UserWhereInput[] | UserWhereInput>;
    OR?: Maybe<UserWhereInput[] | UserWhereInput>;
    NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}
export interface SphereUpdateWithoutPostsDataInput {
    alias?: Maybe<String>;
    aliasSlug?: Maybe<String>;
    slugPrefix?: Maybe<String>;
    associatedWith?: Maybe<AccountUpdateOneRequiredWithoutSpheresInput>;
    verifiedBy?: Maybe<SphereVerificationUpdateOneRequiredInput>;
}
export interface PostUpdateWithoutAssociatedWithDataInput {
    title?: Maybe<String>;
    featuredImage?: Maybe<String>;
    slug?: Maybe<String>;
    timeToRead?: Maybe<Int>;
    publishedAt?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
    author?: Maybe<String>;
}
export interface AccountUpdateOneRequiredWithoutSpheresInput {
    create?: Maybe<AccountCreateWithoutSpheresInput>;
    update?: Maybe<AccountUpdateWithoutSpheresDataInput>;
    upsert?: Maybe<AccountUpsertWithoutSpheresInput>;
    connect?: Maybe<AccountWhereUniqueInput>;
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
export interface AccountUpdateWithoutSpheresDataInput {
    status?: Maybe<AccountStatus>;
    fullName?: Maybe<String>;
    emailAddress?: Maybe<String>;
    profileImageUrl?: Maybe<String>;
    posts?: Maybe<PostUpdateManyInput>;
}
export interface UserCreateInput {
    id?: Maybe<ID_Input>;
    providerId: String;
    associatedWith: AccountCreateOneInput;
}
export interface AccountUpsertWithoutSpheresInput {
    update: AccountUpdateWithoutSpheresDataInput;
    create: AccountCreateWithoutSpheresInput;
}
export interface SphereUpdateInput {
    alias?: Maybe<String>;
    aliasSlug?: Maybe<String>;
    slugPrefix?: Maybe<String>;
    associatedWith?: Maybe<AccountUpdateOneRequiredWithoutSpheresInput>;
    verifiedBy?: Maybe<SphereVerificationUpdateOneRequiredInput>;
    posts?: Maybe<PostUpdateManyWithoutAssociatedWithInput>;
}
export interface SphereUpsertWithoutPostsInput {
    update: SphereUpdateWithoutPostsDataInput;
    create: SphereCreateWithoutPostsInput;
}
export interface MediaUpdateInput {
    url?: Maybe<String>;
    type?: Maybe<MEDIA_TYPE>;
}
export interface PostUpsertWithWhereUniqueNestedInput {
    where: PostWhereUniqueInput;
    update: PostUpdateDataInput;
    create: PostCreateInput;
}
export interface SphereUpsertWithWhereUniqueWithoutAssociatedWithInput {
    where: SphereWhereUniqueInput;
    update: SphereUpdateWithoutAssociatedWithDataInput;
    create: SphereCreateWithoutAssociatedWithInput;
}
export interface AccountUpsertNestedInput {
    update: AccountUpdateDataInput;
    create: AccountCreateInput;
}
export interface PostUpdateManyDataInput {
    title?: Maybe<String>;
    featuredImage?: Maybe<String>;
    slug?: Maybe<String>;
    timeToRead?: Maybe<Int>;
    publishedAt?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
    author?: Maybe<String>;
}
export interface PostUpdateManyWithWhereNestedInput {
    where: PostScalarWhereInput;
    data: PostUpdateManyDataInput;
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
    featuredImage?: Maybe<String>;
    featuredImage_not?: Maybe<String>;
    featuredImage_in?: Maybe<String[] | String>;
    featuredImage_not_in?: Maybe<String[] | String>;
    featuredImage_lt?: Maybe<String>;
    featuredImage_lte?: Maybe<String>;
    featuredImage_gt?: Maybe<String>;
    featuredImage_gte?: Maybe<String>;
    featuredImage_contains?: Maybe<String>;
    featuredImage_not_contains?: Maybe<String>;
    featuredImage_starts_with?: Maybe<String>;
    featuredImage_not_starts_with?: Maybe<String>;
    featuredImage_ends_with?: Maybe<String>;
    featuredImage_not_ends_with?: Maybe<String>;
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
    author?: Maybe<String>;
    author_not?: Maybe<String>;
    author_in?: Maybe<String[] | String>;
    author_not_in?: Maybe<String[] | String>;
    author_lt?: Maybe<String>;
    author_lte?: Maybe<String>;
    author_gt?: Maybe<String>;
    author_gte?: Maybe<String>;
    author_contains?: Maybe<String>;
    author_not_contains?: Maybe<String>;
    author_starts_with?: Maybe<String>;
    author_not_starts_with?: Maybe<String>;
    author_ends_with?: Maybe<String>;
    author_not_ends_with?: Maybe<String>;
    AND?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
    OR?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
    NOT?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
}
export interface SphereVerificationCodeSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<SphereVerificationCodeWhereInput>;
    AND?: Maybe<SphereVerificationCodeSubscriptionWhereInput[] | SphereVerificationCodeSubscriptionWhereInput>;
    OR?: Maybe<SphereVerificationCodeSubscriptionWhereInput[] | SphereVerificationCodeSubscriptionWhereInput>;
    NOT?: Maybe<SphereVerificationCodeSubscriptionWhereInput[] | SphereVerificationCodeSubscriptionWhereInput>;
}
export declare type UserWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    providerId?: Maybe<String>;
}>;
export interface PostUpdateManyMutationInput {
    title?: Maybe<String>;
    featuredImage?: Maybe<String>;
    slug?: Maybe<String>;
    timeToRead?: Maybe<Int>;
    publishedAt?: Maybe<DateTimeInput>;
    status?: Maybe<POST_STATUS>;
    author?: Maybe<String>;
}
export interface SphereVerificationUpdateManyMutationInput {
    url?: Maybe<String>;
    status?: Maybe<SphereVerificationStatus>;
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
    featuredImage?: Maybe<String>;
    featuredImage_not?: Maybe<String>;
    featuredImage_in?: Maybe<String[] | String>;
    featuredImage_not_in?: Maybe<String[] | String>;
    featuredImage_lt?: Maybe<String>;
    featuredImage_lte?: Maybe<String>;
    featuredImage_gt?: Maybe<String>;
    featuredImage_gte?: Maybe<String>;
    featuredImage_contains?: Maybe<String>;
    featuredImage_not_contains?: Maybe<String>;
    featuredImage_starts_with?: Maybe<String>;
    featuredImage_not_starts_with?: Maybe<String>;
    featuredImage_ends_with?: Maybe<String>;
    featuredImage_not_ends_with?: Maybe<String>;
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
    author?: Maybe<String>;
    author_not?: Maybe<String>;
    author_in?: Maybe<String[] | String>;
    author_not_in?: Maybe<String[] | String>;
    author_lt?: Maybe<String>;
    author_lte?: Maybe<String>;
    author_gt?: Maybe<String>;
    author_gte?: Maybe<String>;
    author_contains?: Maybe<String>;
    author_not_contains?: Maybe<String>;
    author_starts_with?: Maybe<String>;
    author_not_starts_with?: Maybe<String>;
    author_ends_with?: Maybe<String>;
    author_not_ends_with?: Maybe<String>;
    associatedWith?: Maybe<SphereWhereInput>;
    AND?: Maybe<PostWhereInput[] | PostWhereInput>;
    OR?: Maybe<PostWhereInput[] | PostWhereInput>;
    NOT?: Maybe<PostWhereInput[] | PostWhereInput>;
}
export interface NodeNode {
    id: ID_Output;
}
export interface UserPreviousValues {
    id: ID_Output;
    providerId: String;
}
export interface UserPreviousValuesPromise extends Promise<UserPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    providerId: () => Promise<String>;
}
export interface UserPreviousValuesSubscription extends Promise<AsyncIterator<UserPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    providerId: () => Promise<AsyncIterator<String>>;
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
export interface SphereVerification {
    id: ID_Output;
    url: String;
    status: SphereVerificationStatus;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface SphereVerificationPromise extends Promise<SphereVerification>, Fragmentable {
    id: () => Promise<ID_Output>;
    url: () => Promise<String>;
    code: <T = SphereVerificationCodePromise>() => T;
    status: () => Promise<SphereVerificationStatus>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface SphereVerificationSubscription extends Promise<AsyncIterator<SphereVerification>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    url: () => Promise<AsyncIterator<String>>;
    code: <T = SphereVerificationCodeSubscription>() => T;
    status: () => Promise<AsyncIterator<SphereVerificationStatus>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface SphereVerificationNullablePromise extends Promise<SphereVerification | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    url: () => Promise<String>;
    code: <T = SphereVerificationCodePromise>() => T;
    status: () => Promise<SphereVerificationStatus>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
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
export interface SphereVerificationCode {
    id: ID_Output;
    issuedAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
    value: String;
    status: SphereVerificationCodeStatus;
}
export interface SphereVerificationCodePromise extends Promise<SphereVerificationCode>, Fragmentable {
    id: () => Promise<ID_Output>;
    issuedAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    value: () => Promise<String>;
    status: () => Promise<SphereVerificationCodeStatus>;
    associatedWith: <T = AccountPromise>() => T;
}
export interface SphereVerificationCodeSubscription extends Promise<AsyncIterator<SphereVerificationCode>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    issuedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    value: () => Promise<AsyncIterator<String>>;
    status: () => Promise<AsyncIterator<SphereVerificationCodeStatus>>;
    associatedWith: <T = AccountSubscription>() => T;
}
export interface SphereVerificationCodeNullablePromise extends Promise<SphereVerificationCode | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    issuedAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    value: () => Promise<String>;
    status: () => Promise<SphereVerificationCodeStatus>;
    associatedWith: <T = AccountPromise>() => T;
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
export interface UserEdge {
    node: User;
    cursor: String;
}
export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
    node: <T = UserPromise>() => T;
    cursor: () => Promise<String>;
}
export interface UserEdgeSubscription extends Promise<AsyncIterator<UserEdge>>, Fragmentable {
    node: <T = UserSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
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
export interface Account {
    id: ID_Output;
    status: AccountStatus;
    fullName: String;
    emailAddress: String;
    profileImageUrl: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface AccountPromise extends Promise<Account>, Fragmentable {
    id: () => Promise<ID_Output>;
    status: () => Promise<AccountStatus>;
    fullName: () => Promise<String>;
    emailAddress: () => Promise<String>;
    profileImageUrl: () => Promise<String>;
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
    fullName: () => Promise<AsyncIterator<String>>;
    emailAddress: () => Promise<AsyncIterator<String>>;
    profileImageUrl: () => Promise<AsyncIterator<String>>;
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
    fullName: () => Promise<String>;
    emailAddress: () => Promise<String>;
    profileImageUrl: () => Promise<String>;
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
export interface UserConnection {
    pageInfo: PageInfo;
    edges: UserEdge[];
}
export interface UserConnectionPromise extends Promise<UserConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<UserEdge>>() => T;
    aggregate: <T = AggregateUserPromise>() => T;
}
export interface UserConnectionSubscription extends Promise<AsyncIterator<UserConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
    aggregate: <T = AggregateUserSubscription>() => T;
}
export interface SphereVerificationCodeSubscriptionPayload {
    mutation: MutationType;
    node: SphereVerificationCode;
    updatedFields: String[];
    previousValues: SphereVerificationCodePreviousValues;
}
export interface SphereVerificationCodeSubscriptionPayloadPromise extends Promise<SphereVerificationCodeSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = SphereVerificationCodePromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = SphereVerificationCodePreviousValuesPromise>() => T;
}
export interface SphereVerificationCodeSubscriptionPayloadSubscription extends Promise<AsyncIterator<SphereVerificationCodeSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = SphereVerificationCodeSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = SphereVerificationCodePreviousValuesSubscription>() => T;
}
export interface User {
    id: ID_Output;
    providerId: String;
}
export interface UserPromise extends Promise<User>, Fragmentable {
    id: () => Promise<ID_Output>;
    providerId: () => Promise<String>;
    associatedWith: <T = AccountPromise>() => T;
}
export interface UserSubscription extends Promise<AsyncIterator<User>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    providerId: () => Promise<AsyncIterator<String>>;
    associatedWith: <T = AccountSubscription>() => T;
}
export interface UserNullablePromise extends Promise<User | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    providerId: () => Promise<String>;
    associatedWith: <T = AccountPromise>() => T;
}
export interface AggregateSphereVerificationCode {
    count: Int;
}
export interface AggregateSphereVerificationCodePromise extends Promise<AggregateSphereVerificationCode>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateSphereVerificationCodeSubscription extends Promise<AsyncIterator<AggregateSphereVerificationCode>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface SphereVerificationCodeEdge {
    node: SphereVerificationCode;
    cursor: String;
}
export interface SphereVerificationCodeEdgePromise extends Promise<SphereVerificationCodeEdge>, Fragmentable {
    node: <T = SphereVerificationCodePromise>() => T;
    cursor: () => Promise<String>;
}
export interface SphereVerificationCodeEdgeSubscription extends Promise<AsyncIterator<SphereVerificationCodeEdge>>, Fragmentable {
    node: <T = SphereVerificationCodeSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface UserSubscriptionPayload {
    mutation: MutationType;
    node: User;
    updatedFields: String[];
    previousValues: UserPreviousValues;
}
export interface UserSubscriptionPayloadPromise extends Promise<UserSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = UserPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = UserPreviousValuesPromise>() => T;
}
export interface UserSubscriptionPayloadSubscription extends Promise<AsyncIterator<UserSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = UserSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = UserPreviousValuesSubscription>() => T;
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
export interface Post {
    id: ID_Output;
    title: String;
    featuredImage: String;
    slug: String;
    timeToRead: Int;
    publishedAt?: DateTimeOutput;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
    status: POST_STATUS;
    author?: String;
}
export interface PostPromise extends Promise<Post>, Fragmentable {
    id: () => Promise<ID_Output>;
    title: () => Promise<String>;
    featuredImage: () => Promise<String>;
    slug: () => Promise<String>;
    timeToRead: () => Promise<Int>;
    publishedAt: () => Promise<DateTimeOutput>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    status: () => Promise<POST_STATUS>;
    author: () => Promise<String>;
    associatedWith: <T = SpherePromise>() => T;
}
export interface PostSubscription extends Promise<AsyncIterator<Post>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    title: () => Promise<AsyncIterator<String>>;
    featuredImage: () => Promise<AsyncIterator<String>>;
    slug: () => Promise<AsyncIterator<String>>;
    timeToRead: () => Promise<AsyncIterator<Int>>;
    publishedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    status: () => Promise<AsyncIterator<POST_STATUS>>;
    author: () => Promise<AsyncIterator<String>>;
    associatedWith: <T = SphereSubscription>() => T;
}
export interface PostNullablePromise extends Promise<Post | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    title: () => Promise<String>;
    featuredImage: () => Promise<String>;
    slug: () => Promise<String>;
    timeToRead: () => Promise<Int>;
    publishedAt: () => Promise<DateTimeOutput>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    status: () => Promise<POST_STATUS>;
    author: () => Promise<String>;
    associatedWith: <T = SpherePromise>() => T;
}
export interface AccountPreviousValues {
    id: ID_Output;
    status: AccountStatus;
    fullName: String;
    emailAddress: String;
    profileImageUrl: String;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface AccountPreviousValuesPromise extends Promise<AccountPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    status: () => Promise<AccountStatus>;
    fullName: () => Promise<String>;
    emailAddress: () => Promise<String>;
    profileImageUrl: () => Promise<String>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface AccountPreviousValuesSubscription extends Promise<AsyncIterator<AccountPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    status: () => Promise<AsyncIterator<AccountStatus>>;
    fullName: () => Promise<AsyncIterator<String>>;
    emailAddress: () => Promise<AsyncIterator<String>>;
    profileImageUrl: () => Promise<AsyncIterator<String>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface SphereVerificationEdge {
    node: SphereVerification;
    cursor: String;
}
export interface SphereVerificationEdgePromise extends Promise<SphereVerificationEdge>, Fragmentable {
    node: <T = SphereVerificationPromise>() => T;
    cursor: () => Promise<String>;
}
export interface SphereVerificationEdgeSubscription extends Promise<AsyncIterator<SphereVerificationEdge>>, Fragmentable {
    node: <T = SphereVerificationSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
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
export interface AggregateSphere {
    count: Int;
}
export interface AggregateSpherePromise extends Promise<AggregateSphere>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateSphereSubscription extends Promise<AsyncIterator<AggregateSphere>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
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
export interface SphereVerificationCodePreviousValues {
    id: ID_Output;
    issuedAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
    value: String;
    status: SphereVerificationCodeStatus;
}
export interface SphereVerificationCodePreviousValuesPromise extends Promise<SphereVerificationCodePreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    issuedAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    value: () => Promise<String>;
    status: () => Promise<SphereVerificationCodeStatus>;
}
export interface SphereVerificationCodePreviousValuesSubscription extends Promise<AsyncIterator<SphereVerificationCodePreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    issuedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    value: () => Promise<AsyncIterator<String>>;
    status: () => Promise<AsyncIterator<SphereVerificationCodeStatus>>;
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
export interface AggregateUser {
    count: Int;
}
export interface AggregateUserPromise extends Promise<AggregateUser>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateUserSubscription extends Promise<AsyncIterator<AggregateUser>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface PostPreviousValues {
    id: ID_Output;
    title: String;
    featuredImage: String;
    slug: String;
    timeToRead: Int;
    publishedAt?: DateTimeOutput;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
    status: POST_STATUS;
    author?: String;
}
export interface PostPreviousValuesPromise extends Promise<PostPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    title: () => Promise<String>;
    featuredImage: () => Promise<String>;
    slug: () => Promise<String>;
    timeToRead: () => Promise<Int>;
    publishedAt: () => Promise<DateTimeOutput>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    status: () => Promise<POST_STATUS>;
    author: () => Promise<String>;
}
export interface PostPreviousValuesSubscription extends Promise<AsyncIterator<PostPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    title: () => Promise<AsyncIterator<String>>;
    featuredImage: () => Promise<AsyncIterator<String>>;
    slug: () => Promise<AsyncIterator<String>>;
    timeToRead: () => Promise<AsyncIterator<Int>>;
    publishedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    status: () => Promise<AsyncIterator<POST_STATUS>>;
    author: () => Promise<AsyncIterator<String>>;
}
export interface SphereVerificationCodeConnection {
    pageInfo: PageInfo;
    edges: SphereVerificationCodeEdge[];
}
export interface SphereVerificationCodeConnectionPromise extends Promise<SphereVerificationCodeConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<SphereVerificationCodeEdge>>() => T;
    aggregate: <T = AggregateSphereVerificationCodePromise>() => T;
}
export interface SphereVerificationCodeConnectionSubscription extends Promise<AsyncIterator<SphereVerificationCodeConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<SphereVerificationCodeEdgeSubscription>>>() => T;
    aggregate: <T = AggregateSphereVerificationCodeSubscription>() => T;
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
export interface SphereVerificationConnection {
    pageInfo: PageInfo;
    edges: SphereVerificationEdge[];
}
export interface SphereVerificationConnectionPromise extends Promise<SphereVerificationConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<SphereVerificationEdge>>() => T;
    aggregate: <T = AggregateSphereVerificationPromise>() => T;
}
export interface SphereVerificationConnectionSubscription extends Promise<AsyncIterator<SphereVerificationConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<SphereVerificationEdgeSubscription>>>() => T;
    aggregate: <T = AggregateSphereVerificationSubscription>() => T;
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
export interface AggregatePost {
    count: Int;
}
export interface AggregatePostPromise extends Promise<AggregatePost>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregatePostSubscription extends Promise<AsyncIterator<AggregatePost>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface Sphere {
    id: ID_Output;
    alias?: String;
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
    verifiedBy: <T = SphereVerificationPromise>() => T;
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
    verifiedBy: <T = SphereVerificationSubscription>() => T;
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
    verifiedBy: <T = SphereVerificationPromise>() => T;
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
export interface SphereVerificationPreviousValues {
    id: ID_Output;
    url: String;
    status: SphereVerificationStatus;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
}
export interface SphereVerificationPreviousValuesPromise extends Promise<SphereVerificationPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    url: () => Promise<String>;
    status: () => Promise<SphereVerificationStatus>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
}
export interface SphereVerificationPreviousValuesSubscription extends Promise<AsyncIterator<SphereVerificationPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    url: () => Promise<AsyncIterator<String>>;
    status: () => Promise<AsyncIterator<SphereVerificationStatus>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}
export interface SphereVerificationSubscriptionPayload {
    mutation: MutationType;
    node: SphereVerification;
    updatedFields: String[];
    previousValues: SphereVerificationPreviousValues;
}
export interface SphereVerificationSubscriptionPayloadPromise extends Promise<SphereVerificationSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = SphereVerificationPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = SphereVerificationPreviousValuesPromise>() => T;
}
export interface SphereVerificationSubscriptionPayloadSubscription extends Promise<AsyncIterator<SphereVerificationSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = SphereVerificationSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = SphereVerificationPreviousValuesSubscription>() => T;
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
export interface SpherePreviousValues {
    id: ID_Output;
    alias?: String;
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
export interface BatchPayload {
    count: Long;
}
export interface BatchPayloadPromise extends Promise<BatchPayload>, Fragmentable {
    count: () => Promise<Long>;
}
export interface BatchPayloadSubscription extends Promise<AsyncIterator<BatchPayload>>, Fragmentable {
    count: () => Promise<AsyncIterator<Long>>;
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
export interface AggregateSphereVerification {
    count: Int;
}
export interface AggregateSphereVerificationPromise extends Promise<AggregateSphereVerification>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateSphereVerificationSubscription extends Promise<AsyncIterator<AggregateSphereVerification>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export declare type String = string;
export declare type ID_Input = string | number;
export declare type ID_Output = string;
export declare type Long = string;
export declare type DateTimeInput = Date | string;
export declare type DateTimeOutput = string;
export declare type Boolean = boolean;
export declare type Int = number;
export declare const models: Model[];
export declare const Prisma: ClientConstructor<Prisma>;
export declare const prisma: Prisma;
