/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "../index";

export interface WebhookParams {
    subscriptions: Vocode.EventType[];
    url: string;
    method?: Vocode.HttpMethod;
}
