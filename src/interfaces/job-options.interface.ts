import {
  DefineOptions as PulseDefineOptions,
  JobAttributesData,
  JobOptions as PulseJobOptions,
} from "@pulsecron/pulse";

export interface SchedulerAdditionalOptions {
  name?: string,
  data?: JobAttributesData,
}

export type JobOptions = PulseDefineOptions & PulseJobOptions & SchedulerAdditionalOptions;
