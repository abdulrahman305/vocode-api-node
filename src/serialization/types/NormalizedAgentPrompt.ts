/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { PromptParams } from "./PromptParams";

export const NormalizedAgentPrompt: core.serialization.Schema<
    serializers.NormalizedAgentPrompt.Raw,
    Vocode.NormalizedAgentPrompt
> = core.serialization.undiscriminatedUnion([core.serialization.string(), PromptParams]);

export declare namespace NormalizedAgentPrompt {
    type Raw = string | PromptParams.Raw;
}
