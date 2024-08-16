/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { TransferCallConfig } from "./TransferCallConfig";
import { TransferCallActionActionTrigger } from "./TransferCallActionActionTrigger";

export const TransferCallAction: core.serialization.ObjectSchema<
    serializers.TransferCallAction.Raw,
    Vocode.TransferCallAction
> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    type: core.serialization.stringLiteral("action_transfer_call"),
    config: TransferCallConfig,
    actionTrigger: core.serialization.property("action_trigger", TransferCallActionActionTrigger.optional()),
});

export declare namespace TransferCallAction {
    interface Raw {
        id: string;
        user_id: string;
        type: "action_transfer_call";
        config: TransferCallConfig.Raw;
        action_trigger?: TransferCallActionActionTrigger.Raw | null;
    }
}
