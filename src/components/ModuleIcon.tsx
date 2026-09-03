import type { Module } from "../types";

export function ModuleIcon({ module, size = "md" }: { module: Module; size?: "sm" | "md" }) {
  const Icon = module.icon;
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-[8px] bg-[#ed1639] text-white ${
        size === "sm" ? "h-9 w-9" : "h-10 w-10"
      }`}
    >
      <Icon size={size === "sm" ? 19 : 20} strokeWidth={1.45} />
    </div>
  );
}