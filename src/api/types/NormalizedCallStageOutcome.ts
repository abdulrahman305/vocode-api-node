/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type NormalizedCallStageOutcome =
    | "human_unanswered"
    | "human_disconnected"
    | "bot_disconnected"
    | "transfer_unanswered"
    | "transfer_disconnected";

export const NormalizedCallStageOutcome = {
    HumanUnanswered: "human_unanswered",
    HumanDisconnected: "human_disconnected",
    BotDisconnected: "bot_disconnected",
    TransferUnanswered: "transfer_unanswered",
    TransferDisconnected: "transfer_disconnected",
} as const;
