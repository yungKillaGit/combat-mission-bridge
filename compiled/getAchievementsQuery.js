"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
exports.getAchievementsQuery = graphql_tag_1.default("query getAchievements {\n    achievements {\n        id\n        iconImageUrl\n        title\n        description\n        points\n        rankPoints\n        storyImageUrls\n        snippetImageUrls\n    }\n}");
