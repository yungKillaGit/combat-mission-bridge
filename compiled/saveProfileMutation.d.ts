import { DocumentNode } from 'graphql';
import { ProfileInput } from './schema';
export declare namespace SaveProfileMutation {
    interface Arguments {
        profile: ProfileInput;
    }
    type saveProfile = {
        age: saveProfile.age;
        about: saveProfile.about;
        city: saveProfile.city;
        clubId: saveProfile.clubId;
        games: saveProfile.games;
        playTime: saveProfile.playTime;
        stage: saveProfile.stage;
    } | null;
    namespace saveProfile {
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
}
export interface SaveProfileMutation {
    saveProfile: SaveProfileMutation.saveProfile;
}
export declare const saveProfileMutation: DocumentNode;
