"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
exports.getTestQuery = graphql_tag_1.default("query getTest {\n    test {\n        achievementId\n        progress\n    }\n}");
