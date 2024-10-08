/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Vocode from "../../../../api/index";
import * as core from "../../../../core";
import { Undefined } from "../../../types/Undefined";

export const UpdateNumberRequestLabel: core.serialization.Schema<
    serializers.UpdateNumberRequestLabel.Raw,
    Vocode.UpdateNumberRequestLabel
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Undefined]);

export declare namespace UpdateNumberRequestLabel {
    type Raw = string | Undefined.Raw;
}
