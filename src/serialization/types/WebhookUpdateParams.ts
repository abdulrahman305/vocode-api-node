/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { WebhookUpdateParamsSubscriptions } from "./WebhookUpdateParamsSubscriptions";
import { WebhookUpdateParamsUrl } from "./WebhookUpdateParamsUrl";
import { WebhookUpdateParamsMethod } from "./WebhookUpdateParamsMethod";

export const WebhookUpdateParams: core.serialization.ObjectSchema<
    serializers.WebhookUpdateParams.Raw,
    Vocode.WebhookUpdateParams
> = core.serialization.object({
    subscriptions: WebhookUpdateParamsSubscriptions.optional(),
    url: WebhookUpdateParamsUrl.optional(),
    method: WebhookUpdateParamsMethod.optional(),
});

export declare namespace WebhookUpdateParams {
    interface Raw {
        subscriptions?: WebhookUpdateParamsSubscriptions.Raw | null;
        url?: WebhookUpdateParamsUrl.Raw | null;
        method?: WebhookUpdateParamsMethod.Raw | null;
    }
}
