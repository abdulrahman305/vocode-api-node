/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "../index";

export interface AddToConferenceAction {
    id: string;
    userId: string;
    type: "action_add_to_conference";
    config: Vocode.AddToConferenceConfig;
    actionTrigger?: Vocode.AddToConferenceActionActionTrigger;
}
