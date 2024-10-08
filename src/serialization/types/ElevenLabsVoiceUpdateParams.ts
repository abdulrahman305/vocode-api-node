/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { ElevenLabsVoiceUpdateParamsVoiceId } from "./ElevenLabsVoiceUpdateParamsVoiceId";
import { ElevenLabsVoiceUpdateParamsStability } from "./ElevenLabsVoiceUpdateParamsStability";
import { ElevenLabsVoiceUpdateParamsSimilarityBoost } from "./ElevenLabsVoiceUpdateParamsSimilarityBoost";
import { ElevenLabsVoiceUpdateParamsApiKey } from "./ElevenLabsVoiceUpdateParamsApiKey";
import { ElevenLabsVoiceUpdateParamsOptimizeStreamingLatency } from "./ElevenLabsVoiceUpdateParamsOptimizeStreamingLatency";
import { ElevenLabsVoiceUpdateParamsModelId } from "./ElevenLabsVoiceUpdateParamsModelId";
import { ElevenLabsVoiceUpdateParamsExperimentalInputStreaming } from "./ElevenLabsVoiceUpdateParamsExperimentalInputStreaming";

export const ElevenLabsVoiceUpdateParams: core.serialization.ObjectSchema<
    serializers.ElevenLabsVoiceUpdateParams.Raw,
    Vocode.ElevenLabsVoiceUpdateParams
> = core.serialization.object({
    type: core.serialization.stringLiteral("voice_eleven_labs"),
    voiceId: core.serialization.property("voice_id", ElevenLabsVoiceUpdateParamsVoiceId.optional()),
    stability: ElevenLabsVoiceUpdateParamsStability.optional(),
    similarityBoost: core.serialization.property(
        "similarity_boost",
        ElevenLabsVoiceUpdateParamsSimilarityBoost.optional()
    ),
    apiKey: core.serialization.property("api_key", ElevenLabsVoiceUpdateParamsApiKey.optional()),
    optimizeStreamingLatency: core.serialization.property(
        "optimize_streaming_latency",
        ElevenLabsVoiceUpdateParamsOptimizeStreamingLatency.optional()
    ),
    modelId: core.serialization.property("model_id", ElevenLabsVoiceUpdateParamsModelId.optional()),
    experimentalInputStreaming: core.serialization.property(
        "experimental_input_streaming",
        ElevenLabsVoiceUpdateParamsExperimentalInputStreaming.optional()
    ),
});

export declare namespace ElevenLabsVoiceUpdateParams {
    interface Raw {
        type: "voice_eleven_labs";
        voice_id?: ElevenLabsVoiceUpdateParamsVoiceId.Raw | null;
        stability?: ElevenLabsVoiceUpdateParamsStability.Raw | null;
        similarity_boost?: ElevenLabsVoiceUpdateParamsSimilarityBoost.Raw | null;
        api_key?: ElevenLabsVoiceUpdateParamsApiKey.Raw | null;
        optimize_streaming_latency?: ElevenLabsVoiceUpdateParamsOptimizeStreamingLatency.Raw | null;
        model_id?: ElevenLabsVoiceUpdateParamsModelId.Raw | null;
        experimental_input_streaming?: ElevenLabsVoiceUpdateParamsExperimentalInputStreaming.Raw | null;
    }
}
