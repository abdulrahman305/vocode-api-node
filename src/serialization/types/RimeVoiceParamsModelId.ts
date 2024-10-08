/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { Undefined } from "./Undefined";

export const RimeVoiceParamsModelId: core.serialization.Schema<
    serializers.RimeVoiceParamsModelId.Raw,
    Vocode.RimeVoiceParamsModelId
> = core.serialization.undiscriminatedUnion([
    core.serialization.stringLiteral("mist"),
    core.serialization.stringLiteral("v1"),
    Undefined,
]);

export declare namespace RimeVoiceParamsModelId {
    type Raw = "mist" | "v1" | Undefined.Raw;
}
