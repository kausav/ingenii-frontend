import {
  Database,
  Shapes,
  Tag,
  Settings2,
  ShieldCheck,
  MonitorCheck,
  Landmark,
} from "lucide-react";
import type { Module } from "../types";

export const modules: Module[] = [
  {
    id: "source",
    number: 1,
    name: "Source",
    description: "Capture and generate the data AI needs",
    icon: Database,
    required: true,
    tools: ["Populii.ai", "Synthetic Data"],
  },
  {
    id: "curate",
    number: 2,
    name: "Curate",
    description: "Transform raw data into model-ready knowledge",
    icon: Shapes,
    tools: ["Dataloop"],
  },
  {
    id: "annotate",
    number: 3,
    name: "Annotate",
    description: "Label data to make it ready for AI training.",
    icon: Tag,
    tools: ["Populii.ai", "AIMS Clearance", "AIMS 3D"],
  },
  {
    id: "train",
    number: 4,
    name: "Train",
    description: "Optimize AI models to perform better",
    icon: Settings2,
    tools: ["Populii.ai", "Dataloop"],
  },
  {
    id: "secure",
    number: 5,
    name: "Secure",
    description: "Test AI systems for vulnerabilities and risks",
    icon: ShieldCheck,
    tools: ["Litmus"],
  },
  {
    id: "deploy",
    number: 6,
    name: "Deploy",
    description: "Bring AI models into production",
    icon: MonitorCheck,
    tools: ["Yantr.ai"],
  },
  {
    id: "govern",
    number: 7,
    name: "Govern",
    description: "Monitor and manage AI responsibly",
    icon: Landmark,
    tools: ["Aura+", "AIMS Zero", "Smart Assist", "eLuminate"],
  },
];

export const getModule = (id: Module["id"]) =>
  modules.find((module) => module.id === id)!;