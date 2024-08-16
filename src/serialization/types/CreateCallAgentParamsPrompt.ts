/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { PromptParams } from "./PromptParams";

export const CreateCallAgentParamsPrompt: core.serialization.Schema<
    serializers.CreateCallAgentParamsPrompt.Raw,
    Vocode.CreateCallAgentParamsPrompt
> = core.serialization.undiscriminatedUnion([core.serialization.string(), PromptParams]);

export declare namespace CreateCallAgentParamsPrompt {
    type Raw = string | PromptParams.Raw;
}
