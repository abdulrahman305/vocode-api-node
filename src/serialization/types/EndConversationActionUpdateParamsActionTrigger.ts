/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { EndConversationActionUpdateParamsActionTriggerZero } from "./EndConversationActionUpdateParamsActionTriggerZero";
import { Undefined } from "./Undefined";

export const EndConversationActionUpdateParamsActionTrigger: core.serialization.Schema<
    serializers.EndConversationActionUpdateParamsActionTrigger.Raw,
    Vocode.EndConversationActionUpdateParamsActionTrigger
> = core.serialization.undiscriminatedUnion([EndConversationActionUpdateParamsActionTriggerZero, Undefined]);

export declare namespace EndConversationActionUpdateParamsActionTrigger {
    type Raw = EndConversationActionUpdateParamsActionTriggerZero.Raw | Undefined.Raw;
}
