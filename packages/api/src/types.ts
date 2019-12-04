export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  Json: any
  Long: any
  Upload: any
}

export type Account = {
  readonly id: Scalars['ID']
  readonly status: AccountStatus
  readonly fullName: Scalars['String']
  readonly emailAddress: Scalars['String']
  readonly profileImageUrl: Scalars['String']
  readonly createdAt: Scalars['DateTime']
  readonly updatedAt: Scalars['DateTime']
  readonly spheres?: Maybe<ReadonlyArray<Sphere>>
  readonly posts?: Maybe<ReadonlyArray<Post>>
}

export type AccountSpheresArgs = {
  where?: Maybe<SphereWhereInput>
  orderBy?: Maybe<SphereOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type AccountPostsArgs = {
  where?: Maybe<PostWhereInput>
  orderBy?: Maybe<PostOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type AccountConnection = {
  readonly pageInfo: PageInfo
  readonly edges: ReadonlyArray<Maybe<AccountEdge>>
  readonly aggregate: AggregateAccount
}

export type AccountCreateInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly status?: Maybe<AccountStatus>
  readonly fullName: Scalars['String']
  readonly emailAddress: Scalars['String']
  readonly profileImageUrl?: Maybe<Scalars['String']>
  readonly spheres?: Maybe<SphereCreateManyWithoutAssociatedWithInput>
  readonly posts?: Maybe<PostCreateManyWithoutAuthorInput>
}

export type AccountCreateOneInput = {
  readonly create?: Maybe<AccountCreateInput>
  readonly connect?: Maybe<AccountWhereUniqueInput>
}

export type AccountCreateOneWithoutPostsInput = {
  readonly create?: Maybe<AccountCreateWithoutPostsInput>
  readonly connect?: Maybe<AccountWhereUniqueInput>
}

export type AccountCreateOneWithoutSpheresInput = {
  readonly create?: Maybe<AccountCreateWithoutSpheresInput>
  readonly connect?: Maybe<AccountWhereUniqueInput>
}

export type AccountCreateWithoutPostsInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly status?: Maybe<AccountStatus>
  readonly fullName: Scalars['String']
  readonly emailAddress: Scalars['String']
  readonly profileImageUrl?: Maybe<Scalars['String']>
  readonly spheres?: Maybe<SphereCreateManyWithoutAssociatedWithInput>
}

export type AccountCreateWithoutSpheresInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly status?: Maybe<AccountStatus>
  readonly fullName: Scalars['String']
  readonly emailAddress: Scalars['String']
  readonly profileImageUrl?: Maybe<Scalars['String']>
  readonly posts?: Maybe<PostCreateManyWithoutAuthorInput>
}

export type AccountEdge = {
  readonly node: Account
  readonly cursor: Scalars['String']
}

export enum AccountOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  EmailAddressAsc = 'emailAddress_ASC',
  EmailAddressDesc = 'emailAddress_DESC',
  ProfileImageUrlAsc = 'profileImageUrl_ASC',
  ProfileImageUrlDesc = 'profileImageUrl_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type AccountPreviousValues = {
  readonly id: Scalars['ID']
  readonly status: AccountStatus
  readonly fullName: Scalars['String']
  readonly emailAddress: Scalars['String']
  readonly profileImageUrl: Scalars['String']
  readonly createdAt: Scalars['DateTime']
  readonly updatedAt: Scalars['DateTime']
}

export enum AccountStatus {
  Verified = 'VERIFIED',
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type AccountSubscriptionPayload = {
  readonly mutation: MutationType
  readonly node?: Maybe<Account>
  readonly updatedFields?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly previousValues?: Maybe<AccountPreviousValues>
}

export type AccountSubscriptionWhereInput = {
  readonly mutation_in?: Maybe<ReadonlyArray<MutationType>>
  readonly updatedFields_contains?: Maybe<Scalars['String']>
  readonly updatedFields_contains_every?: Maybe<
    ReadonlyArray<Scalars['String']>
  >
  readonly updatedFields_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly node?: Maybe<AccountWhereInput>
  readonly AND?: Maybe<ReadonlyArray<AccountSubscriptionWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<AccountSubscriptionWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<AccountSubscriptionWhereInput>>
}

export type AccountUpdateDataInput = {
  readonly status?: Maybe<AccountStatus>
  readonly fullName?: Maybe<Scalars['String']>
  readonly emailAddress?: Maybe<Scalars['String']>
  readonly profileImageUrl?: Maybe<Scalars['String']>
  readonly spheres?: Maybe<SphereUpdateManyWithoutAssociatedWithInput>
  readonly posts?: Maybe<PostUpdateManyWithoutAuthorInput>
}

export type AccountUpdateInput = {
  readonly status?: Maybe<AccountStatus>
  readonly fullName?: Maybe<Scalars['String']>
  readonly emailAddress?: Maybe<Scalars['String']>
  readonly profileImageUrl?: Maybe<Scalars['String']>
  readonly spheres?: Maybe<SphereUpdateManyWithoutAssociatedWithInput>
  readonly posts?: Maybe<PostUpdateManyWithoutAuthorInput>
}

export type AccountUpdateManyMutationInput = {
  readonly status?: Maybe<AccountStatus>
  readonly fullName?: Maybe<Scalars['String']>
  readonly emailAddress?: Maybe<Scalars['String']>
  readonly profileImageUrl?: Maybe<Scalars['String']>
}

export type AccountUpdateOneRequiredInput = {
  readonly create?: Maybe<AccountCreateInput>
  readonly update?: Maybe<AccountUpdateDataInput>
  readonly upsert?: Maybe<AccountUpsertNestedInput>
  readonly connect?: Maybe<AccountWhereUniqueInput>
}

export type AccountUpdateOneRequiredWithoutPostsInput = {
  readonly create?: Maybe<AccountCreateWithoutPostsInput>
  readonly update?: Maybe<AccountUpdateWithoutPostsDataInput>
  readonly upsert?: Maybe<AccountUpsertWithoutPostsInput>
  readonly connect?: Maybe<AccountWhereUniqueInput>
}

export type AccountUpdateOneRequiredWithoutSpheresInput = {
  readonly create?: Maybe<AccountCreateWithoutSpheresInput>
  readonly update?: Maybe<AccountUpdateWithoutSpheresDataInput>
  readonly upsert?: Maybe<AccountUpsertWithoutSpheresInput>
  readonly connect?: Maybe<AccountWhereUniqueInput>
}

export type AccountUpdateWithoutPostsDataInput = {
  readonly status?: Maybe<AccountStatus>
  readonly fullName?: Maybe<Scalars['String']>
  readonly emailAddress?: Maybe<Scalars['String']>
  readonly profileImageUrl?: Maybe<Scalars['String']>
  readonly spheres?: Maybe<SphereUpdateManyWithoutAssociatedWithInput>
}

export type AccountUpdateWithoutSpheresDataInput = {
  readonly status?: Maybe<AccountStatus>
  readonly fullName?: Maybe<Scalars['String']>
  readonly emailAddress?: Maybe<Scalars['String']>
  readonly profileImageUrl?: Maybe<Scalars['String']>
  readonly posts?: Maybe<PostUpdateManyWithoutAuthorInput>
}

export type AccountUpsertNestedInput = {
  readonly update: AccountUpdateDataInput
  readonly create: AccountCreateInput
}

export type AccountUpsertWithoutPostsInput = {
  readonly update: AccountUpdateWithoutPostsDataInput
  readonly create: AccountCreateWithoutPostsInput
}

export type AccountUpsertWithoutSpheresInput = {
  readonly update: AccountUpdateWithoutSpheresDataInput
  readonly create: AccountCreateWithoutSpheresInput
}

export type AccountWhereInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_contains?: Maybe<Scalars['ID']>
  readonly id_not_contains?: Maybe<Scalars['ID']>
  readonly id_starts_with?: Maybe<Scalars['ID']>
  readonly id_not_starts_with?: Maybe<Scalars['ID']>
  readonly id_ends_with?: Maybe<Scalars['ID']>
  readonly id_not_ends_with?: Maybe<Scalars['ID']>
  readonly status?: Maybe<AccountStatus>
  readonly status_not?: Maybe<AccountStatus>
  readonly status_in?: Maybe<ReadonlyArray<AccountStatus>>
  readonly status_not_in?: Maybe<ReadonlyArray<AccountStatus>>
  readonly fullName?: Maybe<Scalars['String']>
  readonly fullName_not?: Maybe<Scalars['String']>
  readonly fullName_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly fullName_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly fullName_lt?: Maybe<Scalars['String']>
  readonly fullName_lte?: Maybe<Scalars['String']>
  readonly fullName_gt?: Maybe<Scalars['String']>
  readonly fullName_gte?: Maybe<Scalars['String']>
  readonly fullName_contains?: Maybe<Scalars['String']>
  readonly fullName_not_contains?: Maybe<Scalars['String']>
  readonly fullName_starts_with?: Maybe<Scalars['String']>
  readonly fullName_not_starts_with?: Maybe<Scalars['String']>
  readonly fullName_ends_with?: Maybe<Scalars['String']>
  readonly fullName_not_ends_with?: Maybe<Scalars['String']>
  readonly emailAddress?: Maybe<Scalars['String']>
  readonly emailAddress_not?: Maybe<Scalars['String']>
  readonly emailAddress_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly emailAddress_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly emailAddress_lt?: Maybe<Scalars['String']>
  readonly emailAddress_lte?: Maybe<Scalars['String']>
  readonly emailAddress_gt?: Maybe<Scalars['String']>
  readonly emailAddress_gte?: Maybe<Scalars['String']>
  readonly emailAddress_contains?: Maybe<Scalars['String']>
  readonly emailAddress_not_contains?: Maybe<Scalars['String']>
  readonly emailAddress_starts_with?: Maybe<Scalars['String']>
  readonly emailAddress_not_starts_with?: Maybe<Scalars['String']>
  readonly emailAddress_ends_with?: Maybe<Scalars['String']>
  readonly emailAddress_not_ends_with?: Maybe<Scalars['String']>
  readonly profileImageUrl?: Maybe<Scalars['String']>
  readonly profileImageUrl_not?: Maybe<Scalars['String']>
  readonly profileImageUrl_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly profileImageUrl_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly profileImageUrl_lt?: Maybe<Scalars['String']>
  readonly profileImageUrl_lte?: Maybe<Scalars['String']>
  readonly profileImageUrl_gt?: Maybe<Scalars['String']>
  readonly profileImageUrl_gte?: Maybe<Scalars['String']>
  readonly profileImageUrl_contains?: Maybe<Scalars['String']>
  readonly profileImageUrl_not_contains?: Maybe<Scalars['String']>
  readonly profileImageUrl_starts_with?: Maybe<Scalars['String']>
  readonly profileImageUrl_not_starts_with?: Maybe<Scalars['String']>
  readonly profileImageUrl_ends_with?: Maybe<Scalars['String']>
  readonly profileImageUrl_not_ends_with?: Maybe<Scalars['String']>
  readonly createdAt?: Maybe<Scalars['DateTime']>
  readonly createdAt_not?: Maybe<Scalars['DateTime']>
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>
  readonly updatedAt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>
  readonly spheres_every?: Maybe<SphereWhereInput>
  readonly spheres_some?: Maybe<SphereWhereInput>
  readonly spheres_none?: Maybe<SphereWhereInput>
  readonly posts_every?: Maybe<PostWhereInput>
  readonly posts_some?: Maybe<PostWhereInput>
  readonly posts_none?: Maybe<PostWhereInput>
  readonly AND?: Maybe<ReadonlyArray<AccountWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<AccountWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<AccountWhereInput>>
}

export type AccountWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly emailAddress?: Maybe<Scalars['String']>
}

export type AggregateAccount = {
  readonly count: Scalars['Int']
}

export type AggregateMedia = {
  readonly count: Scalars['Int']
}

export type AggregatePost = {
  readonly count: Scalars['Int']
}

export type AggregatePostMetadata = {
  readonly count: Scalars['Int']
}

export type AggregateSphere = {
  readonly count: Scalars['Int']
}

export type AggregateSphereVerification = {
  readonly count: Scalars['Int']
}

export type AggregateSphereVerificationCode = {
  readonly count: Scalars['Int']
}

export type AggregateUser = {
  readonly count: Scalars['Int']
}

export type BatchPayload = {
  readonly count: Scalars['Long']
}

export enum ExchangeTokenError {
  InvalidToken = 'INVALID_TOKEN',
  AccountNotActive = 'ACCOUNT_NOT_ACTIVE',
  ApplicationError = 'APPLICATION_ERROR',
}

export type ExchangeTokenInput = {
  readonly opaqueToken: Scalars['String']
}

export type ExchangeTokenResponse = {
  readonly token?: Maybe<Scalars['String']>
  readonly error?: Maybe<ExchangeTokenError>
}

export type GenerateVerificationCodeResponse = {
  readonly code: Scalars['String']
}

export type Media = {
  readonly id: Scalars['ID']
  readonly url: Scalars['String']
  readonly type: Media_Type
}

export enum Media_Type {
  Image = 'IMAGE',
}

export type MediaConnection = {
  readonly pageInfo: PageInfo
  readonly edges: ReadonlyArray<Maybe<MediaEdge>>
  readonly aggregate: AggregateMedia
}

export type MediaCreateInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly url: Scalars['String']
  readonly type?: Maybe<Media_Type>
}

export type MediaCreateManyInput = {
  readonly create?: Maybe<ReadonlyArray<MediaCreateInput>>
  readonly connect?: Maybe<ReadonlyArray<MediaWhereUniqueInput>>
}

export type MediaCreateOneInput = {
  readonly create?: Maybe<MediaCreateInput>
  readonly connect?: Maybe<MediaWhereUniqueInput>
}

export type MediaEdge = {
  readonly node: Media
  readonly cursor: Scalars['String']
}

export enum MediaOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
}

export type MediaPreviousValues = {
  readonly id: Scalars['ID']
  readonly url: Scalars['String']
  readonly type: Media_Type
}

export type MediaScalarWhereInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_contains?: Maybe<Scalars['ID']>
  readonly id_not_contains?: Maybe<Scalars['ID']>
  readonly id_starts_with?: Maybe<Scalars['ID']>
  readonly id_not_starts_with?: Maybe<Scalars['ID']>
  readonly id_ends_with?: Maybe<Scalars['ID']>
  readonly id_not_ends_with?: Maybe<Scalars['ID']>
  readonly url?: Maybe<Scalars['String']>
  readonly url_not?: Maybe<Scalars['String']>
  readonly url_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly url_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly url_lt?: Maybe<Scalars['String']>
  readonly url_lte?: Maybe<Scalars['String']>
  readonly url_gt?: Maybe<Scalars['String']>
  readonly url_gte?: Maybe<Scalars['String']>
  readonly url_contains?: Maybe<Scalars['String']>
  readonly url_not_contains?: Maybe<Scalars['String']>
  readonly url_starts_with?: Maybe<Scalars['String']>
  readonly url_not_starts_with?: Maybe<Scalars['String']>
  readonly url_ends_with?: Maybe<Scalars['String']>
  readonly url_not_ends_with?: Maybe<Scalars['String']>
  readonly type?: Maybe<Media_Type>
  readonly type_not?: Maybe<Media_Type>
  readonly type_in?: Maybe<ReadonlyArray<Media_Type>>
  readonly type_not_in?: Maybe<ReadonlyArray<Media_Type>>
  readonly AND?: Maybe<ReadonlyArray<MediaScalarWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<MediaScalarWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<MediaScalarWhereInput>>
}

export type MediaSubscriptionPayload = {
  readonly mutation: MutationType
  readonly node?: Maybe<Media>
  readonly updatedFields?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly previousValues?: Maybe<MediaPreviousValues>
}

export type MediaSubscriptionWhereInput = {
  readonly mutation_in?: Maybe<ReadonlyArray<MutationType>>
  readonly updatedFields_contains?: Maybe<Scalars['String']>
  readonly updatedFields_contains_every?: Maybe<
    ReadonlyArray<Scalars['String']>
  >
  readonly updatedFields_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly node?: Maybe<MediaWhereInput>
  readonly AND?: Maybe<ReadonlyArray<MediaSubscriptionWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<MediaSubscriptionWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<MediaSubscriptionWhereInput>>
}

export type MediaUpdateDataInput = {
  readonly url?: Maybe<Scalars['String']>
  readonly type?: Maybe<Media_Type>
}

export type MediaUpdateInput = {
  readonly url?: Maybe<Scalars['String']>
  readonly type?: Maybe<Media_Type>
}

export type MediaUpdateManyDataInput = {
  readonly url?: Maybe<Scalars['String']>
  readonly type?: Maybe<Media_Type>
}

export type MediaUpdateManyInput = {
  readonly create?: Maybe<ReadonlyArray<MediaCreateInput>>
  readonly update?: Maybe<ReadonlyArray<MediaUpdateWithWhereUniqueNestedInput>>
  readonly upsert?: Maybe<ReadonlyArray<MediaUpsertWithWhereUniqueNestedInput>>
  readonly delete?: Maybe<ReadonlyArray<MediaWhereUniqueInput>>
  readonly connect?: Maybe<ReadonlyArray<MediaWhereUniqueInput>>
  readonly set?: Maybe<ReadonlyArray<MediaWhereUniqueInput>>
  readonly disconnect?: Maybe<ReadonlyArray<MediaWhereUniqueInput>>
  readonly deleteMany?: Maybe<ReadonlyArray<MediaScalarWhereInput>>
  readonly updateMany?: Maybe<
    ReadonlyArray<MediaUpdateManyWithWhereNestedInput>
  >
}

export type MediaUpdateManyMutationInput = {
  readonly url?: Maybe<Scalars['String']>
  readonly type?: Maybe<Media_Type>
}

export type MediaUpdateManyWithWhereNestedInput = {
  readonly where: MediaScalarWhereInput
  readonly data: MediaUpdateManyDataInput
}

export type MediaUpdateOneInput = {
  readonly create?: Maybe<MediaCreateInput>
  readonly update?: Maybe<MediaUpdateDataInput>
  readonly upsert?: Maybe<MediaUpsertNestedInput>
  readonly delete?: Maybe<Scalars['Boolean']>
  readonly disconnect?: Maybe<Scalars['Boolean']>
  readonly connect?: Maybe<MediaWhereUniqueInput>
}

export type MediaUpdateWithWhereUniqueNestedInput = {
  readonly where: MediaWhereUniqueInput
  readonly data: MediaUpdateDataInput
}

export type MediaUpsertNestedInput = {
  readonly update: MediaUpdateDataInput
  readonly create: MediaCreateInput
}

export type MediaUpsertWithWhereUniqueNestedInput = {
  readonly where: MediaWhereUniqueInput
  readonly update: MediaUpdateDataInput
  readonly create: MediaCreateInput
}

export type MediaWhereInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_contains?: Maybe<Scalars['ID']>
  readonly id_not_contains?: Maybe<Scalars['ID']>
  readonly id_starts_with?: Maybe<Scalars['ID']>
  readonly id_not_starts_with?: Maybe<Scalars['ID']>
  readonly id_ends_with?: Maybe<Scalars['ID']>
  readonly id_not_ends_with?: Maybe<Scalars['ID']>
  readonly url?: Maybe<Scalars['String']>
  readonly url_not?: Maybe<Scalars['String']>
  readonly url_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly url_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly url_lt?: Maybe<Scalars['String']>
  readonly url_lte?: Maybe<Scalars['String']>
  readonly url_gt?: Maybe<Scalars['String']>
  readonly url_gte?: Maybe<Scalars['String']>
  readonly url_contains?: Maybe<Scalars['String']>
  readonly url_not_contains?: Maybe<Scalars['String']>
  readonly url_starts_with?: Maybe<Scalars['String']>
  readonly url_not_starts_with?: Maybe<Scalars['String']>
  readonly url_ends_with?: Maybe<Scalars['String']>
  readonly url_not_ends_with?: Maybe<Scalars['String']>
  readonly type?: Maybe<Media_Type>
  readonly type_not?: Maybe<Media_Type>
  readonly type_in?: Maybe<ReadonlyArray<Media_Type>>
  readonly type_not_in?: Maybe<ReadonlyArray<Media_Type>>
  readonly AND?: Maybe<ReadonlyArray<MediaWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<MediaWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<MediaWhereInput>>
}

export type MediaWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>
}

export type Mutation = {
  readonly createAccount: Account
  readonly updateAccount?: Maybe<Account>
  readonly updateManyAccounts: BatchPayload
  readonly upsertAccount: Account
  readonly deleteAccount?: Maybe<Account>
  readonly deleteManyAccounts: BatchPayload
  readonly createMedia: Media
  readonly updateMedia?: Maybe<Media>
  readonly updateManyMedias: BatchPayload
  readonly upsertMedia: Media
  readonly deleteMedia?: Maybe<Media>
  readonly deleteManyMedias: BatchPayload
  readonly createPost: Post
  readonly updatePost?: Maybe<Post>
  readonly updateManyPosts: BatchPayload
  readonly upsertPost: Post
  readonly deletePost?: Maybe<Post>
  readonly deleteManyPosts: BatchPayload
  readonly createPostMetadata: PostMetadata
  readonly updatePostMetadata?: Maybe<PostMetadata>
  readonly updateManyPostMetadatas: BatchPayload
  readonly upsertPostMetadata: PostMetadata
  readonly deletePostMetadata?: Maybe<PostMetadata>
  readonly deleteManyPostMetadatas: BatchPayload
  readonly createSphere: Sphere
  readonly updateSphere?: Maybe<Sphere>
  readonly updateManySpheres: BatchPayload
  readonly upsertSphere: Sphere
  readonly deleteSphere?: Maybe<Sphere>
  readonly deleteManySpheres: BatchPayload
  readonly createSphereVerification: SphereVerification
  readonly updateSphereVerification?: Maybe<SphereVerification>
  readonly updateManySphereVerifications: BatchPayload
  readonly upsertSphereVerification: SphereVerification
  readonly deleteSphereVerification?: Maybe<SphereVerification>
  readonly deleteManySphereVerifications: BatchPayload
  readonly createSphereVerificationCode: SphereVerificationCode
  readonly updateSphereVerificationCode?: Maybe<SphereVerificationCode>
  readonly updateManySphereVerificationCodes: BatchPayload
  readonly upsertSphereVerificationCode: SphereVerificationCode
  readonly deleteSphereVerificationCode?: Maybe<SphereVerificationCode>
  readonly deleteManySphereVerificationCodes: BatchPayload
  readonly createUser: User
  readonly updateUser?: Maybe<User>
  readonly updateManyUsers: BatchPayload
  readonly upsertUser: User
  readonly deleteUser?: Maybe<User>
  readonly deleteManyUsers: BatchPayload
  readonly exchangeToken?: Maybe<ExchangeTokenResponse>
  readonly generateVerificationCode?: Maybe<GenerateVerificationCodeResponse>
  readonly verifySphere?: Maybe<VerifySphereResponse>
  readonly mediaUpload?: Maybe<Media>
}

export type MutationCreateAccountArgs = {
  data: AccountCreateInput
}

export type MutationUpdateAccountArgs = {
  data: AccountUpdateInput
  where: AccountWhereUniqueInput
}

export type MutationUpdateManyAccountsArgs = {
  data: AccountUpdateManyMutationInput
  where?: Maybe<AccountWhereInput>
}

export type MutationUpsertAccountArgs = {
  where: AccountWhereUniqueInput
  create: AccountCreateInput
  update: AccountUpdateInput
}

export type MutationDeleteAccountArgs = {
  where: AccountWhereUniqueInput
}

export type MutationDeleteManyAccountsArgs = {
  where?: Maybe<AccountWhereInput>
}

export type MutationCreateMediaArgs = {
  data: MediaCreateInput
}

export type MutationUpdateMediaArgs = {
  data: MediaUpdateInput
  where: MediaWhereUniqueInput
}

export type MutationUpdateManyMediasArgs = {
  data: MediaUpdateManyMutationInput
  where?: Maybe<MediaWhereInput>
}

export type MutationUpsertMediaArgs = {
  where: MediaWhereUniqueInput
  create: MediaCreateInput
  update: MediaUpdateInput
}

export type MutationDeleteMediaArgs = {
  where: MediaWhereUniqueInput
}

export type MutationDeleteManyMediasArgs = {
  where?: Maybe<MediaWhereInput>
}

export type MutationCreatePostArgs = {
  data: PostCreateInput
}

export type MutationUpdatePostArgs = {
  data: PostUpdateInput
  where: PostWhereUniqueInput
}

export type MutationUpdateManyPostsArgs = {
  data: PostUpdateManyMutationInput
  where?: Maybe<PostWhereInput>
}

export type MutationUpsertPostArgs = {
  where: PostWhereUniqueInput
  create: PostCreateInput
  update: PostUpdateInput
}

export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput
}

export type MutationDeleteManyPostsArgs = {
  where?: Maybe<PostWhereInput>
}

export type MutationCreatePostMetadataArgs = {
  data: PostMetadataCreateInput
}

export type MutationUpdatePostMetadataArgs = {
  data: PostMetadataUpdateInput
  where: PostMetadataWhereUniqueInput
}

export type MutationUpdateManyPostMetadatasArgs = {
  data: PostMetadataUpdateManyMutationInput
  where?: Maybe<PostMetadataWhereInput>
}

export type MutationUpsertPostMetadataArgs = {
  where: PostMetadataWhereUniqueInput
  create: PostMetadataCreateInput
  update: PostMetadataUpdateInput
}

export type MutationDeletePostMetadataArgs = {
  where: PostMetadataWhereUniqueInput
}

export type MutationDeleteManyPostMetadatasArgs = {
  where?: Maybe<PostMetadataWhereInput>
}

export type MutationCreateSphereArgs = {
  data: SphereCreateInput
}

export type MutationUpdateSphereArgs = {
  data: SphereUpdateInput
  where: SphereWhereUniqueInput
}

export type MutationUpdateManySpheresArgs = {
  data: SphereUpdateManyMutationInput
  where?: Maybe<SphereWhereInput>
}

export type MutationUpsertSphereArgs = {
  where: SphereWhereUniqueInput
  create: SphereCreateInput
  update: SphereUpdateInput
}

export type MutationDeleteSphereArgs = {
  where: SphereWhereUniqueInput
}

export type MutationDeleteManySpheresArgs = {
  where?: Maybe<SphereWhereInput>
}

export type MutationCreateSphereVerificationArgs = {
  data: SphereVerificationCreateInput
}

export type MutationUpdateSphereVerificationArgs = {
  data: SphereVerificationUpdateInput
  where: SphereVerificationWhereUniqueInput
}

export type MutationUpdateManySphereVerificationsArgs = {
  data: SphereVerificationUpdateManyMutationInput
  where?: Maybe<SphereVerificationWhereInput>
}

export type MutationUpsertSphereVerificationArgs = {
  where: SphereVerificationWhereUniqueInput
  create: SphereVerificationCreateInput
  update: SphereVerificationUpdateInput
}

export type MutationDeleteSphereVerificationArgs = {
  where: SphereVerificationWhereUniqueInput
}

export type MutationDeleteManySphereVerificationsArgs = {
  where?: Maybe<SphereVerificationWhereInput>
}

export type MutationCreateSphereVerificationCodeArgs = {
  data: SphereVerificationCodeCreateInput
}

export type MutationUpdateSphereVerificationCodeArgs = {
  data: SphereVerificationCodeUpdateInput
  where: SphereVerificationCodeWhereUniqueInput
}

export type MutationUpdateManySphereVerificationCodesArgs = {
  data: SphereVerificationCodeUpdateManyMutationInput
  where?: Maybe<SphereVerificationCodeWhereInput>
}

export type MutationUpsertSphereVerificationCodeArgs = {
  where: SphereVerificationCodeWhereUniqueInput
  create: SphereVerificationCodeCreateInput
  update: SphereVerificationCodeUpdateInput
}

export type MutationDeleteSphereVerificationCodeArgs = {
  where: SphereVerificationCodeWhereUniqueInput
}

export type MutationDeleteManySphereVerificationCodesArgs = {
  where?: Maybe<SphereVerificationCodeWhereInput>
}

export type MutationCreateUserArgs = {
  data: UserCreateInput
}

export type MutationUpdateUserArgs = {
  data: UserUpdateInput
  where: UserWhereUniqueInput
}

export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput
  where?: Maybe<UserWhereInput>
}

export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput
  create: UserCreateInput
  update: UserUpdateInput
}

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
}

export type MutationExchangeTokenArgs = {
  input: ExchangeTokenInput
}

export type MutationVerifySphereArgs = {
  input: VerifySphereInput
}

export type MutationMediaUploadArgs = {
  file: Scalars['Upload']
}

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED',
}

export type Node = {
  readonly id: Scalars['ID']
}

export type PageInfo = {
  readonly hasNextPage: Scalars['Boolean']
  readonly hasPreviousPage: Scalars['Boolean']
  readonly startCursor?: Maybe<Scalars['String']>
  readonly endCursor?: Maybe<Scalars['String']>
}

export type Post = {
  readonly id: Scalars['ID']
  readonly title: Scalars['String']
  readonly featuredImage?: Maybe<Media>
  readonly content: Scalars['Json']
  readonly images?: Maybe<ReadonlyArray<Media>>
  readonly slug: Scalars['String']
  readonly timeToRead: Scalars['Int']
  readonly isPublished: Scalars['Boolean']
  readonly publishedAt?: Maybe<Scalars['DateTime']>
  readonly createdAt: Scalars['DateTime']
  readonly updatedAt: Scalars['DateTime']
  readonly status: Post_Status
  readonly author: Account
  readonly metadata: PostMetadata
  readonly associatedWith: Sphere
}

export type PostImagesArgs = {
  where?: Maybe<MediaWhereInput>
  orderBy?: Maybe<MediaOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export enum Post_Status {
  Published = 'PUBLISHED',
  Draft = 'DRAFT',
  Archived = 'ARCHIVED',
  Syncing = 'SYNCING',
}

export type PostConnection = {
  readonly pageInfo: PageInfo
  readonly edges: ReadonlyArray<Maybe<PostEdge>>
  readonly aggregate: AggregatePost
}

export type PostCreateInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly title: Scalars['String']
  readonly featuredImage?: Maybe<MediaCreateOneInput>
  readonly content: Scalars['Json']
  readonly images?: Maybe<MediaCreateManyInput>
  readonly slug: Scalars['String']
  readonly timeToRead?: Maybe<Scalars['Int']>
  readonly isPublished?: Maybe<Scalars['Boolean']>
  readonly publishedAt?: Maybe<Scalars['DateTime']>
  readonly status?: Maybe<Post_Status>
  readonly author: AccountCreateOneWithoutPostsInput
  readonly metadata: PostMetadataCreateOneInput
  readonly associatedWith: SphereCreateOneWithoutPostsInput
}

export type PostCreateManyWithoutAssociatedWithInput = {
  readonly create?: Maybe<ReadonlyArray<PostCreateWithoutAssociatedWithInput>>
  readonly connect?: Maybe<ReadonlyArray<PostWhereUniqueInput>>
}

export type PostCreateManyWithoutAuthorInput = {
  readonly create?: Maybe<ReadonlyArray<PostCreateWithoutAuthorInput>>
  readonly connect?: Maybe<ReadonlyArray<PostWhereUniqueInput>>
}

export type PostCreateWithoutAssociatedWithInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly title: Scalars['String']
  readonly featuredImage?: Maybe<MediaCreateOneInput>
  readonly content: Scalars['Json']
  readonly images?: Maybe<MediaCreateManyInput>
  readonly slug: Scalars['String']
  readonly timeToRead?: Maybe<Scalars['Int']>
  readonly isPublished?: Maybe<Scalars['Boolean']>
  readonly publishedAt?: Maybe<Scalars['DateTime']>
  readonly status?: Maybe<Post_Status>
  readonly author: AccountCreateOneWithoutPostsInput
  readonly metadata: PostMetadataCreateOneInput
}

export type PostCreateWithoutAuthorInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly title: Scalars['String']
  readonly featuredImage?: Maybe<MediaCreateOneInput>
  readonly content: Scalars['Json']
  readonly images?: Maybe<MediaCreateManyInput>
  readonly slug: Scalars['String']
  readonly timeToRead?: Maybe<Scalars['Int']>
  readonly isPublished?: Maybe<Scalars['Boolean']>
  readonly publishedAt?: Maybe<Scalars['DateTime']>
  readonly status?: Maybe<Post_Status>
  readonly metadata: PostMetadataCreateOneInput
  readonly associatedWith: SphereCreateOneWithoutPostsInput
}

export type PostEdge = {
  readonly node: Post
  readonly cursor: Scalars['String']
}

export type PostMetadata = {
  readonly id: Scalars['ID']
  readonly fileHash: Scalars['String']
  readonly filename?: Maybe<Scalars['String']>
  readonly createdAt: Scalars['DateTime']
  readonly updatedAt: Scalars['DateTime']
}

export type PostMetadataConnection = {
  readonly pageInfo: PageInfo
  readonly edges: ReadonlyArray<Maybe<PostMetadataEdge>>
  readonly aggregate: AggregatePostMetadata
}

export type PostMetadataCreateInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly fileHash: Scalars['String']
  readonly filename?: Maybe<Scalars['String']>
}

export type PostMetadataCreateOneInput = {
  readonly create?: Maybe<PostMetadataCreateInput>
  readonly connect?: Maybe<PostMetadataWhereUniqueInput>
}

export type PostMetadataEdge = {
  readonly node: PostMetadata
  readonly cursor: Scalars['String']
}

export enum PostMetadataOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FileHashAsc = 'fileHash_ASC',
  FileHashDesc = 'fileHash_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PostMetadataPreviousValues = {
  readonly id: Scalars['ID']
  readonly fileHash: Scalars['String']
  readonly filename?: Maybe<Scalars['String']>
  readonly createdAt: Scalars['DateTime']
  readonly updatedAt: Scalars['DateTime']
}

export type PostMetadataSubscriptionPayload = {
  readonly mutation: MutationType
  readonly node?: Maybe<PostMetadata>
  readonly updatedFields?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly previousValues?: Maybe<PostMetadataPreviousValues>
}

export type PostMetadataSubscriptionWhereInput = {
  readonly mutation_in?: Maybe<ReadonlyArray<MutationType>>
  readonly updatedFields_contains?: Maybe<Scalars['String']>
  readonly updatedFields_contains_every?: Maybe<
    ReadonlyArray<Scalars['String']>
  >
  readonly updatedFields_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly node?: Maybe<PostMetadataWhereInput>
  readonly AND?: Maybe<ReadonlyArray<PostMetadataSubscriptionWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<PostMetadataSubscriptionWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<PostMetadataSubscriptionWhereInput>>
}

export type PostMetadataUpdateDataInput = {
  readonly fileHash?: Maybe<Scalars['String']>
  readonly filename?: Maybe<Scalars['String']>
}

export type PostMetadataUpdateInput = {
  readonly fileHash?: Maybe<Scalars['String']>
  readonly filename?: Maybe<Scalars['String']>
}

export type PostMetadataUpdateManyMutationInput = {
  readonly fileHash?: Maybe<Scalars['String']>
  readonly filename?: Maybe<Scalars['String']>
}

export type PostMetadataUpdateOneRequiredInput = {
  readonly create?: Maybe<PostMetadataCreateInput>
  readonly update?: Maybe<PostMetadataUpdateDataInput>
  readonly upsert?: Maybe<PostMetadataUpsertNestedInput>
  readonly connect?: Maybe<PostMetadataWhereUniqueInput>
}

export type PostMetadataUpsertNestedInput = {
  readonly update: PostMetadataUpdateDataInput
  readonly create: PostMetadataCreateInput
}

export type PostMetadataWhereInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_contains?: Maybe<Scalars['ID']>
  readonly id_not_contains?: Maybe<Scalars['ID']>
  readonly id_starts_with?: Maybe<Scalars['ID']>
  readonly id_not_starts_with?: Maybe<Scalars['ID']>
  readonly id_ends_with?: Maybe<Scalars['ID']>
  readonly id_not_ends_with?: Maybe<Scalars['ID']>
  readonly fileHash?: Maybe<Scalars['String']>
  readonly fileHash_not?: Maybe<Scalars['String']>
  readonly fileHash_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly fileHash_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly fileHash_lt?: Maybe<Scalars['String']>
  readonly fileHash_lte?: Maybe<Scalars['String']>
  readonly fileHash_gt?: Maybe<Scalars['String']>
  readonly fileHash_gte?: Maybe<Scalars['String']>
  readonly fileHash_contains?: Maybe<Scalars['String']>
  readonly fileHash_not_contains?: Maybe<Scalars['String']>
  readonly fileHash_starts_with?: Maybe<Scalars['String']>
  readonly fileHash_not_starts_with?: Maybe<Scalars['String']>
  readonly fileHash_ends_with?: Maybe<Scalars['String']>
  readonly fileHash_not_ends_with?: Maybe<Scalars['String']>
  readonly filename?: Maybe<Scalars['String']>
  readonly filename_not?: Maybe<Scalars['String']>
  readonly filename_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly filename_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly filename_lt?: Maybe<Scalars['String']>
  readonly filename_lte?: Maybe<Scalars['String']>
  readonly filename_gt?: Maybe<Scalars['String']>
  readonly filename_gte?: Maybe<Scalars['String']>
  readonly filename_contains?: Maybe<Scalars['String']>
  readonly filename_not_contains?: Maybe<Scalars['String']>
  readonly filename_starts_with?: Maybe<Scalars['String']>
  readonly filename_not_starts_with?: Maybe<Scalars['String']>
  readonly filename_ends_with?: Maybe<Scalars['String']>
  readonly filename_not_ends_with?: Maybe<Scalars['String']>
  readonly createdAt?: Maybe<Scalars['DateTime']>
  readonly createdAt_not?: Maybe<Scalars['DateTime']>
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>
  readonly updatedAt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>
  readonly AND?: Maybe<ReadonlyArray<PostMetadataWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<PostMetadataWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<PostMetadataWhereInput>>
}

export type PostMetadataWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly fileHash?: Maybe<Scalars['String']>
}

export enum PostOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TimeToReadAsc = 'timeToRead_ASC',
  TimeToReadDesc = 'timeToRead_DESC',
  IsPublishedAsc = 'isPublished_ASC',
  IsPublishedDesc = 'isPublished_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
}

export type PostPreviousValues = {
  readonly id: Scalars['ID']
  readonly title: Scalars['String']
  readonly content: Scalars['Json']
  readonly slug: Scalars['String']
  readonly timeToRead: Scalars['Int']
  readonly isPublished: Scalars['Boolean']
  readonly publishedAt?: Maybe<Scalars['DateTime']>
  readonly createdAt: Scalars['DateTime']
  readonly updatedAt: Scalars['DateTime']
  readonly status: Post_Status
}

export type PostScalarWhereInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_contains?: Maybe<Scalars['ID']>
  readonly id_not_contains?: Maybe<Scalars['ID']>
  readonly id_starts_with?: Maybe<Scalars['ID']>
  readonly id_not_starts_with?: Maybe<Scalars['ID']>
  readonly id_ends_with?: Maybe<Scalars['ID']>
  readonly id_not_ends_with?: Maybe<Scalars['ID']>
  readonly title?: Maybe<Scalars['String']>
  readonly title_not?: Maybe<Scalars['String']>
  readonly title_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly title_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly title_lt?: Maybe<Scalars['String']>
  readonly title_lte?: Maybe<Scalars['String']>
  readonly title_gt?: Maybe<Scalars['String']>
  readonly title_gte?: Maybe<Scalars['String']>
  readonly title_contains?: Maybe<Scalars['String']>
  readonly title_not_contains?: Maybe<Scalars['String']>
  readonly title_starts_with?: Maybe<Scalars['String']>
  readonly title_not_starts_with?: Maybe<Scalars['String']>
  readonly title_ends_with?: Maybe<Scalars['String']>
  readonly title_not_ends_with?: Maybe<Scalars['String']>
  readonly slug?: Maybe<Scalars['String']>
  readonly slug_not?: Maybe<Scalars['String']>
  readonly slug_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly slug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly slug_lt?: Maybe<Scalars['String']>
  readonly slug_lte?: Maybe<Scalars['String']>
  readonly slug_gt?: Maybe<Scalars['String']>
  readonly slug_gte?: Maybe<Scalars['String']>
  readonly slug_contains?: Maybe<Scalars['String']>
  readonly slug_not_contains?: Maybe<Scalars['String']>
  readonly slug_starts_with?: Maybe<Scalars['String']>
  readonly slug_not_starts_with?: Maybe<Scalars['String']>
  readonly slug_ends_with?: Maybe<Scalars['String']>
  readonly slug_not_ends_with?: Maybe<Scalars['String']>
  readonly timeToRead?: Maybe<Scalars['Int']>
  readonly timeToRead_not?: Maybe<Scalars['Int']>
  readonly timeToRead_in?: Maybe<ReadonlyArray<Scalars['Int']>>
  readonly timeToRead_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>
  readonly timeToRead_lt?: Maybe<Scalars['Int']>
  readonly timeToRead_lte?: Maybe<Scalars['Int']>
  readonly timeToRead_gt?: Maybe<Scalars['Int']>
  readonly timeToRead_gte?: Maybe<Scalars['Int']>
  readonly isPublished?: Maybe<Scalars['Boolean']>
  readonly isPublished_not?: Maybe<Scalars['Boolean']>
  readonly publishedAt?: Maybe<Scalars['DateTime']>
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>
  readonly createdAt?: Maybe<Scalars['DateTime']>
  readonly createdAt_not?: Maybe<Scalars['DateTime']>
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>
  readonly updatedAt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>
  readonly status?: Maybe<Post_Status>
  readonly status_not?: Maybe<Post_Status>
  readonly status_in?: Maybe<ReadonlyArray<Post_Status>>
  readonly status_not_in?: Maybe<ReadonlyArray<Post_Status>>
  readonly AND?: Maybe<ReadonlyArray<PostScalarWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<PostScalarWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<PostScalarWhereInput>>
}

export type PostSubscriptionPayload = {
  readonly mutation: MutationType
  readonly node?: Maybe<Post>
  readonly updatedFields?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly previousValues?: Maybe<PostPreviousValues>
}

export type PostSubscriptionWhereInput = {
  readonly mutation_in?: Maybe<ReadonlyArray<MutationType>>
  readonly updatedFields_contains?: Maybe<Scalars['String']>
  readonly updatedFields_contains_every?: Maybe<
    ReadonlyArray<Scalars['String']>
  >
  readonly updatedFields_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly node?: Maybe<PostWhereInput>
  readonly AND?: Maybe<ReadonlyArray<PostSubscriptionWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<PostSubscriptionWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<PostSubscriptionWhereInput>>
}

export type PostUpdateInput = {
  readonly title?: Maybe<Scalars['String']>
  readonly featuredImage?: Maybe<MediaUpdateOneInput>
  readonly content?: Maybe<Scalars['Json']>
  readonly images?: Maybe<MediaUpdateManyInput>
  readonly slug?: Maybe<Scalars['String']>
  readonly timeToRead?: Maybe<Scalars['Int']>
  readonly isPublished?: Maybe<Scalars['Boolean']>
  readonly publishedAt?: Maybe<Scalars['DateTime']>
  readonly status?: Maybe<Post_Status>
  readonly author?: Maybe<AccountUpdateOneRequiredWithoutPostsInput>
  readonly metadata?: Maybe<PostMetadataUpdateOneRequiredInput>
  readonly associatedWith?: Maybe<SphereUpdateOneRequiredWithoutPostsInput>
}

export type PostUpdateManyDataInput = {
  readonly title?: Maybe<Scalars['String']>
  readonly content?: Maybe<Scalars['Json']>
  readonly slug?: Maybe<Scalars['String']>
  readonly timeToRead?: Maybe<Scalars['Int']>
  readonly isPublished?: Maybe<Scalars['Boolean']>
  readonly publishedAt?: Maybe<Scalars['DateTime']>
  readonly status?: Maybe<Post_Status>
}

export type PostUpdateManyMutationInput = {
  readonly title?: Maybe<Scalars['String']>
  readonly content?: Maybe<Scalars['Json']>
  readonly slug?: Maybe<Scalars['String']>
  readonly timeToRead?: Maybe<Scalars['Int']>
  readonly isPublished?: Maybe<Scalars['Boolean']>
  readonly publishedAt?: Maybe<Scalars['DateTime']>
  readonly status?: Maybe<Post_Status>
}

export type PostUpdateManyWithoutAssociatedWithInput = {
  readonly create?: Maybe<ReadonlyArray<PostCreateWithoutAssociatedWithInput>>
  readonly delete?: Maybe<ReadonlyArray<PostWhereUniqueInput>>
  readonly connect?: Maybe<ReadonlyArray<PostWhereUniqueInput>>
  readonly set?: Maybe<ReadonlyArray<PostWhereUniqueInput>>
  readonly disconnect?: Maybe<ReadonlyArray<PostWhereUniqueInput>>
  readonly update?: Maybe<
    ReadonlyArray<PostUpdateWithWhereUniqueWithoutAssociatedWithInput>
  >
  readonly upsert?: Maybe<
    ReadonlyArray<PostUpsertWithWhereUniqueWithoutAssociatedWithInput>
  >
  readonly deleteMany?: Maybe<ReadonlyArray<PostScalarWhereInput>>
  readonly updateMany?: Maybe<ReadonlyArray<PostUpdateManyWithWhereNestedInput>>
}

export type PostUpdateManyWithoutAuthorInput = {
  readonly create?: Maybe<ReadonlyArray<PostCreateWithoutAuthorInput>>
  readonly delete?: Maybe<ReadonlyArray<PostWhereUniqueInput>>
  readonly connect?: Maybe<ReadonlyArray<PostWhereUniqueInput>>
  readonly set?: Maybe<ReadonlyArray<PostWhereUniqueInput>>
  readonly disconnect?: Maybe<ReadonlyArray<PostWhereUniqueInput>>
  readonly update?: Maybe<
    ReadonlyArray<PostUpdateWithWhereUniqueWithoutAuthorInput>
  >
  readonly upsert?: Maybe<
    ReadonlyArray<PostUpsertWithWhereUniqueWithoutAuthorInput>
  >
  readonly deleteMany?: Maybe<ReadonlyArray<PostScalarWhereInput>>
  readonly updateMany?: Maybe<ReadonlyArray<PostUpdateManyWithWhereNestedInput>>
}

export type PostUpdateManyWithWhereNestedInput = {
  readonly where: PostScalarWhereInput
  readonly data: PostUpdateManyDataInput
}

export type PostUpdateWithoutAssociatedWithDataInput = {
  readonly title?: Maybe<Scalars['String']>
  readonly featuredImage?: Maybe<MediaUpdateOneInput>
  readonly content?: Maybe<Scalars['Json']>
  readonly images?: Maybe<MediaUpdateManyInput>
  readonly slug?: Maybe<Scalars['String']>
  readonly timeToRead?: Maybe<Scalars['Int']>
  readonly isPublished?: Maybe<Scalars['Boolean']>
  readonly publishedAt?: Maybe<Scalars['DateTime']>
  readonly status?: Maybe<Post_Status>
  readonly author?: Maybe<AccountUpdateOneRequiredWithoutPostsInput>
  readonly metadata?: Maybe<PostMetadataUpdateOneRequiredInput>
}

export type PostUpdateWithoutAuthorDataInput = {
  readonly title?: Maybe<Scalars['String']>
  readonly featuredImage?: Maybe<MediaUpdateOneInput>
  readonly content?: Maybe<Scalars['Json']>
  readonly images?: Maybe<MediaUpdateManyInput>
  readonly slug?: Maybe<Scalars['String']>
  readonly timeToRead?: Maybe<Scalars['Int']>
  readonly isPublished?: Maybe<Scalars['Boolean']>
  readonly publishedAt?: Maybe<Scalars['DateTime']>
  readonly status?: Maybe<Post_Status>
  readonly metadata?: Maybe<PostMetadataUpdateOneRequiredInput>
  readonly associatedWith?: Maybe<SphereUpdateOneRequiredWithoutPostsInput>
}

export type PostUpdateWithWhereUniqueWithoutAssociatedWithInput = {
  readonly where: PostWhereUniqueInput
  readonly data: PostUpdateWithoutAssociatedWithDataInput
}

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  readonly where: PostWhereUniqueInput
  readonly data: PostUpdateWithoutAuthorDataInput
}

export type PostUpsertWithWhereUniqueWithoutAssociatedWithInput = {
  readonly where: PostWhereUniqueInput
  readonly update: PostUpdateWithoutAssociatedWithDataInput
  readonly create: PostCreateWithoutAssociatedWithInput
}

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  readonly where: PostWhereUniqueInput
  readonly update: PostUpdateWithoutAuthorDataInput
  readonly create: PostCreateWithoutAuthorInput
}

export type PostWhereInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_contains?: Maybe<Scalars['ID']>
  readonly id_not_contains?: Maybe<Scalars['ID']>
  readonly id_starts_with?: Maybe<Scalars['ID']>
  readonly id_not_starts_with?: Maybe<Scalars['ID']>
  readonly id_ends_with?: Maybe<Scalars['ID']>
  readonly id_not_ends_with?: Maybe<Scalars['ID']>
  readonly title?: Maybe<Scalars['String']>
  readonly title_not?: Maybe<Scalars['String']>
  readonly title_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly title_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly title_lt?: Maybe<Scalars['String']>
  readonly title_lte?: Maybe<Scalars['String']>
  readonly title_gt?: Maybe<Scalars['String']>
  readonly title_gte?: Maybe<Scalars['String']>
  readonly title_contains?: Maybe<Scalars['String']>
  readonly title_not_contains?: Maybe<Scalars['String']>
  readonly title_starts_with?: Maybe<Scalars['String']>
  readonly title_not_starts_with?: Maybe<Scalars['String']>
  readonly title_ends_with?: Maybe<Scalars['String']>
  readonly title_not_ends_with?: Maybe<Scalars['String']>
  readonly featuredImage?: Maybe<MediaWhereInput>
  readonly images_every?: Maybe<MediaWhereInput>
  readonly images_some?: Maybe<MediaWhereInput>
  readonly images_none?: Maybe<MediaWhereInput>
  readonly slug?: Maybe<Scalars['String']>
  readonly slug_not?: Maybe<Scalars['String']>
  readonly slug_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly slug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly slug_lt?: Maybe<Scalars['String']>
  readonly slug_lte?: Maybe<Scalars['String']>
  readonly slug_gt?: Maybe<Scalars['String']>
  readonly slug_gte?: Maybe<Scalars['String']>
  readonly slug_contains?: Maybe<Scalars['String']>
  readonly slug_not_contains?: Maybe<Scalars['String']>
  readonly slug_starts_with?: Maybe<Scalars['String']>
  readonly slug_not_starts_with?: Maybe<Scalars['String']>
  readonly slug_ends_with?: Maybe<Scalars['String']>
  readonly slug_not_ends_with?: Maybe<Scalars['String']>
  readonly timeToRead?: Maybe<Scalars['Int']>
  readonly timeToRead_not?: Maybe<Scalars['Int']>
  readonly timeToRead_in?: Maybe<ReadonlyArray<Scalars['Int']>>
  readonly timeToRead_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>
  readonly timeToRead_lt?: Maybe<Scalars['Int']>
  readonly timeToRead_lte?: Maybe<Scalars['Int']>
  readonly timeToRead_gt?: Maybe<Scalars['Int']>
  readonly timeToRead_gte?: Maybe<Scalars['Int']>
  readonly isPublished?: Maybe<Scalars['Boolean']>
  readonly isPublished_not?: Maybe<Scalars['Boolean']>
  readonly publishedAt?: Maybe<Scalars['DateTime']>
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>
  readonly createdAt?: Maybe<Scalars['DateTime']>
  readonly createdAt_not?: Maybe<Scalars['DateTime']>
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>
  readonly updatedAt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>
  readonly status?: Maybe<Post_Status>
  readonly status_not?: Maybe<Post_Status>
  readonly status_in?: Maybe<ReadonlyArray<Post_Status>>
  readonly status_not_in?: Maybe<ReadonlyArray<Post_Status>>
  readonly author?: Maybe<AccountWhereInput>
  readonly metadata?: Maybe<PostMetadataWhereInput>
  readonly associatedWith?: Maybe<SphereWhereInput>
  readonly AND?: Maybe<ReadonlyArray<PostWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<PostWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<PostWhereInput>>
}

export type PostWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly slug?: Maybe<Scalars['String']>
}

export type Query = {
  readonly account?: Maybe<Account>
  readonly accounts: ReadonlyArray<Maybe<Account>>
  readonly accountsConnection: AccountConnection
  readonly media?: Maybe<Media>
  readonly medias: ReadonlyArray<Maybe<Media>>
  readonly mediasConnection: MediaConnection
  readonly post?: Maybe<Post>
  readonly posts: ReadonlyArray<Maybe<Post>>
  readonly postsConnection: PostConnection
  readonly postMetadata?: Maybe<PostMetadata>
  readonly postMetadatas: ReadonlyArray<Maybe<PostMetadata>>
  readonly postMetadatasConnection: PostMetadataConnection
  readonly sphere?: Maybe<Sphere>
  readonly spheres: ReadonlyArray<Maybe<Sphere>>
  readonly spheresConnection: SphereConnection
  readonly sphereVerification?: Maybe<SphereVerification>
  readonly sphereVerifications: ReadonlyArray<Maybe<SphereVerification>>
  readonly sphereVerificationsConnection: SphereVerificationConnection
  readonly sphereVerificationCode?: Maybe<SphereVerificationCode>
  readonly sphereVerificationCodes: ReadonlyArray<Maybe<SphereVerificationCode>>
  readonly sphereVerificationCodesConnection: SphereVerificationCodeConnection
  readonly user?: Maybe<User>
  readonly users: ReadonlyArray<Maybe<User>>
  readonly usersConnection: UserConnection
  readonly node?: Maybe<Node>
}

export type QueryAccountArgs = {
  where: AccountWhereUniqueInput
}

export type QueryAccountsArgs = {
  where?: Maybe<AccountWhereInput>
  orderBy?: Maybe<AccountOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryAccountsConnectionArgs = {
  where?: Maybe<AccountWhereInput>
  orderBy?: Maybe<AccountOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryMediaArgs = {
  where: MediaWhereUniqueInput
}

export type QueryMediasArgs = {
  where?: Maybe<MediaWhereInput>
  orderBy?: Maybe<MediaOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryMediasConnectionArgs = {
  where?: Maybe<MediaWhereInput>
  orderBy?: Maybe<MediaOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryPostArgs = {
  where: PostWhereUniqueInput
}

export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>
  orderBy?: Maybe<PostOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryPostsConnectionArgs = {
  where?: Maybe<PostWhereInput>
  orderBy?: Maybe<PostOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryPostMetadataArgs = {
  where: PostMetadataWhereUniqueInput
}

export type QueryPostMetadatasArgs = {
  where?: Maybe<PostMetadataWhereInput>
  orderBy?: Maybe<PostMetadataOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryPostMetadatasConnectionArgs = {
  where?: Maybe<PostMetadataWhereInput>
  orderBy?: Maybe<PostMetadataOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QuerySphereArgs = {
  where: SphereWhereUniqueInput
}

export type QuerySpheresArgs = {
  where?: Maybe<SphereWhereInput>
  orderBy?: Maybe<SphereOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QuerySpheresConnectionArgs = {
  where?: Maybe<SphereWhereInput>
  orderBy?: Maybe<SphereOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QuerySphereVerificationArgs = {
  where: SphereVerificationWhereUniqueInput
}

export type QuerySphereVerificationsArgs = {
  where?: Maybe<SphereVerificationWhereInput>
  orderBy?: Maybe<SphereVerificationOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QuerySphereVerificationsConnectionArgs = {
  where?: Maybe<SphereVerificationWhereInput>
  orderBy?: Maybe<SphereVerificationOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QuerySphereVerificationCodeArgs = {
  where: SphereVerificationCodeWhereUniqueInput
}

export type QuerySphereVerificationCodesArgs = {
  where?: Maybe<SphereVerificationCodeWhereInput>
  orderBy?: Maybe<SphereVerificationCodeOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QuerySphereVerificationCodesConnectionArgs = {
  where?: Maybe<SphereVerificationCodeWhereInput>
  orderBy?: Maybe<SphereVerificationCodeOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>
  orderBy?: Maybe<UserOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>
  orderBy?: Maybe<UserOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryNodeArgs = {
  id: Scalars['ID']
}

export type Sphere = {
  readonly id: Scalars['ID']
  readonly alias?: Maybe<Scalars['String']>
  readonly aliasSlug: Scalars['String']
  readonly slugPrefix: Scalars['String']
  readonly associatedWith: Account
  readonly verifiedBy: SphereVerification
  readonly createdAt: Scalars['DateTime']
  readonly updatedAt: Scalars['DateTime']
  readonly posts?: Maybe<ReadonlyArray<Post>>
}

export type SpherePostsArgs = {
  where?: Maybe<PostWhereInput>
  orderBy?: Maybe<PostOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type SphereConnection = {
  readonly pageInfo: PageInfo
  readonly edges: ReadonlyArray<Maybe<SphereEdge>>
  readonly aggregate: AggregateSphere
}

export type SphereCreateInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly alias?: Maybe<Scalars['String']>
  readonly aliasSlug: Scalars['String']
  readonly slugPrefix?: Maybe<Scalars['String']>
  readonly associatedWith: AccountCreateOneWithoutSpheresInput
  readonly verifiedBy: SphereVerificationCreateOneInput
  readonly posts?: Maybe<PostCreateManyWithoutAssociatedWithInput>
}

export type SphereCreateManyWithoutAssociatedWithInput = {
  readonly create?: Maybe<ReadonlyArray<SphereCreateWithoutAssociatedWithInput>>
  readonly connect?: Maybe<ReadonlyArray<SphereWhereUniqueInput>>
}

export type SphereCreateOneWithoutPostsInput = {
  readonly create?: Maybe<SphereCreateWithoutPostsInput>
  readonly connect?: Maybe<SphereWhereUniqueInput>
}

export type SphereCreateWithoutAssociatedWithInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly alias?: Maybe<Scalars['String']>
  readonly aliasSlug: Scalars['String']
  readonly slugPrefix?: Maybe<Scalars['String']>
  readonly verifiedBy: SphereVerificationCreateOneInput
  readonly posts?: Maybe<PostCreateManyWithoutAssociatedWithInput>
}

export type SphereCreateWithoutPostsInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly alias?: Maybe<Scalars['String']>
  readonly aliasSlug: Scalars['String']
  readonly slugPrefix?: Maybe<Scalars['String']>
  readonly associatedWith: AccountCreateOneWithoutSpheresInput
  readonly verifiedBy: SphereVerificationCreateOneInput
}

export type SphereEdge = {
  readonly node: Sphere
  readonly cursor: Scalars['String']
}

export enum SphereOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AliasAsc = 'alias_ASC',
  AliasDesc = 'alias_DESC',
  AliasSlugAsc = 'aliasSlug_ASC',
  AliasSlugDesc = 'aliasSlug_DESC',
  SlugPrefixAsc = 'slugPrefix_ASC',
  SlugPrefixDesc = 'slugPrefix_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type SpherePreviousValues = {
  readonly id: Scalars['ID']
  readonly alias?: Maybe<Scalars['String']>
  readonly aliasSlug: Scalars['String']
  readonly slugPrefix: Scalars['String']
  readonly createdAt: Scalars['DateTime']
  readonly updatedAt: Scalars['DateTime']
}

export type SphereScalarWhereInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_contains?: Maybe<Scalars['ID']>
  readonly id_not_contains?: Maybe<Scalars['ID']>
  readonly id_starts_with?: Maybe<Scalars['ID']>
  readonly id_not_starts_with?: Maybe<Scalars['ID']>
  readonly id_ends_with?: Maybe<Scalars['ID']>
  readonly id_not_ends_with?: Maybe<Scalars['ID']>
  readonly alias?: Maybe<Scalars['String']>
  readonly alias_not?: Maybe<Scalars['String']>
  readonly alias_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly alias_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly alias_lt?: Maybe<Scalars['String']>
  readonly alias_lte?: Maybe<Scalars['String']>
  readonly alias_gt?: Maybe<Scalars['String']>
  readonly alias_gte?: Maybe<Scalars['String']>
  readonly alias_contains?: Maybe<Scalars['String']>
  readonly alias_not_contains?: Maybe<Scalars['String']>
  readonly alias_starts_with?: Maybe<Scalars['String']>
  readonly alias_not_starts_with?: Maybe<Scalars['String']>
  readonly alias_ends_with?: Maybe<Scalars['String']>
  readonly alias_not_ends_with?: Maybe<Scalars['String']>
  readonly aliasSlug?: Maybe<Scalars['String']>
  readonly aliasSlug_not?: Maybe<Scalars['String']>
  readonly aliasSlug_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly aliasSlug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly aliasSlug_lt?: Maybe<Scalars['String']>
  readonly aliasSlug_lte?: Maybe<Scalars['String']>
  readonly aliasSlug_gt?: Maybe<Scalars['String']>
  readonly aliasSlug_gte?: Maybe<Scalars['String']>
  readonly aliasSlug_contains?: Maybe<Scalars['String']>
  readonly aliasSlug_not_contains?: Maybe<Scalars['String']>
  readonly aliasSlug_starts_with?: Maybe<Scalars['String']>
  readonly aliasSlug_not_starts_with?: Maybe<Scalars['String']>
  readonly aliasSlug_ends_with?: Maybe<Scalars['String']>
  readonly aliasSlug_not_ends_with?: Maybe<Scalars['String']>
  readonly slugPrefix?: Maybe<Scalars['String']>
  readonly slugPrefix_not?: Maybe<Scalars['String']>
  readonly slugPrefix_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly slugPrefix_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly slugPrefix_lt?: Maybe<Scalars['String']>
  readonly slugPrefix_lte?: Maybe<Scalars['String']>
  readonly slugPrefix_gt?: Maybe<Scalars['String']>
  readonly slugPrefix_gte?: Maybe<Scalars['String']>
  readonly slugPrefix_contains?: Maybe<Scalars['String']>
  readonly slugPrefix_not_contains?: Maybe<Scalars['String']>
  readonly slugPrefix_starts_with?: Maybe<Scalars['String']>
  readonly slugPrefix_not_starts_with?: Maybe<Scalars['String']>
  readonly slugPrefix_ends_with?: Maybe<Scalars['String']>
  readonly slugPrefix_not_ends_with?: Maybe<Scalars['String']>
  readonly createdAt?: Maybe<Scalars['DateTime']>
  readonly createdAt_not?: Maybe<Scalars['DateTime']>
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>
  readonly updatedAt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>
  readonly AND?: Maybe<ReadonlyArray<SphereScalarWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<SphereScalarWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<SphereScalarWhereInput>>
}

export type SphereSubscriptionPayload = {
  readonly mutation: MutationType
  readonly node?: Maybe<Sphere>
  readonly updatedFields?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly previousValues?: Maybe<SpherePreviousValues>
}

export type SphereSubscriptionWhereInput = {
  readonly mutation_in?: Maybe<ReadonlyArray<MutationType>>
  readonly updatedFields_contains?: Maybe<Scalars['String']>
  readonly updatedFields_contains_every?: Maybe<
    ReadonlyArray<Scalars['String']>
  >
  readonly updatedFields_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly node?: Maybe<SphereWhereInput>
  readonly AND?: Maybe<ReadonlyArray<SphereSubscriptionWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<SphereSubscriptionWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<SphereSubscriptionWhereInput>>
}

export type SphereUpdateInput = {
  readonly alias?: Maybe<Scalars['String']>
  readonly aliasSlug?: Maybe<Scalars['String']>
  readonly slugPrefix?: Maybe<Scalars['String']>
  readonly associatedWith?: Maybe<AccountUpdateOneRequiredWithoutSpheresInput>
  readonly verifiedBy?: Maybe<SphereVerificationUpdateOneRequiredInput>
  readonly posts?: Maybe<PostUpdateManyWithoutAssociatedWithInput>
}

export type SphereUpdateManyDataInput = {
  readonly alias?: Maybe<Scalars['String']>
  readonly aliasSlug?: Maybe<Scalars['String']>
  readonly slugPrefix?: Maybe<Scalars['String']>
}

export type SphereUpdateManyMutationInput = {
  readonly alias?: Maybe<Scalars['String']>
  readonly aliasSlug?: Maybe<Scalars['String']>
  readonly slugPrefix?: Maybe<Scalars['String']>
}

export type SphereUpdateManyWithoutAssociatedWithInput = {
  readonly create?: Maybe<ReadonlyArray<SphereCreateWithoutAssociatedWithInput>>
  readonly delete?: Maybe<ReadonlyArray<SphereWhereUniqueInput>>
  readonly connect?: Maybe<ReadonlyArray<SphereWhereUniqueInput>>
  readonly set?: Maybe<ReadonlyArray<SphereWhereUniqueInput>>
  readonly disconnect?: Maybe<ReadonlyArray<SphereWhereUniqueInput>>
  readonly update?: Maybe<
    ReadonlyArray<SphereUpdateWithWhereUniqueWithoutAssociatedWithInput>
  >
  readonly upsert?: Maybe<
    ReadonlyArray<SphereUpsertWithWhereUniqueWithoutAssociatedWithInput>
  >
  readonly deleteMany?: Maybe<ReadonlyArray<SphereScalarWhereInput>>
  readonly updateMany?: Maybe<
    ReadonlyArray<SphereUpdateManyWithWhereNestedInput>
  >
}

export type SphereUpdateManyWithWhereNestedInput = {
  readonly where: SphereScalarWhereInput
  readonly data: SphereUpdateManyDataInput
}

export type SphereUpdateOneRequiredWithoutPostsInput = {
  readonly create?: Maybe<SphereCreateWithoutPostsInput>
  readonly update?: Maybe<SphereUpdateWithoutPostsDataInput>
  readonly upsert?: Maybe<SphereUpsertWithoutPostsInput>
  readonly connect?: Maybe<SphereWhereUniqueInput>
}

export type SphereUpdateWithoutAssociatedWithDataInput = {
  readonly alias?: Maybe<Scalars['String']>
  readonly aliasSlug?: Maybe<Scalars['String']>
  readonly slugPrefix?: Maybe<Scalars['String']>
  readonly verifiedBy?: Maybe<SphereVerificationUpdateOneRequiredInput>
  readonly posts?: Maybe<PostUpdateManyWithoutAssociatedWithInput>
}

export type SphereUpdateWithoutPostsDataInput = {
  readonly alias?: Maybe<Scalars['String']>
  readonly aliasSlug?: Maybe<Scalars['String']>
  readonly slugPrefix?: Maybe<Scalars['String']>
  readonly associatedWith?: Maybe<AccountUpdateOneRequiredWithoutSpheresInput>
  readonly verifiedBy?: Maybe<SphereVerificationUpdateOneRequiredInput>
}

export type SphereUpdateWithWhereUniqueWithoutAssociatedWithInput = {
  readonly where: SphereWhereUniqueInput
  readonly data: SphereUpdateWithoutAssociatedWithDataInput
}

export type SphereUpsertWithoutPostsInput = {
  readonly update: SphereUpdateWithoutPostsDataInput
  readonly create: SphereCreateWithoutPostsInput
}

export type SphereUpsertWithWhereUniqueWithoutAssociatedWithInput = {
  readonly where: SphereWhereUniqueInput
  readonly update: SphereUpdateWithoutAssociatedWithDataInput
  readonly create: SphereCreateWithoutAssociatedWithInput
}

export type SphereVerification = {
  readonly id: Scalars['ID']
  readonly url: Scalars['String']
  readonly code: SphereVerificationCode
  readonly status: SphereVerificationStatus
  readonly createdAt: Scalars['DateTime']
  readonly updatedAt: Scalars['DateTime']
}

export type SphereVerificationCode = {
  readonly id: Scalars['ID']
  readonly issuedAt: Scalars['DateTime']
  readonly updatedAt: Scalars['DateTime']
  readonly value: Scalars['String']
  readonly status: SphereVerificationCodeStatus
  readonly associatedWith: Account
}

export type SphereVerificationCodeConnection = {
  readonly pageInfo: PageInfo
  readonly edges: ReadonlyArray<Maybe<SphereVerificationCodeEdge>>
  readonly aggregate: AggregateSphereVerificationCode
}

export type SphereVerificationCodeCreateInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly value: Scalars['String']
  readonly status?: Maybe<SphereVerificationCodeStatus>
  readonly associatedWith: AccountCreateOneInput
}

export type SphereVerificationCodeCreateOneInput = {
  readonly create?: Maybe<SphereVerificationCodeCreateInput>
  readonly connect?: Maybe<SphereVerificationCodeWhereUniqueInput>
}

export type SphereVerificationCodeEdge = {
  readonly node: SphereVerificationCode
  readonly cursor: Scalars['String']
}

export enum SphereVerificationCodeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IssuedAtAsc = 'issuedAt_ASC',
  IssuedAtDesc = 'issuedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
}

export type SphereVerificationCodePreviousValues = {
  readonly id: Scalars['ID']
  readonly issuedAt: Scalars['DateTime']
  readonly updatedAt: Scalars['DateTime']
  readonly value: Scalars['String']
  readonly status: SphereVerificationCodeStatus
}

export enum SphereVerificationCodeStatus {
  Issued = 'ISSUED',
  Claimed = 'CLAIMED',
  Invalidated = 'INVALIDATED',
}

export type SphereVerificationCodeSubscriptionPayload = {
  readonly mutation: MutationType
  readonly node?: Maybe<SphereVerificationCode>
  readonly updatedFields?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly previousValues?: Maybe<SphereVerificationCodePreviousValues>
}

export type SphereVerificationCodeSubscriptionWhereInput = {
  readonly mutation_in?: Maybe<ReadonlyArray<MutationType>>
  readonly updatedFields_contains?: Maybe<Scalars['String']>
  readonly updatedFields_contains_every?: Maybe<
    ReadonlyArray<Scalars['String']>
  >
  readonly updatedFields_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly node?: Maybe<SphereVerificationCodeWhereInput>
  readonly AND?: Maybe<
    ReadonlyArray<SphereVerificationCodeSubscriptionWhereInput>
  >
  readonly OR?: Maybe<
    ReadonlyArray<SphereVerificationCodeSubscriptionWhereInput>
  >
  readonly NOT?: Maybe<
    ReadonlyArray<SphereVerificationCodeSubscriptionWhereInput>
  >
}

export type SphereVerificationCodeUpdateDataInput = {
  readonly value?: Maybe<Scalars['String']>
  readonly status?: Maybe<SphereVerificationCodeStatus>
  readonly associatedWith?: Maybe<AccountUpdateOneRequiredInput>
}

export type SphereVerificationCodeUpdateInput = {
  readonly value?: Maybe<Scalars['String']>
  readonly status?: Maybe<SphereVerificationCodeStatus>
  readonly associatedWith?: Maybe<AccountUpdateOneRequiredInput>
}

export type SphereVerificationCodeUpdateManyMutationInput = {
  readonly value?: Maybe<Scalars['String']>
  readonly status?: Maybe<SphereVerificationCodeStatus>
}

export type SphereVerificationCodeUpdateOneRequiredInput = {
  readonly create?: Maybe<SphereVerificationCodeCreateInput>
  readonly update?: Maybe<SphereVerificationCodeUpdateDataInput>
  readonly upsert?: Maybe<SphereVerificationCodeUpsertNestedInput>
  readonly connect?: Maybe<SphereVerificationCodeWhereUniqueInput>
}

export type SphereVerificationCodeUpsertNestedInput = {
  readonly update: SphereVerificationCodeUpdateDataInput
  readonly create: SphereVerificationCodeCreateInput
}

export type SphereVerificationCodeWhereInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_contains?: Maybe<Scalars['ID']>
  readonly id_not_contains?: Maybe<Scalars['ID']>
  readonly id_starts_with?: Maybe<Scalars['ID']>
  readonly id_not_starts_with?: Maybe<Scalars['ID']>
  readonly id_ends_with?: Maybe<Scalars['ID']>
  readonly id_not_ends_with?: Maybe<Scalars['ID']>
  readonly issuedAt?: Maybe<Scalars['DateTime']>
  readonly issuedAt_not?: Maybe<Scalars['DateTime']>
  readonly issuedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly issuedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly issuedAt_lt?: Maybe<Scalars['DateTime']>
  readonly issuedAt_lte?: Maybe<Scalars['DateTime']>
  readonly issuedAt_gt?: Maybe<Scalars['DateTime']>
  readonly issuedAt_gte?: Maybe<Scalars['DateTime']>
  readonly updatedAt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>
  readonly value?: Maybe<Scalars['String']>
  readonly value_not?: Maybe<Scalars['String']>
  readonly value_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly value_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly value_lt?: Maybe<Scalars['String']>
  readonly value_lte?: Maybe<Scalars['String']>
  readonly value_gt?: Maybe<Scalars['String']>
  readonly value_gte?: Maybe<Scalars['String']>
  readonly value_contains?: Maybe<Scalars['String']>
  readonly value_not_contains?: Maybe<Scalars['String']>
  readonly value_starts_with?: Maybe<Scalars['String']>
  readonly value_not_starts_with?: Maybe<Scalars['String']>
  readonly value_ends_with?: Maybe<Scalars['String']>
  readonly value_not_ends_with?: Maybe<Scalars['String']>
  readonly status?: Maybe<SphereVerificationCodeStatus>
  readonly status_not?: Maybe<SphereVerificationCodeStatus>
  readonly status_in?: Maybe<ReadonlyArray<SphereVerificationCodeStatus>>
  readonly status_not_in?: Maybe<ReadonlyArray<SphereVerificationCodeStatus>>
  readonly associatedWith?: Maybe<AccountWhereInput>
  readonly AND?: Maybe<ReadonlyArray<SphereVerificationCodeWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<SphereVerificationCodeWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<SphereVerificationCodeWhereInput>>
}

export type SphereVerificationCodeWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly value?: Maybe<Scalars['String']>
}

export type SphereVerificationConnection = {
  readonly pageInfo: PageInfo
  readonly edges: ReadonlyArray<Maybe<SphereVerificationEdge>>
  readonly aggregate: AggregateSphereVerification
}

export type SphereVerificationCreateInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly url: Scalars['String']
  readonly code: SphereVerificationCodeCreateOneInput
  readonly status?: Maybe<SphereVerificationStatus>
}

export type SphereVerificationCreateOneInput = {
  readonly create?: Maybe<SphereVerificationCreateInput>
  readonly connect?: Maybe<SphereVerificationWhereUniqueInput>
}

export type SphereVerificationEdge = {
  readonly node: SphereVerification
  readonly cursor: Scalars['String']
}

export enum SphereVerificationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type SphereVerificationPreviousValues = {
  readonly id: Scalars['ID']
  readonly url: Scalars['String']
  readonly status: SphereVerificationStatus
  readonly createdAt: Scalars['DateTime']
  readonly updatedAt: Scalars['DateTime']
}

export enum SphereVerificationStatus {
  Verified = 'VERIFIED',
  AwaitingVerification = 'AWAITING_VERIFICATION',
  Disabled = 'DISABLED',
}

export type SphereVerificationSubscriptionPayload = {
  readonly mutation: MutationType
  readonly node?: Maybe<SphereVerification>
  readonly updatedFields?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly previousValues?: Maybe<SphereVerificationPreviousValues>
}

export type SphereVerificationSubscriptionWhereInput = {
  readonly mutation_in?: Maybe<ReadonlyArray<MutationType>>
  readonly updatedFields_contains?: Maybe<Scalars['String']>
  readonly updatedFields_contains_every?: Maybe<
    ReadonlyArray<Scalars['String']>
  >
  readonly updatedFields_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly node?: Maybe<SphereVerificationWhereInput>
  readonly AND?: Maybe<ReadonlyArray<SphereVerificationSubscriptionWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<SphereVerificationSubscriptionWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<SphereVerificationSubscriptionWhereInput>>
}

export type SphereVerificationUpdateDataInput = {
  readonly url?: Maybe<Scalars['String']>
  readonly code?: Maybe<SphereVerificationCodeUpdateOneRequiredInput>
  readonly status?: Maybe<SphereVerificationStatus>
}

export type SphereVerificationUpdateInput = {
  readonly url?: Maybe<Scalars['String']>
  readonly code?: Maybe<SphereVerificationCodeUpdateOneRequiredInput>
  readonly status?: Maybe<SphereVerificationStatus>
}

export type SphereVerificationUpdateManyMutationInput = {
  readonly url?: Maybe<Scalars['String']>
  readonly status?: Maybe<SphereVerificationStatus>
}

export type SphereVerificationUpdateOneRequiredInput = {
  readonly create?: Maybe<SphereVerificationCreateInput>
  readonly update?: Maybe<SphereVerificationUpdateDataInput>
  readonly upsert?: Maybe<SphereVerificationUpsertNestedInput>
  readonly connect?: Maybe<SphereVerificationWhereUniqueInput>
}

export type SphereVerificationUpsertNestedInput = {
  readonly update: SphereVerificationUpdateDataInput
  readonly create: SphereVerificationCreateInput
}

export type SphereVerificationWhereInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_contains?: Maybe<Scalars['ID']>
  readonly id_not_contains?: Maybe<Scalars['ID']>
  readonly id_starts_with?: Maybe<Scalars['ID']>
  readonly id_not_starts_with?: Maybe<Scalars['ID']>
  readonly id_ends_with?: Maybe<Scalars['ID']>
  readonly id_not_ends_with?: Maybe<Scalars['ID']>
  readonly url?: Maybe<Scalars['String']>
  readonly url_not?: Maybe<Scalars['String']>
  readonly url_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly url_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly url_lt?: Maybe<Scalars['String']>
  readonly url_lte?: Maybe<Scalars['String']>
  readonly url_gt?: Maybe<Scalars['String']>
  readonly url_gte?: Maybe<Scalars['String']>
  readonly url_contains?: Maybe<Scalars['String']>
  readonly url_not_contains?: Maybe<Scalars['String']>
  readonly url_starts_with?: Maybe<Scalars['String']>
  readonly url_not_starts_with?: Maybe<Scalars['String']>
  readonly url_ends_with?: Maybe<Scalars['String']>
  readonly url_not_ends_with?: Maybe<Scalars['String']>
  readonly code?: Maybe<SphereVerificationCodeWhereInput>
  readonly status?: Maybe<SphereVerificationStatus>
  readonly status_not?: Maybe<SphereVerificationStatus>
  readonly status_in?: Maybe<ReadonlyArray<SphereVerificationStatus>>
  readonly status_not_in?: Maybe<ReadonlyArray<SphereVerificationStatus>>
  readonly createdAt?: Maybe<Scalars['DateTime']>
  readonly createdAt_not?: Maybe<Scalars['DateTime']>
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>
  readonly updatedAt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>
  readonly AND?: Maybe<ReadonlyArray<SphereVerificationWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<SphereVerificationWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<SphereVerificationWhereInput>>
}

export type SphereVerificationWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>
}

export type SphereWhereInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_contains?: Maybe<Scalars['ID']>
  readonly id_not_contains?: Maybe<Scalars['ID']>
  readonly id_starts_with?: Maybe<Scalars['ID']>
  readonly id_not_starts_with?: Maybe<Scalars['ID']>
  readonly id_ends_with?: Maybe<Scalars['ID']>
  readonly id_not_ends_with?: Maybe<Scalars['ID']>
  readonly alias?: Maybe<Scalars['String']>
  readonly alias_not?: Maybe<Scalars['String']>
  readonly alias_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly alias_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly alias_lt?: Maybe<Scalars['String']>
  readonly alias_lte?: Maybe<Scalars['String']>
  readonly alias_gt?: Maybe<Scalars['String']>
  readonly alias_gte?: Maybe<Scalars['String']>
  readonly alias_contains?: Maybe<Scalars['String']>
  readonly alias_not_contains?: Maybe<Scalars['String']>
  readonly alias_starts_with?: Maybe<Scalars['String']>
  readonly alias_not_starts_with?: Maybe<Scalars['String']>
  readonly alias_ends_with?: Maybe<Scalars['String']>
  readonly alias_not_ends_with?: Maybe<Scalars['String']>
  readonly aliasSlug?: Maybe<Scalars['String']>
  readonly aliasSlug_not?: Maybe<Scalars['String']>
  readonly aliasSlug_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly aliasSlug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly aliasSlug_lt?: Maybe<Scalars['String']>
  readonly aliasSlug_lte?: Maybe<Scalars['String']>
  readonly aliasSlug_gt?: Maybe<Scalars['String']>
  readonly aliasSlug_gte?: Maybe<Scalars['String']>
  readonly aliasSlug_contains?: Maybe<Scalars['String']>
  readonly aliasSlug_not_contains?: Maybe<Scalars['String']>
  readonly aliasSlug_starts_with?: Maybe<Scalars['String']>
  readonly aliasSlug_not_starts_with?: Maybe<Scalars['String']>
  readonly aliasSlug_ends_with?: Maybe<Scalars['String']>
  readonly aliasSlug_not_ends_with?: Maybe<Scalars['String']>
  readonly slugPrefix?: Maybe<Scalars['String']>
  readonly slugPrefix_not?: Maybe<Scalars['String']>
  readonly slugPrefix_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly slugPrefix_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly slugPrefix_lt?: Maybe<Scalars['String']>
  readonly slugPrefix_lte?: Maybe<Scalars['String']>
  readonly slugPrefix_gt?: Maybe<Scalars['String']>
  readonly slugPrefix_gte?: Maybe<Scalars['String']>
  readonly slugPrefix_contains?: Maybe<Scalars['String']>
  readonly slugPrefix_not_contains?: Maybe<Scalars['String']>
  readonly slugPrefix_starts_with?: Maybe<Scalars['String']>
  readonly slugPrefix_not_starts_with?: Maybe<Scalars['String']>
  readonly slugPrefix_ends_with?: Maybe<Scalars['String']>
  readonly slugPrefix_not_ends_with?: Maybe<Scalars['String']>
  readonly associatedWith?: Maybe<AccountWhereInput>
  readonly verifiedBy?: Maybe<SphereVerificationWhereInput>
  readonly createdAt?: Maybe<Scalars['DateTime']>
  readonly createdAt_not?: Maybe<Scalars['DateTime']>
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>
  readonly updatedAt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>
  readonly posts_every?: Maybe<PostWhereInput>
  readonly posts_some?: Maybe<PostWhereInput>
  readonly posts_none?: Maybe<PostWhereInput>
  readonly AND?: Maybe<ReadonlyArray<SphereWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<SphereWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<SphereWhereInput>>
}

export type SphereWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly alias?: Maybe<Scalars['String']>
  readonly aliasSlug?: Maybe<Scalars['String']>
}

export type Subscription = {
  readonly account?: Maybe<AccountSubscriptionPayload>
  readonly media?: Maybe<MediaSubscriptionPayload>
  readonly post?: Maybe<PostSubscriptionPayload>
  readonly postMetadata?: Maybe<PostMetadataSubscriptionPayload>
  readonly sphere?: Maybe<SphereSubscriptionPayload>
  readonly sphereVerification?: Maybe<SphereVerificationSubscriptionPayload>
  readonly sphereVerificationCode?: Maybe<
    SphereVerificationCodeSubscriptionPayload
  >
  readonly user?: Maybe<UserSubscriptionPayload>
}

export type SubscriptionAccountArgs = {
  where?: Maybe<AccountSubscriptionWhereInput>
}

export type SubscriptionMediaArgs = {
  where?: Maybe<MediaSubscriptionWhereInput>
}

export type SubscriptionPostArgs = {
  where?: Maybe<PostSubscriptionWhereInput>
}

export type SubscriptionPostMetadataArgs = {
  where?: Maybe<PostMetadataSubscriptionWhereInput>
}

export type SubscriptionSphereArgs = {
  where?: Maybe<SphereSubscriptionWhereInput>
}

export type SubscriptionSphereVerificationArgs = {
  where?: Maybe<SphereVerificationSubscriptionWhereInput>
}

export type SubscriptionSphereVerificationCodeArgs = {
  where?: Maybe<SphereVerificationCodeSubscriptionWhereInput>
}

export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>
}

export type User = {
  readonly id: Scalars['ID']
  readonly providerId: Scalars['String']
  readonly associatedWith: Account
}

export type UserConnection = {
  readonly pageInfo: PageInfo
  readonly edges: ReadonlyArray<Maybe<UserEdge>>
  readonly aggregate: AggregateUser
}

export type UserCreateInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly providerId: Scalars['String']
  readonly associatedWith: AccountCreateOneInput
}

export type UserEdge = {
  readonly node: User
  readonly cursor: Scalars['String']
}

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProviderIdAsc = 'providerId_ASC',
  ProviderIdDesc = 'providerId_DESC',
}

export type UserPreviousValues = {
  readonly id: Scalars['ID']
  readonly providerId: Scalars['String']
}

export type UserSubscriptionPayload = {
  readonly mutation: MutationType
  readonly node?: Maybe<User>
  readonly updatedFields?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly previousValues?: Maybe<UserPreviousValues>
}

export type UserSubscriptionWhereInput = {
  readonly mutation_in?: Maybe<ReadonlyArray<MutationType>>
  readonly updatedFields_contains?: Maybe<Scalars['String']>
  readonly updatedFields_contains_every?: Maybe<
    ReadonlyArray<Scalars['String']>
  >
  readonly updatedFields_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly node?: Maybe<UserWhereInput>
  readonly AND?: Maybe<ReadonlyArray<UserSubscriptionWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<UserSubscriptionWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<UserSubscriptionWhereInput>>
}

export type UserUpdateInput = {
  readonly providerId?: Maybe<Scalars['String']>
  readonly associatedWith?: Maybe<AccountUpdateOneRequiredInput>
}

export type UserUpdateManyMutationInput = {
  readonly providerId?: Maybe<Scalars['String']>
}

export type UserWhereInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly id_not?: Maybe<Scalars['ID']>
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>
  readonly id_lt?: Maybe<Scalars['ID']>
  readonly id_lte?: Maybe<Scalars['ID']>
  readonly id_gt?: Maybe<Scalars['ID']>
  readonly id_gte?: Maybe<Scalars['ID']>
  readonly id_contains?: Maybe<Scalars['ID']>
  readonly id_not_contains?: Maybe<Scalars['ID']>
  readonly id_starts_with?: Maybe<Scalars['ID']>
  readonly id_not_starts_with?: Maybe<Scalars['ID']>
  readonly id_ends_with?: Maybe<Scalars['ID']>
  readonly id_not_ends_with?: Maybe<Scalars['ID']>
  readonly providerId?: Maybe<Scalars['String']>
  readonly providerId_not?: Maybe<Scalars['String']>
  readonly providerId_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly providerId_not_in?: Maybe<ReadonlyArray<Scalars['String']>>
  readonly providerId_lt?: Maybe<Scalars['String']>
  readonly providerId_lte?: Maybe<Scalars['String']>
  readonly providerId_gt?: Maybe<Scalars['String']>
  readonly providerId_gte?: Maybe<Scalars['String']>
  readonly providerId_contains?: Maybe<Scalars['String']>
  readonly providerId_not_contains?: Maybe<Scalars['String']>
  readonly providerId_starts_with?: Maybe<Scalars['String']>
  readonly providerId_not_starts_with?: Maybe<Scalars['String']>
  readonly providerId_ends_with?: Maybe<Scalars['String']>
  readonly providerId_not_ends_with?: Maybe<Scalars['String']>
  readonly associatedWith?: Maybe<AccountWhereInput>
  readonly AND?: Maybe<ReadonlyArray<UserWhereInput>>
  readonly OR?: Maybe<ReadonlyArray<UserWhereInput>>
  readonly NOT?: Maybe<ReadonlyArray<UserWhereInput>>
}

export type UserWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>
  readonly providerId?: Maybe<Scalars['String']>
}

export enum VerifySphereError {
  UnknownCode = 'UNKNOWN_CODE',
  InvalidAccountAndCodePair = 'INVALID_ACCOUNT_AND_CODE_PAIR',
  AlreadyClaimed = 'ALREADY_CLAIMED',
}

export type VerifySphereInput = {
  readonly code: Scalars['String']
  readonly url: Scalars['String']
}

export type VerifySphereResponse = {
  readonly error?: Maybe<VerifySphereError>
}
