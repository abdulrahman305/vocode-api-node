/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const CallHumanDetectionResult: core.serialization.Schema<
    serializers.CallHumanDetectionResult.Raw,
    Vocode.CallHumanDetectionResult
> = core.serialization.enum_(["human", "no_human"]);

export declare namespace CallHumanDetectionResult {
    type Raw = "human" | "no_human";
}
