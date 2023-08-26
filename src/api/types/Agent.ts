/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export interface Agent {
    id: string;
    userId: string;
    prompt: Vocode.Prompt;
    language?: Vocode.Language;
    actions: Vocode.AgentActionsItem[];
    voice: Vocode.AgentVoice;
    initialMessage?: string;
    webhook?: Vocode.Webhook;
    vectorDatabase?: Vocode.PineconeVectorDatabase;
    interruptSensitivity?: Vocode.InterruptSensitivity;
    contextEndpoint?: string;
}
