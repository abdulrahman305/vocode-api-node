/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { Undefined } from "./Undefined";

export const PlayHtVoiceUpdateParamsApiKey: core.serialization.Schema<
    serializers.PlayHtVoiceUpdateParamsApiKey.Raw,
    Vocode.PlayHtVoiceUpdateParamsApiKey
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Undefined]);

export declare namespace PlayHtVoiceUpdateParamsApiKey {
    type Raw = string | Undefined.Raw;
}
