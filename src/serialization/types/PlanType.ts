/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";

export const PlanType: core.serialization.Schema<serializers.PlanType.Raw, Vocode.PlanType> = core.serialization.enum_([
    "plan_free",
    "plan_developer",
    "plan_enterprise",
    "plan_unlimited",
]);

export declare namespace PlanType {
    type Raw = "plan_free" | "plan_developer" | "plan_enterprise" | "plan_unlimited";
}
