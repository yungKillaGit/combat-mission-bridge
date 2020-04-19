import { DocumentNode } from 'graphql';
import { AchievementEnum } from './schema';
export declare namespace GetUserQuery {
    interface Arguments {
        id: number;
    }
    type user = {
        achievementsReceived: user.achievementsReceived;
        avatarUrl: user.avatarUrl;
        id: user.id;
        profile: user.profile;
        rank: user.rank;
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
        type avatarUrl = string | null;
        type id = number;
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
    }
}
export interface GetUserQuery {
    user: GetUserQuery.user;
}
export declare const getUserQuery: DocumentNode;
