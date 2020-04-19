"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
exports.joinTargetUserMutation = graphql_tag_1.default("mutation joinTargetUser($targetUserId: Int!) {\n    joinTargetUser(targetUserId: $targetUserId) {\n        _id\n        users {\n            id\n            avatarUrl\n        }\n    }\n}");
