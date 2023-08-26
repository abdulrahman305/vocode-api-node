/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export interface CreateCallAgentParams {
    prompt: Vocode.CreateCallAgentParamsPrompt;
    language?: Vocode.Language;
    actions?: Vocode.CreateCallAgentParamsActionsItem[];
    voice?: Vocode.CreateCallAgentParamsVoice;
    initialMessage?: string;
    webhook?: Vocode.CreateCallAgentParamsWebhook;
    vectorDatabase?: Vocode.CreateCallAgentParamsVectorDatabase;
    interruptSensitivity?: Vocode.InterruptSensitivity;
    contextEndpoint?: string;
}
