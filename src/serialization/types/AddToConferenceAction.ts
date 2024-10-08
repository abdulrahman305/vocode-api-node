/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { AddToConferenceConfig } from "./AddToConferenceConfig";
import { AddToConferenceActionActionTrigger } from "./AddToConferenceActionActionTrigger";

export const AddToConferenceAction: core.serialization.ObjectSchema<
    serializers.AddToConferenceAction.Raw,
    Vocode.AddToConferenceAction
> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    type: core.serialization.stringLiteral("action_add_to_conference"),
    config: AddToConferenceConfig,
    actionTrigger: core.serialization.property("action_trigger", AddToConferenceActionActionTrigger.optional()),
});

export declare namespace AddToConferenceAction {
    interface Raw {
        id: string;
        user_id: string;
        type: "action_add_to_conference";
        config: AddToConferenceConfig.Raw;
        action_trigger?: AddToConferenceActionActionTrigger.Raw | null;
    }
}
