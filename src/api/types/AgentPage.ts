/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "../index";

export interface AgentPage {
    items: Vocode.NormalizedAgent[];
    page: number;
    size: number;
    hasMore: boolean;
    total: number;
    totalIsEstimated: boolean;
}
