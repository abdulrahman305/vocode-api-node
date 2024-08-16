/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { WebhookUpdateParams } from "./WebhookUpdateParams";
import { Undefined } from "./Undefined";

export const AgentUpdateParamsWebhook: core.serialization.Schema<
    serializers.AgentUpdateParamsWebhook.Raw,
    Vocode.AgentUpdateParamsWebhook
> = core.serialization.undiscriminatedUnion([core.serialization.string(), WebhookUpdateParams, Undefined]);

export declare namespace AgentUpdateParamsWebhook {
    type Raw = string | WebhookUpdateParams.Raw | Undefined.Raw;
}
