/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const Agent: core.serialization.ObjectSchema<serializers.Agent.Raw, Vocode.Agent> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    prompt: core.serialization.string(),
    actions: core.serialization.list(core.serialization.lazy(async () => (await import("..")).AgentActionsItem)),
    voice: core.serialization.lazy(async () => (await import("..")).AgentVoice),
    initialMessage: core.serialization.property("initial_message", core.serialization.string().optional()),
    webhook: core.serialization.lazy(async () => (await import("..")).AgentWebhook).optional(),
});

export declare namespace Agent {
    interface Raw {
        id: string;
        user_id: string;
        prompt: string;
        actions: serializers.AgentActionsItem.Raw[];
        voice: serializers.AgentVoice.Raw;
        initial_message?: string | null;
        webhook?: serializers.AgentWebhook.Raw | null;
    }
}
