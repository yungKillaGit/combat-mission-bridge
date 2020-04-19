import { DocumentNode } from 'graphql';
export declare namespace GetProfileMetaQuery {
    interface Arguments {
    }
    type profileMeta = {
        games: profileMeta.games;
        stages: profileMeta.stages;
    };
    namespace profileMeta {
        type games = {
            id: games.id;
            title: games.title;
        }[];
        namespace games {
            type id = number;
            type title = string;
        }
        type stages = {
            id: stages.id;
            title: stages.title;
        }[];
        namespace stages {
            type id = number;
            type title = string;
        }
    }
}
export interface GetProfileMetaQuery {
    profileMeta: GetProfileMetaQuery.profileMeta;
}
export declare const getProfileMetaQuery: DocumentNode;
