/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const ElevenLabsVoiceUpdateParamsVoiceId: core.serialization.Schema<
    serializers.ElevenLabsVoiceUpdateParamsVoiceId.Raw,
    Vocode.ElevenLabsVoiceUpdateParamsVoiceId
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace ElevenLabsVoiceUpdateParamsVoiceId {
    type Raw = string | serializers.Undefined.Raw;
}
