/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "../index";

export interface OpenAiAccountConnection {
    id: string;
    userId: string;
    credentials: Vocode.OpenAiCredentials;
    type: "account_connection_openai";
}
