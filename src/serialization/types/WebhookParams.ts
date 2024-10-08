/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { EventType } from "./EventType";
import { HttpMethod } from "./HttpMethod";

export const WebhookParams: core.serialization.ObjectSchema<serializers.WebhookParams.Raw, Vocode.WebhookParams> =
    core.serialization.object({
        subscriptions: core.serialization.list(EventType),
        url: core.serialization.string(),
        method: HttpMethod.optional(),
    });

export declare namespace WebhookParams {
    interface Raw {
        subscriptions: EventType.Raw[];
        url: string;
        method?: HttpMethod.Raw | null;
    }
}
