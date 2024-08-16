/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { AzureVoiceUpdateParamsVoiceName } from "./AzureVoiceUpdateParamsVoiceName";
import { AzureVoiceUpdateParamsPitch } from "./AzureVoiceUpdateParamsPitch";
import { AzureVoiceUpdateParamsRate } from "./AzureVoiceUpdateParamsRate";

export const AzureVoiceUpdateParams: core.serialization.ObjectSchema<
    serializers.AzureVoiceUpdateParams.Raw,
    Vocode.AzureVoiceUpdateParams
> = core.serialization.object({
    type: core.serialization.stringLiteral("voice_azure"),
    voiceName: core.serialization.property("voice_name", AzureVoiceUpdateParamsVoiceName.optional()),
    pitch: AzureVoiceUpdateParamsPitch.optional(),
    rate: AzureVoiceUpdateParamsRate.optional(),
});

export declare namespace AzureVoiceUpdateParams {
    interface Raw {
        type: "voice_azure";
        voice_name?: AzureVoiceUpdateParamsVoiceName.Raw | null;
        pitch?: AzureVoiceUpdateParamsPitch.Raw | null;
        rate?: AzureVoiceUpdateParamsRate.Raw | null;
    }
}
