/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { CollectField } from "./CollectField";
import { Undefined } from "./Undefined";

export const PromptUpdateParamsCollectFields: core.serialization.Schema<
    serializers.PromptUpdateParamsCollectFields.Raw,
    Vocode.PromptUpdateParamsCollectFields
> = core.serialization.undiscriminatedUnion([core.serialization.list(CollectField), Undefined]);

export declare namespace PromptUpdateParamsCollectFields {
    type Raw = CollectField.Raw[] | Undefined.Raw;
}
