/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const ElevenLabsVoiceUpdateParams: core.serialization.ObjectSchema<
    serializers.ElevenLabsVoiceUpdateParams.Raw,
    Vocode.ElevenLabsVoiceUpdateParams
> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("..")).VoiceType),
    voiceId: core.serialization.property(
        "voice_id",
        core.serialization.lazy(async () => (await import("..")).ElevenLabsVoiceUpdateParamsVoiceId).optional()
    ),
    stability: core.serialization
        .lazy(async () => (await import("..")).ElevenLabsVoiceUpdateParamsStability)
        .optional(),
    similarityBoost: core.serialization.property(
        "similarity_boost",
        core.serialization.lazy(async () => (await import("..")).ElevenLabsVoiceUpdateParamsSimilarityBoost).optional()
    ),
    apiKey: core.serialization.property(
        "api_key",
        core.serialization.lazy(async () => (await import("..")).ElevenLabsVoiceUpdateParamsApiKey).optional()
    ),
});

export declare namespace ElevenLabsVoiceUpdateParams {
    interface Raw {
        type: serializers.VoiceType.Raw;
        voice_id?: serializers.ElevenLabsVoiceUpdateParamsVoiceId.Raw | null;
        stability?: serializers.ElevenLabsVoiceUpdateParamsStability.Raw | null;
        similarity_boost?: serializers.ElevenLabsVoiceUpdateParamsSimilarityBoost.Raw | null;
        api_key?: serializers.ElevenLabsVoiceUpdateParamsApiKey.Raw | null;
    }
}
