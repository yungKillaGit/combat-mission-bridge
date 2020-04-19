"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
exports.getUserTeamQuery = graphql_tag_1.default("query getUserTeam {\n    userTeam {\n        _id\n        users {\n            id\n            avatarUrl\n        }\n    }\n}");
