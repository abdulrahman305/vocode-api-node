/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { FunctionCallActionTrigger } from "./FunctionCallActionTrigger";
import { PhraseBasedActionTriggerOutput } from "./PhraseBasedActionTriggerOutput";

export const AddToConferenceActionActionTrigger: core.serialization.Schema<
    serializers.AddToConferenceActionActionTrigger.Raw,
    Vocode.AddToConferenceActionActionTrigger
> = core.serialization.undiscriminatedUnion([FunctionCallActionTrigger, PhraseBasedActionTriggerOutput]);

export declare namespace AddToConferenceActionActionTrigger {
    type Raw = FunctionCallActionTrigger.Raw | PhraseBasedActionTriggerOutput.Raw;
}
