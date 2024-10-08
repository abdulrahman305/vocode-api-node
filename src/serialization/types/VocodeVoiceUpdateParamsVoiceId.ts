/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { Undefined } from "./Undefined";

export const VocodeVoiceUpdateParamsVoiceId: core.serialization.Schema<
    serializers.VocodeVoiceUpdateParamsVoiceId.Raw,
    Vocode.VocodeVoiceUpdateParamsVoiceId
> = core.serialization.undiscriminatedUnion([core.serialization.stringLiteral("joe"), Undefined]);

export declare namespace VocodeVoiceUpdateParamsVoiceId {
    type Raw = "joe" | Undefined.Raw;
}
