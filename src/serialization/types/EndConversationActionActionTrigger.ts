/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { FunctionCallActionTrigger } from "./FunctionCallActionTrigger";
import { PhraseBasedActionTriggerOutput } from "./PhraseBasedActionTriggerOutput";

export const EndConversationActionActionTrigger: core.serialization.Schema<
    serializers.EndConversationActionActionTrigger.Raw,
    Vocode.EndConversationActionActionTrigger
> = core.serialization.undiscriminatedUnion([FunctionCallActionTrigger, PhraseBasedActionTriggerOutput]);

export declare namespace EndConversationActionActionTrigger {
    type Raw = FunctionCallActionTrigger.Raw | PhraseBasedActionTriggerOutput.Raw;
}
