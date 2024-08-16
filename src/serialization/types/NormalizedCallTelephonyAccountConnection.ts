/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { TwilioAccountConnection } from "./TwilioAccountConnection";

export const NormalizedCallTelephonyAccountConnection: core.serialization.Schema<
    serializers.NormalizedCallTelephonyAccountConnection.Raw,
    Vocode.NormalizedCallTelephonyAccountConnection
> = core.serialization.undiscriminatedUnion([core.serialization.string(), TwilioAccountConnection]);

export declare namespace NormalizedCallTelephonyAccountConnection {
    type Raw = string | TwilioAccountConnection.Raw;
}
