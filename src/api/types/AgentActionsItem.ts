/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export type AgentActionsItem =
    | Vocode.AgentActionsItem.ActionTransferCall
    | Vocode.AgentActionsItem.ActionEndConversation
    | Vocode.AgentActionsItem.ActionDtmf
    | Vocode.AgentActionsItem.ActionAddToConference
    | Vocode.AgentActionsItem.ActionSetHold;

export declare namespace AgentActionsItem {
    interface ActionTransferCall extends Vocode.TransferCallAction {
        type: "action_transfer_call";
    }

    interface ActionEndConversation extends Vocode.EndConversationAction {
        type: "action_end_conversation";
    }

    interface ActionDtmf extends Vocode.DtmfAction {
        type: "action_dtmf";
    }

    interface ActionAddToConference extends Vocode.AddToConferenceAction {
        type: "action_add_to_conference";
    }

    interface ActionSetHold extends Vocode.SetHoldAction {
        type: "action_set_hold";
    }
}
