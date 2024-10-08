/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";

export const InternalLlmFallbackProvider: core.serialization.Schema<
    serializers.InternalLlmFallbackProvider.Raw,
    Vocode.InternalLlmFallbackProvider
> = core.serialization.enum_(["openai", "azure"]);

export declare namespace InternalLlmFallbackProvider {
    type Raw = "openai" | "azure";
}
