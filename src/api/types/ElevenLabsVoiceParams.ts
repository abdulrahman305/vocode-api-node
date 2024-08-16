/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ElevenLabsVoiceParams {
    type: "voice_eleven_labs";
    voiceId: string;
    stability?: number;
    similarityBoost?: number;
    apiKey?: string;
    optimizeStreamingLatency?: number;
    modelId?: string;
    experimentalInputStreaming?: boolean;
}
