/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { PineconeVectorDatabaseParams } from "./PineconeVectorDatabaseParams";

export const AgentParamsVectorDatabase: core.serialization.Schema<
    serializers.AgentParamsVectorDatabase.Raw,
    Vocode.AgentParamsVectorDatabase
> = core.serialization.undiscriminatedUnion([core.serialization.string(), PineconeVectorDatabaseParams]);

export declare namespace AgentParamsVectorDatabase {
    type Raw = string | PineconeVectorDatabaseParams.Raw;
}
