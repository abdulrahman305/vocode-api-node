/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { OpenAiCredentials } from "./OpenAiCredentials";

export const OpenAiAccountConnection: core.serialization.ObjectSchema<
    serializers.OpenAiAccountConnection.Raw,
    Vocode.OpenAiAccountConnection
> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    credentials: OpenAiCredentials,
    type: core.serialization.stringLiteral("account_connection_openai"),
});

export declare namespace OpenAiAccountConnection {
    interface Raw {
        id: string;
        user_id: string;
        credentials: OpenAiCredentials.Raw;
        type: "account_connection_openai";
    }
}
