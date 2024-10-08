/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { OpenAiAccountConnection } from "./OpenAiAccountConnection";
import { TwilioAccountConnection } from "./TwilioAccountConnection";

export const AccountConnectionResponseModel: core.serialization.Schema<
    serializers.AccountConnectionResponseModel.Raw,
    Vocode.AccountConnectionResponseModel
> = core.serialization.undiscriminatedUnion([OpenAiAccountConnection, TwilioAccountConnection]);

export declare namespace AccountConnectionResponseModel {
    type Raw = OpenAiAccountConnection.Raw | TwilioAccountConnection.Raw;
}
