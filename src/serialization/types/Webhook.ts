/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { EventType } from "./EventType";
import { HttpMethod } from "./HttpMethod";

export const Webhook: core.serialization.ObjectSchema<serializers.Webhook.Raw, Vocode.Webhook> =
    core.serialization.object({
        id: core.serialization.string(),
        userId: core.serialization.property("user_id", core.serialization.string()),
        subscriptions: core.serialization.list(EventType),
        url: core.serialization.string(),
        method: HttpMethod.optional(),
    });

export declare namespace Webhook {
    interface Raw {
        id: string;
        user_id: string;
        subscriptions: EventType.Raw[];
        url: string;
        method?: HttpMethod.Raw | null;
    }
}
