import { Check } from "lucide-react";
import type { Module } from "../types";
import { ModuleIcon } from "./ModuleIcon";

type Props = {
  module: Module;
  selected: boolean;
  onToggle: () => void;
  selector?: boolean;
  compact?: boolean;
};

export function ModuleCard({ module, selected, onToggle, selector = true, compact = false }: Props) {
  return (
    <div
      onClick={selector ? onToggle : undefined}
      className={`rounded-[9px] bg-white transition ${
        selector ? "cursor-pointer hover:shadow-[0_2px_10px_rgba(30,30,30,0.05)]" : ""
      } ${compact ? "p-3.5" : "min-h-[112px] p-3.5"}`}
    >
      <div className="flex gap-2.5">
        {selector && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border ${
              selected
                ? "border-[#ed1639] bg-[#ed1639] text-white"
                : "border-[#ddd9d4] bg-white text-transparent"
            }`}
            aria-label={`Select ${module.name}`}
          >
            <Check size={11} strokeWidth={2.7} />
          </button>
        )}

        <ModuleIcon module={module} size={compact ? "sm" : "md"} />

        <div className="min-w-0 flex-1">
          <div className="text-[14px] font-medium leading-[18px] text-[#272624]">
            {module.number} - {module.name}
          </div>
          <div className="mt-0.5 text-[12px] leading-[16px] text-[#77736e]">
            {module.description}
          </div>
          <div className="mt-2.5 text-[9px] font-semibold tracking-[0.65px] text-[#a29e98]">
            RECOMMENDED TOOLS
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {module.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-[3px] bg-[#f1f0ee] px-2 py-1 text-[10px] text-[#57534d]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}