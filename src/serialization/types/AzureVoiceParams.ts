/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AzureVoiceParams: core.serialization.ObjectSchema<
    serializers.AzureVoiceParams.Raw,
    Vocode.AzureVoiceParams
> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("..")).VoiceType),
    voiceName: core.serialization.property("voice_name", core.serialization.string()),
    pitch: core.serialization.number().optional(),
    rate: core.serialization.number().optional(),
});

export declare namespace AzureVoiceParams {
    interface Raw {
        type: serializers.VoiceType.Raw;
        voice_name: string;
        pitch?: number | null;
        rate?: number | null;
    }
}
