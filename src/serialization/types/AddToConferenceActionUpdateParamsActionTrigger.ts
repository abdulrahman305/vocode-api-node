/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { AddToConferenceActionUpdateParamsActionTriggerZero } from "./AddToConferenceActionUpdateParamsActionTriggerZero";
import { Undefined } from "./Undefined";

export const AddToConferenceActionUpdateParamsActionTrigger: core.serialization.Schema<
    serializers.AddToConferenceActionUpdateParamsActionTrigger.Raw,
    Vocode.AddToConferenceActionUpdateParamsActionTrigger
> = core.serialization.undiscriminatedUnion([AddToConferenceActionUpdateParamsActionTriggerZero, Undefined]);

export declare namespace AddToConferenceActionUpdateParamsActionTrigger {
    type Raw = AddToConferenceActionUpdateParamsActionTriggerZero.Raw | Undefined.Raw;
}
