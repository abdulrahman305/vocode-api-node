/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export interface VectorDatabasePage {
    items: Vocode.PineconeVectorDatabase[];
    page: number;
    size: number;
    hasMore: boolean;
    total: number;
    totalIsEstimated: boolean;
}
