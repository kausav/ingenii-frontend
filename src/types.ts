import type { LucideIcon } from "lucide-react";

export type ModuleId =
  | "source"
  | "curate"
  | "annotate"
  | "train"
  | "secure"
  | "deploy"
  | "govern";

export type Module = {
  id: ModuleId;
  number: number;
  name: string;
  description: string;
  icon: LucideIcon;
  required?: boolean;
  tools: string[];
};