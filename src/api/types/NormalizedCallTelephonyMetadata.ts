/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export type NormalizedCallTelephonyMetadata =
    | Vocode.NormalizedCallTelephonyMetadata.TelephonyMetadataVonage
    | Vocode.NormalizedCallTelephonyMetadata.TelephonyMetadataTwilio;

export declare namespace NormalizedCallTelephonyMetadata {
    interface TelephonyMetadataVonage extends Vocode.VonageTelephonyMetadata {
        type: "telephony_metadata_vonage";
    }

    interface TelephonyMetadataTwilio extends Vocode.TwilioTelephonyMetadata {
        type: "telephony_metadata_twilio";
    }
}
