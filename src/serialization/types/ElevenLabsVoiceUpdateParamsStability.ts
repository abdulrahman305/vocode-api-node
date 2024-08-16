/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { Undefined } from "./Undefined";

export const ElevenLabsVoiceUpdateParamsStability: core.serialization.Schema<
    serializers.ElevenLabsVoiceUpdateParamsStability.Raw,
    Vocode.ElevenLabsVoiceUpdateParamsStability
> = core.serialization.undiscriminatedUnion([core.serialization.number(), Undefined]);

export declare namespace ElevenLabsVoiceUpdateParamsStability {
    type Raw = number | Undefined.Raw;
}
