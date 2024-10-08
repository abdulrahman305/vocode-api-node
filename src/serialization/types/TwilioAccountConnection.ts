/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { TwilioCredentials } from "./TwilioCredentials";

export const TwilioAccountConnection: core.serialization.ObjectSchema<
    serializers.TwilioAccountConnection.Raw,
    Vocode.TwilioAccountConnection
> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    credentials: TwilioCredentials,
    type: core.serialization.stringLiteral("account_connection_twilio"),
    steeringPool: core.serialization.property(
        "steering_pool",
        core.serialization.list(core.serialization.string()).optional()
    ),
    accountSupportsAnyCallerId: core.serialization.property(
        "account_supports_any_caller_id",
        core.serialization.boolean().optional()
    ),
});

export declare namespace TwilioAccountConnection {
    interface Raw {
        id: string;
        user_id: string;
        credentials: TwilioCredentials.Raw;
        type: "account_connection_twilio";
        steering_pool?: string[] | null;
        account_supports_any_caller_id?: boolean | null;
    }
}
