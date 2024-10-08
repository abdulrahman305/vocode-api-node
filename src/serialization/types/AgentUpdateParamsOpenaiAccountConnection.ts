/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { OpenAiAccountConnection } from "./OpenAiAccountConnection";
import { Undefined } from "./Undefined";

export const AgentUpdateParamsOpenaiAccountConnection: core.serialization.Schema<
    serializers.AgentUpdateParamsOpenaiAccountConnection.Raw,
    Vocode.AgentUpdateParamsOpenaiAccountConnection
> = core.serialization.undiscriminatedUnion([OpenAiAccountConnection, core.serialization.string(), Undefined]);

export declare namespace AgentUpdateParamsOpenaiAccountConnection {
    type Raw = OpenAiAccountConnection.Raw | string | Undefined.Raw;
}
