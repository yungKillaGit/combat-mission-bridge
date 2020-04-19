import { DocumentNode } from 'graphql';
import { AchievementEnum } from './schema';
export declare namespace ActivateCheckMutation {
    interface Arguments {
        check: string;
    }
    type activateCheck = {
        message: activateCheck.message;
        activated: activateCheck.activated;
        user: activateCheck.user;
        promoReceived: activateCheck.promoReceived;
    };
    namespace activateCheck {
        type message = string;
        type activated = boolean;
        type user = {
            achievementsReceived: user.achievementsReceived;
            achievementsProgress: user.achievementsProgress;
            activatedChecks: user.activatedChecks;
            avatarUrl: user.avatarUrl;
            id: user.id;
            promoCodes: user.promoCodes;
            profile: user.profile;
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
            type profile = {
                age: profile.age;
                about: profile.about;
                city: profile.city;
                clubId: profile.clubId;
                games: profile.games;
                playTime: profile.playTime;
                stage: profile.stage;
            } | null;
            namespace profile {
                type age = number;
                type about = string | null;
                type city = string;
                type clubId = number;
                type games = {
                    id: games.id;
                    title: games.title;
                }[];
                namespace games {
                    type id = number;
                    type title = string;
                }
                type playTime = number;
                type stage = {
                    id: stage.id;
                    title: stage.title;
                };
                namespace stage {
                    type id = number;
                    type title = string;
                }
            }
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
export interface ActivateCheckMutation {
    activateCheck: ActivateCheckMutation.activateCheck;
}
export declare const activateCheckMutation: DocumentNode;
