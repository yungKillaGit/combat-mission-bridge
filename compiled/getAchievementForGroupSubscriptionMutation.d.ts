import { DocumentNode } from 'graphql';
import { AchievementEnum } from './schema';
export declare namespace GetAchievementForGroupSubscriptionMutation {
    interface Arguments {
    }
    type getAchievementForGroupSubscription = {
        user: getAchievementForGroupSubscription.user;
        promoReceived: getAchievementForGroupSubscription.promoReceived;
    };
    namespace getAchievementForGroupSubscription {
        type user = {
            achievementsReceived: user.achievementsReceived;
            achievementsProgress: user.achievementsProgress;
            activatedChecks: user.activatedChecks;
            avatarUrl: user.avatarUrl;
            id: user.id;
            promoCodes: user.promoCodes;
            points: user.points;
            rank: user.rank;
            lastFixedVisitDate: user.lastFixedVisitDate;
            nextRank: user.nextRank;
            visitsInRow: user.visitsInRow;
        } | null;
        namespace user {
            type achievementsReceived = {
                id: achievementsReceived.id;
                iconImageUrl: achievementsReceived.iconImageUrl;
                title: achievementsReceived.title;
                description: achievementsReceived.description;
                points: achievementsReceived.points;
                rankPoints: achievementsReceived.rankPoints;
                storyImageUrls: achievementsReceived.storyImageUrls;
                snippetImageUrls: achievementsReceived.snippetImageUrls;
            }[];
            namespace achievementsReceived {
                type id = AchievementEnum;
                type iconImageUrl = string;
                type title = string;
                type description = string;
                type points = number[] | null;
                type rankPoints = number[] | null;
                type storyImageUrls = string[];
                type snippetImageUrls = string[];
            }
            type achievementsProgress = {
                achievementId: achievementsProgress.achievementId;
                progress: achievementsProgress.progress;
            }[];
            namespace achievementsProgress {
                type achievementId = AchievementEnum;
                type progress = number | null;
            }
            type activatedChecks = string[];
            type avatarUrl = string | null;
            type id = number;
            type promoCodes = {}[];
            type points = number;
            type rank = {
                name: rank.name;
                minPoints: rank.minPoints;
                imageUrl: rank.imageUrl;
            } | null;
            namespace rank {
                type name = string;
                type minPoints = number;
                type imageUrl = string;
            }
            type lastFixedVisitDate = number;
            type nextRank = {
                name: nextRank.name;
                minPoints: nextRank.minPoints;
                imageUrl: nextRank.imageUrl;
            } | null;
            namespace nextRank {
                type name = string;
                type minPoints = number;
                type imageUrl = string;
            }
            type visitsInRow = number;
        }
        type promoReceived = boolean;
    }
}
export interface GetAchievementForGroupSubscriptionMutation {
    getAchievementForGroupSubscription: GetAchievementForGroupSubscriptionMutation.getAchievementForGroupSubscription;
}
export declare const getAchievementForGroupSubscriptionMutation: DocumentNode;
