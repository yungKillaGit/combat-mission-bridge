"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
exports.openPromoCodeMutation = graphql_tag_1.default("mutation openPromoCode($promoCodeId: String!) {\n    openPromoCode(promoCodeId: $promoCodeId) {\n        ... on UserOpenedPromoCode {\n            id\n            type\n            title\n            value\n            openedAt\n            expiresAt\n        }\n        ... on UserClosedPromoCode {\n            id\n            type\n            title\n            expiresAt\n        }\n    }\n}");
