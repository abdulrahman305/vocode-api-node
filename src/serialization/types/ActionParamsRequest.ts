/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const ActionParamsRequest: core.serialization.Schema<
    serializers.ActionParamsRequest.Raw,
    Vocode.ActionParamsRequest
> = core.serialization
    .union("type", {
        action_transfer_call: core.serialization.lazyObject(async () => (await import("..")).TransferCallActionParams),
        action_end_conversation: core.serialization.lazyObject(
            async () => (await import("..")).EndConversationActionParams
        ),
        action_dtmf: core.serialization.lazyObject(async () => (await import("..")).DtmfActionParams),
        action_add_to_conference: core.serialization.lazyObject(
            async () => (await import("..")).AddToConferenceActionParams
        ),
        action_set_hold: core.serialization.lazyObject(async () => (await import("..")).SetHoldActionParams),
    })
    .transform<Vocode.ActionParamsRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ActionParamsRequest {
    type Raw =
        | ActionParamsRequest.ActionTransferCall
        | ActionParamsRequest.ActionEndConversation
        | ActionParamsRequest.ActionDtmf
        | ActionParamsRequest.ActionAddToConference
        | ActionParamsRequest.ActionSetHold;

    interface ActionTransferCall extends serializers.TransferCallActionParams.Raw {
        type: "action_transfer_call";
    }

    interface ActionEndConversation extends serializers.EndConversationActionParams.Raw {
        type: "action_end_conversation";
    }

    interface ActionDtmf extends serializers.DtmfActionParams.Raw {
        type: "action_dtmf";
    }

    interface ActionAddToConference extends serializers.AddToConferenceActionParams.Raw {
        type: "action_add_to_conference";
    }

    interface ActionSetHold extends serializers.SetHoldActionParams.Raw {
        type: "action_set_hold";
    }
}
