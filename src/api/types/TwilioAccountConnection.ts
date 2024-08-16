/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "../index";

export interface TwilioAccountConnection {
    id: string;
    userId: string;
    credentials: Vocode.TwilioCredentials;
    type: "account_connection_twilio";
    steeringPool?: string[];
    accountSupportsAnyCallerId?: boolean;
}
