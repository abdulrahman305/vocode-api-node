/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";

export const VonageTelephonyMetadata: core.serialization.ObjectSchema<
    serializers.VonageTelephonyMetadata.Raw,
    Vocode.VonageTelephonyMetadata
> = core.serialization.object({
    type: core.serialization.stringLiteral("telephony_metadata_vonage"),
});

export declare namespace VonageTelephonyMetadata {
    interface Raw {
        type: "telephony_metadata_vonage";
    }
}
