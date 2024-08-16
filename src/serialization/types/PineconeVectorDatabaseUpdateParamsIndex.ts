/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { Undefined } from "./Undefined";

export const PineconeVectorDatabaseUpdateParamsIndex: core.serialization.Schema<
    serializers.PineconeVectorDatabaseUpdateParamsIndex.Raw,
    Vocode.PineconeVectorDatabaseUpdateParamsIndex
> = core.serialization.undiscriminatedUnion([core.serialization.string(), Undefined]);

export declare namespace PineconeVectorDatabaseUpdateParamsIndex {
    type Raw = string | Undefined.Raw;
}
