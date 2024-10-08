/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";

export const HttpMethod: core.serialization.Schema<serializers.HttpMethod.Raw, Vocode.HttpMethod> =
    core.serialization.enum_(["GET", "POST"]);

export declare namespace HttpMethod {
    type Raw = "GET" | "POST";
}
