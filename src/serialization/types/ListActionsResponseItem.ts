/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const ListActionsResponseItem: core.serialization.Schema<
    serializers.ListActionsResponseItem.Raw,
    Vocode.ListActionsResponseItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).EndConversationAction),
    core.serialization.lazyObject(async () => (await import("..")).DtmfAction),
]);

export declare namespace ListActionsResponseItem {
    type Raw = serializers.EndConversationAction.Raw | serializers.DtmfAction.Raw;
}
