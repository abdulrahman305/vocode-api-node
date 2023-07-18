/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AgentUpdateParamsPrompt: core.serialization.Schema<
    serializers.AgentUpdateParamsPrompt.Raw,
    Vocode.AgentUpdateParamsPrompt
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace AgentUpdateParamsPrompt {
    type Raw = string | serializers.Undefined.Raw;
}
