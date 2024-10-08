/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";

export const CallTelephonyProvider: core.serialization.Schema<
    serializers.CallTelephonyProvider.Raw,
    Vocode.CallTelephonyProvider
> = core.serialization.enum_(["vonage", "twilio"]);

export declare namespace CallTelephonyProvider {
    type Raw = "vonage" | "twilio";
}
