/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const PhoneNumber: core.serialization.ObjectSchema<serializers.PhoneNumber.Raw, Vocode.PhoneNumber> =
    core.serialization.object({
        id: core.serialization.string(),
        userId: core.serialization.property("user_id", core.serialization.string()),
        active: core.serialization.boolean().optional(),
        label: core.serialization.string().optional(),
        inboundAgent: core.serialization.property(
            "inbound_agent",
            core.serialization.lazyObject(async () => (await import("..")).Agent)
        ),
        outboundOnly: core.serialization.property("outbound_only", core.serialization.boolean().optional()),
        exampleContext: core.serialization.property(
            "example_context",
            core.serialization.record(core.serialization.string(), core.serialization.string()).optional()
        ),
        number: core.serialization.string(),
        telephonyProvider: core.serialization.property(
            "telephony_provider",
            core.serialization.lazy(async () => (await import("..")).PhoneNumberTelephonyProvider).optional()
        ),
        telephonyAccountConnection: core.serialization.property(
            "telephony_account_connection",
            core.serialization.lazyObject(async () => (await import("..")).TwilioAccountConnection).optional()
        ),
    });

export declare namespace PhoneNumber {
    interface Raw {
        id: string;
        user_id: string;
        active?: boolean | null;
        label?: string | null;
        inbound_agent: serializers.Agent.Raw;
        outbound_only?: boolean | null;
        example_context?: Record<string, string> | null;
        number: string;
        telephony_provider?: serializers.PhoneNumberTelephonyProvider.Raw | null;
        telephony_account_connection?: serializers.TwilioAccountConnection.Raw | null;
    }
}
