/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { Undefined } from "./Undefined";

export const AgentUpdateParamsAskIfHumanPresentOnIdle: core.serialization.Schema<
    serializers.AgentUpdateParamsAskIfHumanPresentOnIdle.Raw,
    Vocode.AgentUpdateParamsAskIfHumanPresentOnIdle
> = core.serialization.undiscriminatedUnion([core.serialization.boolean(), Undefined]);

export declare namespace AgentUpdateParamsAskIfHumanPresentOnIdle {
    type Raw = boolean | Undefined.Raw;
}
