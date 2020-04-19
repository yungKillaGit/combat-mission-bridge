import { DocumentNode } from 'graphql';
import { AchievementEnum } from './schema';
export declare namespace GetAchievementsQuery {
    interface Arguments {
    }
    type achievements = {
        id: achievements.id;
        iconImageUrl: achievements.iconImageUrl;
        title: achievements.title;
        description: achievements.description;
        points: achievements.points;
        rankPoints: achievements.rankPoints;
        storyImageUrls: achievements.storyImageUrls;
        snippetImageUrls: achievements.snippetImageUrls;
    }[];
    namespace achievements {
        type id = AchievementEnum;
        type iconImageUrl = string;
        type title = string;
        type description = string;
        type points = number[] | null;
        type rankPoints = number[] | null;
        type storyImageUrls = string[];
        type snippetImageUrls = string[];
    }
}
export interface GetAchievementsQuery {
    achievements: GetAchievementsQuery.achievements;
}
export declare const getAchievementsQuery: DocumentNode;
