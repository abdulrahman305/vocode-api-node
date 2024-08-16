/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { AddToConferenceConfig } from "./AddToConferenceConfig";
import { Undefined } from "./Undefined";

export const AddToConferenceActionUpdateParamsConfig: core.serialization.Schema<
    serializers.AddToConferenceActionUpdateParamsConfig.Raw,
    Vocode.AddToConferenceActionUpdateParamsConfig
> = core.serialization.undiscriminatedUnion([AddToConferenceConfig, Undefined]);

export declare namespace AddToConferenceActionUpdateParamsConfig {
    type Raw = AddToConferenceConfig.Raw | Undefined.Raw;
}
