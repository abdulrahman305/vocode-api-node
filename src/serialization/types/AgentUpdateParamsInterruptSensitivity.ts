/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { InterruptSensitivity } from "./InterruptSensitivity";
import { Undefined } from "./Undefined";

export const AgentUpdateParamsInterruptSensitivity: core.serialization.Schema<
    serializers.AgentUpdateParamsInterruptSensitivity.Raw,
    Vocode.AgentUpdateParamsInterruptSensitivity
> = core.serialization.undiscriminatedUnion([InterruptSensitivity, Undefined]);

export declare namespace AgentUpdateParamsInterruptSensitivity {
    type Raw = InterruptSensitivity.Raw | Undefined.Raw;
}
