/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { OpenAiAccountConnectionParams } from "./OpenAiAccountConnectionParams";
import { TwilioAccountConnectionParams } from "./TwilioAccountConnectionParams";

export const AccountConnectionParamsRequest: core.serialization.Schema<
    serializers.AccountConnectionParamsRequest.Raw,
    Vocode.AccountConnectionParamsRequest
> = core.serialization.undiscriminatedUnion([OpenAiAccountConnectionParams, TwilioAccountConnectionParams]);

export declare namespace AccountConnectionParamsRequest {
    type Raw = OpenAiAccountConnectionParams.Raw | TwilioAccountConnectionParams.Raw;
}
