"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
exports.getProfileMetaQuery = graphql_tag_1.default("query getProfileMeta {\n    profileMeta {\n        games {\n            id\n            title\n        }\n        stages {\n            id\n            title\n        }\n    }\n}");
