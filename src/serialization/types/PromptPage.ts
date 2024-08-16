/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vocode from "../../api/index";
import * as core from "../../core";
import { NormalizedPrompt } from "./NormalizedPrompt";

export const PromptPage: core.serialization.ObjectSchema<serializers.PromptPage.Raw, Vocode.PromptPage> =
    core.serialization.object({
        items: core.serialization.list(NormalizedPrompt),
        page: core.serialization.number(),
        size: core.serialization.number(),
        hasMore: core.serialization.property("has_more", core.serialization.boolean()),
        total: core.serialization.number(),
        totalIsEstimated: core.serialization.property("total_is_estimated", core.serialization.boolean()),
    });

export declare namespace PromptPage {
    interface Raw {
        items: NormalizedPrompt.Raw[];
        page: number;
        size: number;
        has_more: boolean;
        total: number;
        total_is_estimated: boolean;
    }
}
