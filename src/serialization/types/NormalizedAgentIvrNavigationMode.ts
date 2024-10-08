/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";

export const NormalizedAgentIvrNavigationMode: core.serialization.Schema<
    serializers.NormalizedAgentIvrNavigationMode.Raw,
    Vocode.NormalizedAgentIvrNavigationMode
> = core.serialization.enum_(["default", "off"]);

export declare namespace NormalizedAgentIvrNavigationMode {
    type Raw = "default" | "off";
}
