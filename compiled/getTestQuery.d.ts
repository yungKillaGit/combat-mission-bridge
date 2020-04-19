import { DocumentNode } from 'graphql';
import { Achievement } from './schema';
export declare namespace GetTestQuery {
    interface Arguments {
    }
    type test = {
        achievementId: test.achievementId;
        progress: test.progress;
    }[] | null;
    namespace test {
        type achievementId = Achievement;
        type progress = number | null;
    }
}
export interface GetTestQuery {
    test: GetTestQuery.test;
}
export declare const getTestQuery: DocumentNode;
