import { DocumentNode } from 'graphql';
import { anything } from './schema';
export declare namespace GetUserTeamQuery {
    interface Arguments {
    }
    type userTeam = {
        _id: userTeam._id;
        users: userTeam.users;
    } | null;
    namespace userTeam {
        type _id = anything;
        type users = {
            id: users.id;
            avatarUrl: users.avatarUrl;
        }[];
        namespace users {
            type id = number;
            type avatarUrl = string | null;
        }
    }
}
export interface GetUserTeamQuery {
    userTeam: GetUserTeamQuery.userTeam;
}
export declare const getUserTeamQuery: DocumentNode;
