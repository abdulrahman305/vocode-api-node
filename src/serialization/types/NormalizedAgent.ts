/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const NormalizedAgent: core.serialization.ObjectSchema<serializers.NormalizedAgent.Raw, Vocode.NormalizedAgent> =
    core.serialization.object({
        id: core.serialization.string(),
        userId: core.serialization.property("user_id", core.serialization.string()),
        prompt: core.serialization.lazy(async () => (await import("..")).NormalizedAgentPrompt),
        language: core.serialization.lazy(async () => (await import("..")).Language).optional(),
        actions: core.serialization.list(core.serialization.string()),
        voice: core.serialization.string(),
        initialMessage: core.serialization.property("initial_message", core.serialization.string().optional()),
        webhook: core.serialization.string().optional(),
        vectorDatabase: core.serialization.property(
            "vector_database",
            core.serialization.lazy(async () => (await import("..")).NormalizedAgentVectorDatabase).optional()
        ),
        interruptSensitivity: core.serialization.property(
            "interrupt_sensitivity",
            core.serialization.lazy(async () => (await import("..")).InterruptSensitivity).optional()
        ),
        contextEndpoint: core.serialization.property("context_endpoint", core.serialization.string().optional()),
        noiseSuppression: core.serialization.property("noise_suppression", core.serialization.boolean().optional()),
        endpointingSensitivity: core.serialization.property(
            "endpointing_sensitivity",
            core.serialization.lazy(async () => (await import("..")).NormalizedAgentEndpointingSensitivity).optional()
        ),
        ivrNavigationMode: core.serialization.property(
            "ivr_navigation_mode",
            core.serialization.lazy(async () => (await import("..")).NormalizedAgentIvrNavigationMode).optional()
        ),
        conversationSpeed: core.serialization.property("conversation_speed", core.serialization.number().optional()),
        initialMessageDelay: core.serialization.property(
            "initial_message_delay",
            core.serialization.number().optional()
        ),
    });

export declare namespace NormalizedAgent {
    interface Raw {
        id: string;
        user_id: string;
        prompt: serializers.NormalizedAgentPrompt.Raw;
        language?: serializers.Language.Raw | null;
        actions: string[];
        voice: string;
        initial_message?: string | null;
        webhook?: string | null;
        vector_database?: serializers.NormalizedAgentVectorDatabase.Raw | null;
        interrupt_sensitivity?: serializers.InterruptSensitivity.Raw | null;
        context_endpoint?: string | null;
        noise_suppression?: boolean | null;
        endpointing_sensitivity?: serializers.NormalizedAgentEndpointingSensitivity.Raw | null;
        ivr_navigation_mode?: serializers.NormalizedAgentIvrNavigationMode.Raw | null;
        conversation_speed?: number | null;
        initial_message_delay?: number | null;
    }
}
