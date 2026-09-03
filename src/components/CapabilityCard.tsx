import { Check } from "lucide-react";

type Props = {
  name: string;
  subtitle?: string;
  description: string;
  features: string[];
  active?: boolean;
  logo?: "populii" | "altavec";
};

export function CapabilityCard({ name, subtitle, description, features, active = false, logo = "populii" }: Props) {
  return (
    <div className="min-w-0 flex-1">
      <div className="flex items-center justify-between border-b border-[#dedbd6] pb-2">
        <div>
          <div className={`text-[16px] font-medium ${logo === "altavec" ? "tracking-[1.5px] text-[#ee183b]" : "text-[#111144]"}`}>
            {name}
          </div>
          {subtitle && <div className="text-[10px] text-[#77736e]">{subtitle}</div>}
        </div>
        <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${active ? "bg-[#d7f3dc] text-[#26933b]" : "bg-[#e9e8e5] text-[#57534e]"}`}>
          {active ? "ACTIVE" : "INACTIVE"}
        </span>
      </div>
      <p className="mt-4 text-[12px] leading-[17px] text-[#4f4b46]">{description}</p>
      <ul className="mt-2 space-y-1 text-[12px] text-[#4f4b46]">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-1.5">
            <Check size={13} strokeWidth={1.35} />
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-2">
        <button className="rounded-full bg-[#ed1639] px-4 py-2 text-[11px] font-medium text-white hover:bg-[#d70f31]">
          Launch
        </button>
        <button className="rounded-full bg-[#f0efed] px-4 py-2 text-[11px] text-[#4e4a45] hover:bg-[#e7e6e3]">
          How it Works
        </button>
      </div>
    </div>
  );
}