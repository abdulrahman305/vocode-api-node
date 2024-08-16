/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";

export const CallOnNoHumanAnswer: core.serialization.Schema<
    serializers.CallOnNoHumanAnswer.Raw,
    Vocode.CallOnNoHumanAnswer
> = core.serialization.enum_(["continue", "hangup"]);

export declare namespace CallOnNoHumanAnswer {
    type Raw = "continue" | "hangup";
}
