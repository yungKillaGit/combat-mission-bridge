"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
exports.getAchievementForPostSharingMutation = graphql_tag_1.default("mutation getAchievementForPostSharing {\n    getAchievementForPostSharing {\n        user {\n            achievementsReceived {\n                id\n                iconImageUrl\n                title\n                description\n                points\n                rankPoints\n                storyImageUrls\n                snippetImageUrls\n            }\n            achievementsProgress {\n                achievementId\n                progress\n            }\n            activatedChecks\n            avatarUrl\n            id\n            promoCodes {\n                ... on UserOpenedPromoCode {\n                    id\n                    type\n                    title\n                    value\n                    openedAt\n                    expiresAt\n                }\n                ... on UserClosedPromoCode {\n                    id\n                    type\n                    title\n                    expiresAt\n                }\n            }\n            points\n            rank {\n                name\n                minPoints\n                imageUrl\n            }\n            lastFixedVisitDate\n            nextRank {\n                name\n                minPoints\n                imageUrl\n            }\n            visitsInRow\n        }\n        promoReceived\n    }\n}");
