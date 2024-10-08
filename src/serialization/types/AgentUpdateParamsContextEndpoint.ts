/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { Undefined } from "./Undefined";

export const AgentUpdateParamsContextEndpoint: core.serialization.Schema<
    serializers.AgentUpdateParamsContextEndpoint.Raw,
    Vocode.AgentUpdateParamsContextEndpoint
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Undefined]);

export declare namespace AgentUpdateParamsContextEndpoint {
    type Raw = string | Undefined.Raw;
}
