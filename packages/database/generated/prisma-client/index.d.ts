import { DocumentNode } from "graphql";
import { BaseClientOptions, Model } from "prisma-client-lib";
export declare type AtLeastOne<T, U = {
    [K in keyof T]: Pick<T, K>;
}> = Partial<T> & U[keyof U];
export interface Exists {
    post: (where?: PostWhereInput) => Promise<boolean>;
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
    node: (args: {
        id: ID_Output;
    }) => Node;
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
    $subscribe: Subscription;
}
export interface Subscription {
    post: (where?: PostSubscriptionWhereInput) => PostSubscriptionPayloadSubscription;
}
export interface ClientConstructor<T> {
    new (options?: BaseClientOptions): T;
}
export declare type PostOrderByInput = "id_ASC" | "id_DESC" | "title_ASC" | "title_DESC" | "content_ASC" | "content_DESC" | "timeToRead_ASC" | "timeToRead_DESC" | "isPublished_ASC" | "isPublished_DESC" | "publishedAt_ASC" | "publishedAt_DESC" | "createdAt_ASC" | "createdAt_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "status_ASC" | "status_DESC" | "fileHash_ASC" | "fileHash_DESC";
export declare type POST_STATUS = "PUBLISHED" | "DRAFT" | "ARCHIVED" | "SYNCING";
export declare type MutationType = "CREATED" | "UPDATED" | "DELETED";
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
    AND?: PostWhereInput[] | PostWhereInput;
    OR?: PostWhereInput[] | PostWhereInput;
    NOT?: PostWhereInput[] | PostWhereInput;
}
export interface PostCreateInput {
    title: String;
    content: Json;
    timeToRead?: Int;
    isPublished?: Boolean;
    publishedAt?: DateTimeInput;
    status?: POST_STATUS;
    fileHash: String;
}
export interface PostUpdateInput {
    title?: String;
    content?: Json;
    timeToRead?: Int;
    isPublished?: Boolean;
    publishedAt?: DateTimeInput;
    status?: POST_STATUS;
    fileHash?: String;
}
export interface PostUpdateManyMutationInput {
    title?: String;
    content?: Json;
    timeToRead?: Int;
    isPublished?: Boolean;
    publishedAt?: DateTimeInput;
    status?: POST_STATUS;
    fileHash?: String;
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
export declare type PostWhereUniqueInput = AtLeastOne<{
    id: ID_Input;
}>;
export interface NodeNode {
    id: ID_Output;
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
export interface PostPreviousValues {
    id: ID_Output;
    title: String;
    content: Json;
    timeToRead: Int;
    isPublished: Boolean;
    publishedAt?: DateTimeOutput;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
    status: POST_STATUS;
    fileHash: String;
}
export interface PostPreviousValuesPromise extends Promise<PostPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    title: () => Promise<String>;
    content: () => Promise<Json>;
    timeToRead: () => Promise<Int>;
    isPublished: () => Promise<Boolean>;
    publishedAt: () => Promise<DateTimeOutput>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    status: () => Promise<POST_STATUS>;
    fileHash: () => Promise<String>;
}
export interface PostPreviousValuesSubscription extends Promise<AsyncIterator<PostPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    title: () => Promise<AsyncIterator<String>>;
    content: () => Promise<AsyncIterator<Json>>;
    timeToRead: () => Promise<AsyncIterator<Int>>;
    isPublished: () => Promise<AsyncIterator<Boolean>>;
    publishedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    status: () => Promise<AsyncIterator<POST_STATUS>>;
    fileHash: () => Promise<AsyncIterator<String>>;
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
export interface BatchPayload {
    count: Long;
}
export interface BatchPayloadPromise extends Promise<BatchPayload>, Fragmentable {
    count: () => Promise<Long>;
}
export interface BatchPayloadSubscription extends Promise<AsyncIterator<BatchPayload>>, Fragmentable {
    count: () => Promise<AsyncIterator<Long>>;
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
export interface Post {
    id: ID_Output;
    title: String;
    content: Json;
    timeToRead: Int;
    isPublished: Boolean;
    publishedAt?: DateTimeOutput;
    createdAt: DateTimeOutput;
    updatedAt: DateTimeOutput;
    status: POST_STATUS;
    fileHash: String;
}
export interface PostPromise extends Promise<Post>, Fragmentable {
    id: () => Promise<ID_Output>;
    title: () => Promise<String>;
    content: () => Promise<Json>;
    timeToRead: () => Promise<Int>;
    isPublished: () => Promise<Boolean>;
    publishedAt: () => Promise<DateTimeOutput>;
    createdAt: () => Promise<DateTimeOutput>;
    updatedAt: () => Promise<DateTimeOutput>;
    status: () => Promise<POST_STATUS>;
    fileHash: () => Promise<String>;
}
export interface PostSubscription extends Promise<AsyncIterator<Post>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    title: () => Promise<AsyncIterator<String>>;
    content: () => Promise<AsyncIterator<Json>>;
    timeToRead: () => Promise<AsyncIterator<Int>>;
    isPublished: () => Promise<AsyncIterator<Boolean>>;
    publishedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
    status: () => Promise<AsyncIterator<POST_STATUS>>;
    fileHash: () => Promise<AsyncIterator<String>>;
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
export declare type Json = any;
export declare type String = string;
export declare type Long = string;
export declare type ID_Input = string | number;
export declare type ID_Output = string;
export declare type Int = number;
export declare type Boolean = boolean;
export declare type DateTimeInput = Date | string;
export declare type DateTimeOutput = string;
export declare const models: Model[];
export declare const Prisma: ClientConstructor<Prisma>;
export declare const prisma: Prisma;
