/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export interface WebhookPage {
    items: Vocode.Webhook[];
    page: number;
    size: number;
    hasMore: boolean;
    total: number;
    totalIsEstimated: boolean;
}
