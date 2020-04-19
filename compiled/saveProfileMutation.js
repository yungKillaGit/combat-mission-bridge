"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
exports.saveProfileMutation = graphql_tag_1.default("mutation saveProfile($profile: ProfileInput!) {\n    saveProfile(profile: $profile) {\n        age\n        about\n        city\n        clubId\n        games {\n            id\n            title\n        }\n        playTime\n        stage {\n            id\n            title\n        }\n    }\n}");
