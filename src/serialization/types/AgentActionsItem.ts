/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AgentActionsItem: core.serialization.Schema<serializers.AgentActionsItem.Raw, Vocode.AgentActionsItem> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.lazyObject(async () => (await import("..")).EndConversationAction),
        core.serialization.lazyObject(async () => (await import("..")).DtmfAction),
    ]);

export declare namespace AgentActionsItem {
    type Raw = string | serializers.EndConversationAction.Raw | serializers.DtmfAction.Raw;
}
