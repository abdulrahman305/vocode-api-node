/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const ElevenLabsVoice: core.serialization.ObjectSchema<serializers.ElevenLabsVoice.Raw, Vocode.ElevenLabsVoice> =
    core.serialization.object({
        id: core.serialization.string(),
        userId: core.serialization.property("user_id", core.serialization.string()),
        voiceId: core.serialization.property("voice_id", core.serialization.string()),
        stability: core.serialization.number().optional(),
        similarityBoost: core.serialization.property("similarity_boost", core.serialization.number().optional()),
        apiKey: core.serialization.property("api_key", core.serialization.string().optional()),
        optimizeStreamingLatency: core.serialization.property(
            "optimize_streaming_latency",
            core.serialization.number().optional()
        ),
        modelId: core.serialization.property("model_id", core.serialization.string().optional()),
    });

export declare namespace ElevenLabsVoice {
    interface Raw {
        id: string;
        user_id: string;
        voice_id: string;
        stability?: number | null;
        similarity_boost?: number | null;
        api_key?: string | null;
        optimize_streaming_latency?: number | null;
        model_id?: string | null;
    }
}
