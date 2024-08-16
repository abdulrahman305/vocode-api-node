/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { OpenAiAccountConnection } from "./OpenAiAccountConnection";

export const CreateCallAgentParamsOpenaiAccountConnection: core.serialization.Schema<
    serializers.CreateCallAgentParamsOpenaiAccountConnection.Raw,
    Vocode.CreateCallAgentParamsOpenaiAccountConnection
> = core.serialization.undiscriminatedUnion([OpenAiAccountConnection, core.serialization.string()]);

export declare namespace CreateCallAgentParamsOpenaiAccountConnection {
    type Raw = OpenAiAccountConnection.Raw | string;
}
