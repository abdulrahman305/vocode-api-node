/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export type EndConversationActionUpdateParamsActionTriggerZero =
    | Vocode.EndConversationActionUpdateParamsActionTriggerZero.ActionTriggerFunctionCall
    | Vocode.EndConversationActionUpdateParamsActionTriggerZero.ActionTriggerPhraseBased;

export declare namespace EndConversationActionUpdateParamsActionTriggerZero {
    interface ActionTriggerFunctionCall extends Vocode.FunctionCallActionTrigger {
        type: "action_trigger_function_call";
    }

    interface ActionTriggerPhraseBased extends Vocode.PhraseBasedActionTrigger {
        type: "action_trigger_phrase_based";
    }
}
