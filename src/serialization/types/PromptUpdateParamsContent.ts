/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { Undefined } from "./Undefined";

export const PromptUpdateParamsContent: core.serialization.Schema<
    serializers.PromptUpdateParamsContent.Raw,
    Vocode.PromptUpdateParamsContent
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Undefined]);

export declare namespace PromptUpdateParamsContent {
    type Raw = string | Undefined.Raw;
}
