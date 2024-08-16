/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { Undefined } from "./Undefined";

export const RimeVoiceUpdateParamsSpeedAlpha: core.serialization.Schema<
    serializers.RimeVoiceUpdateParamsSpeedAlpha.Raw,
    Vocode.RimeVoiceUpdateParamsSpeedAlpha
> = core.serialization.undiscriminatedUnion([core.serialization.number(), Undefined]);

export declare namespace RimeVoiceUpdateParamsSpeedAlpha {
    type Raw = number | Undefined.Raw;
}
