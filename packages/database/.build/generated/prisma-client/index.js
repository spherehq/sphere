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
        name: "MEDIA_TYPE",
        embedded: false
    },
    {
        name: "Media",
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
        name: "SphereVerificationCodeStatus",
        embedded: false
    },
    {
        name: "SphereVerificationStatus",
        embedded: false
    },
    {
        name: "SphereVerificationCode",
        embedded: false
    },
    {
        name: "SphereVerification",
        embedded: false
    },
    {
        name: "Sphere",
        embedded: false
    },
    {
        name: "User",
        embedded: false
    }
];
exports.Prisma = prisma_client_lib_1.makePrismaClientClass({
    typeDefs: prisma_schema_1.typeDefs,
    models: exports.models,
    endpoint: "http://localhost:4466/sphere/dev"
});
exports.prisma = new exports.Prisma();