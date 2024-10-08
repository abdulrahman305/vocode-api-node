/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "../index";

export interface PhoneNumber {
    id: string;
    userId: string;
    active?: boolean;
    label?: string;
    inboundAgent?: Vocode.Agent;
    outboundOnly?: boolean;
    exampleContext?: Record<string, string | undefined>;
    number: string;
    telephonyProvider?: Vocode.PhoneNumberTelephonyProvider;
    telephonyAccountConnection?: Vocode.TwilioAccountConnection;
}
