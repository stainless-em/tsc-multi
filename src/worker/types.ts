import { Target } from "../config";

export interface WorkerOptions {
  target: Target;
  verbose?: boolean;
  watch?: boolean;
  clean?: boolean;
  projects: string[];
}
