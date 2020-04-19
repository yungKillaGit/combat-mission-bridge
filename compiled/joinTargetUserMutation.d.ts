import { DocumentNode } from 'graphql';
import { anything } from './schema';
export declare namespace JoinTargetUserMutation {
    interface Arguments {
        targetUserId: number;
    }
    type joinTargetUser = {
        _id: joinTargetUser._id;
        users: joinTargetUser.users;
    };
    namespace joinTargetUser {
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
export interface JoinTargetUserMutation {
    joinTargetUser: JoinTargetUserMutation.joinTargetUser;
}
export declare const joinTargetUserMutation: DocumentNode;
