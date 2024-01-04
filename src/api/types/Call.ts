/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vocode from "..";

export interface Call {
    id: string;
    userId: string;
    status?: Vocode.CallStatus;
    errorMessage?: string;
    recordingAvailable?: boolean;
    transcript?: string;
    humanDetectionResult?: Vocode.CallHumanDetectionResult;
    doNotCallResult?: boolean;
    telephonyId?: string;
    stage?: Vocode.CallStage;
    stageOutcome?: Vocode.CallStageOutcome;
    toNumber: string;
    fromNumber: string;
    agent: Vocode.Agent;
    telephonyProvider: Vocode.CallTelephonyProvider;
    agentPhoneNumber: string;
    startTime?: Date;
    endTime?: Date;
    hipaaCompliant?: boolean;
    onNoHumanAnswer?: Vocode.CallOnNoHumanAnswer;
    context?: Record<string, string>;
    runDoNotCallDetection?: boolean;
    telephonyAccountConnection?: Vocode.TwilioAccountConnection;
}
