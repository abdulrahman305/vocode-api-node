/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vocode from "../../../../../api/index";
import * as core from "../../../../../core";
import { UpdateNumberRequestOutboundOnly } from "../../types/UpdateNumberRequestOutboundOnly";
import { UpdateNumberRequestExampleContext } from "../../types/UpdateNumberRequestExampleContext";
import { UpdateNumberRequestLabel } from "../../types/UpdateNumberRequestLabel";
import { UpdateNumberRequestInboundAgent } from "../../types/UpdateNumberRequestInboundAgent";

export const UpdateNumberRequest: core.serialization.Schema<
    serializers.UpdateNumberRequest.Raw,
    Omit<Vocode.UpdateNumberRequest, "phoneNumber">
> = core.serialization.object({
    outboundOnly: core.serialization.property("outbound_only", UpdateNumberRequestOutboundOnly.optional()),
    exampleContext: core.serialization.property("example_context", UpdateNumberRequestExampleContext.optional()),
    label: UpdateNumberRequestLabel.optional(),
    inboundAgent: core.serialization.property("inbound_agent", UpdateNumberRequestInboundAgent.optional()),
});

export declare namespace UpdateNumberRequest {
    interface Raw {
        outbound_only?: UpdateNumberRequestOutboundOnly.Raw | null;
        example_context?: UpdateNumberRequestExampleContext.Raw | null;
        label?: UpdateNumberRequestLabel.Raw | null;
        inbound_agent?: UpdateNumberRequestInboundAgent.Raw | null;
    }
}
