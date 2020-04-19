import { DocumentNode } from 'graphql';
export declare namespace OpenPromoCodeMutation {
    interface Arguments {
        promoCodeId: string;
    }
    type openPromoCode = {} | null;
}
export interface OpenPromoCodeMutation {
    openPromoCode: OpenPromoCodeMutation.openPromoCode;
}
export declare const openPromoCodeMutation: DocumentNode;
