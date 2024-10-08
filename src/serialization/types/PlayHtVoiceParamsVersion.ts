/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";

export const PlayHtVoiceParamsVersion: core.serialization.Schema<
    serializers.PlayHtVoiceParamsVersion.Raw,
    Vocode.PlayHtVoiceParamsVersion
> = core.serialization.enum_(["1", "2"]);

export declare namespace PlayHtVoiceParamsVersion {
    type Raw = "1" | "2";
}
