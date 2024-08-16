/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "../index";

export interface PlayHtVoiceUpdateParams {
    type: "voice_play_ht";
    voiceId?: Vocode.PlayHtVoiceUpdateParamsVoiceId;
    apiUserId?: Vocode.PlayHtVoiceUpdateParamsApiUserId;
    apiKey?: Vocode.PlayHtVoiceUpdateParamsApiKey;
    version?: Vocode.PlayHtVoiceUpdateParamsVersion;
    speed?: Vocode.PlayHtVoiceUpdateParamsSpeed;
    quality?: Vocode.PlayHtVoiceUpdateParamsQuality;
    temperature?: Vocode.PlayHtVoiceUpdateParamsTemperature;
    topP?: Vocode.PlayHtVoiceUpdateParamsTopP;
    textGuidance?: Vocode.PlayHtVoiceUpdateParamsTextGuidance;
    voiceGuidance?: Vocode.PlayHtVoiceUpdateParamsVoiceGuidance;
    experimentalRemoveSilence?: Vocode.PlayHtVoiceUpdateParamsExperimentalRemoveSilence;
}
