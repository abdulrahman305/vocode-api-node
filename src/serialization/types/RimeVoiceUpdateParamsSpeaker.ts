/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { Undefined } from "./Undefined";

export const RimeVoiceUpdateParamsSpeaker: core.serialization.Schema<
    serializers.RimeVoiceUpdateParamsSpeaker.Raw,
    Vocode.RimeVoiceUpdateParamsSpeaker
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Undefined]);

export declare namespace RimeVoiceUpdateParamsSpeaker {
    type Raw = string | Undefined.Raw;
}
