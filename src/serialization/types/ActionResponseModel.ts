/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { AddToConferenceAction } from "./AddToConferenceAction";
import { DtmfAction } from "./DtmfAction";
import { EndConversationAction } from "./EndConversationAction";
import { ExternalAction } from "./ExternalAction";
import { SetHoldAction } from "./SetHoldAction";
import { TransferCallAction } from "./TransferCallAction";

export const ActionResponseModel: core.serialization.Schema<
    serializers.ActionResponseModel.Raw,
    Vocode.ActionResponseModel
> = core.serialization.undiscriminatedUnion([
    AddToConferenceAction,
    DtmfAction,
    EndConversationAction,
    ExternalAction,
    SetHoldAction,
    TransferCallAction,
]);

export declare namespace ActionResponseModel {
    type Raw =
        | AddToConferenceAction.Raw
        | DtmfAction.Raw
        | EndConversationAction.Raw
        | ExternalAction.Raw
        | SetHoldAction.Raw
        | TransferCallAction.Raw;
}
