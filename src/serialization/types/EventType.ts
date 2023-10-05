/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const EventType: core.serialization.Schema<serializers.EventType.Raw, Vocode.EventType> =
    core.serialization.enum_([
        "event_message",
        "event_action",
        "event_phone_call_connected",
        "event_phone_call_ended",
        "event_transcript",
        "event_recording",
        "event_human_detection",
    ]);

export declare namespace EventType {
    type Raw =
        | "event_message"
        | "event_action"
        | "event_phone_call_connected"
        | "event_phone_call_ended"
        | "event_transcript"
        | "event_recording"
        | "event_human_detection";
}
