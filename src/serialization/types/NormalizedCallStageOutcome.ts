/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";

export const NormalizedCallStageOutcome: core.serialization.Schema<
    serializers.NormalizedCallStageOutcome.Raw,
    Vocode.NormalizedCallStageOutcome
> = core.serialization.enum_([
    "human_unanswered",
    "call_did_not_connect",
    "human_disconnected",
    "bot_disconnected",
    "transfer_unanswered",
    "transfer_disconnected",
]);

export declare namespace NormalizedCallStageOutcome {
    type Raw =
        | "human_unanswered"
        | "call_did_not_connect"
        | "human_disconnected"
        | "bot_disconnected"
        | "transfer_unanswered"
        | "transfer_disconnected";
}
