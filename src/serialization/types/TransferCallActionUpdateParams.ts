/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { TransferCallActionUpdateParamsConfig } from "./TransferCallActionUpdateParamsConfig";
import { TransferCallActionUpdateParamsActionTrigger } from "./TransferCallActionUpdateParamsActionTrigger";

export const TransferCallActionUpdateParams: core.serialization.ObjectSchema<
    serializers.TransferCallActionUpdateParams.Raw,
    Vocode.TransferCallActionUpdateParams
> = core.serialization.object({
    type: core.serialization.stringLiteral("action_transfer_call"),
    config: TransferCallActionUpdateParamsConfig.optional(),
    actionTrigger: core.serialization.property(
        "action_trigger",
        TransferCallActionUpdateParamsActionTrigger.optional()
    ),
});

export declare namespace TransferCallActionUpdateParams {
    interface Raw {
        type: "action_transfer_call";
        config?: TransferCallActionUpdateParamsConfig.Raw | null;
        action_trigger?: TransferCallActionUpdateParamsActionTrigger.Raw | null;
    }
}
