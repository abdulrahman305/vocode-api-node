/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Vocode from "../../../../api/index";
import * as core from "../../../../core";
import { AddToSteeringPoolBody } from "../../../types/AddToSteeringPoolBody";

export const Request: core.serialization.Schema<
    serializers.accountConnections.addToSteeringPool.Request.Raw,
    Vocode.AddToSteeringPoolBody | undefined
> = AddToSteeringPoolBody.optional();

export declare namespace Request {
    type Raw = AddToSteeringPoolBody.Raw | null | undefined;
}
