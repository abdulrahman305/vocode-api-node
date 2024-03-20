/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const PlayHtVoiceUpdateParamsTextGuidance: core.serialization.Schema<
    serializers.PlayHtVoiceUpdateParamsTextGuidance.Raw,
    Vocode.PlayHtVoiceUpdateParamsTextGuidance
> = core.serialization.undiscriminatedUnion([
    core.serialization.number(),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace PlayHtVoiceUpdateParamsTextGuidance {
    type Raw = number | serializers.Undefined.Raw;
}
