"use strict";
exports.__esModule = true;
var prisma_client_lib_1 = require("prisma-client-lib");
var prisma_schema_1 = require("./prisma-schema");
exports.models = [
    {
        name: "POST_STATUS",
        embedded: false
    },
    {
        name: "Post",
        embedded: false
    },
    {
        name: "Image",
        embedded: false
    },
    {
        name: "PostMetadata",
        embedded: false
    },
    {
        name: "AccountStatus",
        embedded: false
    },
    {
        name: "Account",
        embedded: false
    },
    {
        name: "Sphere",
        embedded: false
    }
];
exports.Prisma = prisma_client_lib_1.makePrismaClientClass({
    typeDefs: prisma_schema_1.typeDefs,
    models: exports.models,
    endpoint: "https://spherehq-production_jason-brown.prisma.sh/sphere/production"
});
exports.prisma = new exports.Prisma();
