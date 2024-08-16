/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { FunctionCallActionTrigger } from "./FunctionCallActionTrigger";
import { PhraseBasedActionTriggerInput } from "./PhraseBasedActionTriggerInput";

export const SetHoldActionUpdateParamsActionTriggerZero: core.serialization.Schema<
    serializers.SetHoldActionUpdateParamsActionTriggerZero.Raw,
    Vocode.SetHoldActionUpdateParamsActionTriggerZero
> = core.serialization.undiscriminatedUnion([FunctionCallActionTrigger, PhraseBasedActionTriggerInput]);

export declare namespace SetHoldActionUpdateParamsActionTriggerZero {
    type Raw = FunctionCallActionTrigger.Raw | PhraseBasedActionTriggerInput.Raw;
}
