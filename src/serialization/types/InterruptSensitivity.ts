/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";

export const InterruptSensitivity: core.serialization.Schema<
    serializers.InterruptSensitivity.Raw,
    Vocode.InterruptSensitivity
> = core.serialization.enum_(["low", "high"]);

export declare namespace InterruptSensitivity {
    type Raw = "low" | "high";
}
