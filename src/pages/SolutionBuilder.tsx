import { MoreHorizontal, Share2, Sparkles } from "lucide-react";
import { useState } from "react";
import { modules } from "../data/modules";
import { ModuleCard } from "../components/ModuleCard";
import { PromptBox } from "../components/PromptBox";

type Props = {
  prompt: string;
  onCreate: (selected: string[]) => void;
};

export function SolutionBuilder({ prompt, onCreate }: Props) {
  const [selected, setSelected] = useState<string[]>(["source"]);
  const [followUp, setFollowUp] = useState("");

  const toggle = (id: string) => {
    if (id === "source") return;
    setSelected((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
    );
  };

  const userPrompt =
    prompt || "Detect pedestrians and lane markings from dashcam footage";

  return (
    <div className="min-h-screen bg-[#f7f7f6]">
      <div className="px-[23px] pb-16 pt-[77px]">
        <div className="flex items-center justify-between">
          <h1 className="text-[25px] font-medium tracking-[-0.6px] text-[#4a4844]">
            Dashcam Footage Detection
          </h1>

          <div className="mr-1 flex items-center gap-6 text-[#ed1639]">
            <button aria-label="Share" className="hover:text-[#c90d2c]">
              <Share2 size={17} strokeWidth={1.45} />
            </button>
            <button aria-label="More options" className="hover:text-[#c90d2c]">
              <MoreHorizontal size={19} strokeWidth={1.45} />
            </button>
          </div>
        </div>

        <div className="mx-auto mt-[28px] w-[548px]">
          <div className="flex justify-end">
            <div className="rounded-[8px] bg-[#e9e8e6] px-3.5 py-2 text-[12px] text-[#5d5954]">
              {userPrompt}
            </div>
          </div>

          <div className="mt-[15px] flex items-start gap-2.5">
            <Sparkles
              size={17}
              className="mt-0.5 shrink-0 text-[#9b9892]"
              strokeWidth={1.2}
            />
            <p className="max-w-[430px] text-[13px] leading-[18px] text-[#5b5752]">
              Got it. Quick question first – do you already have labeled
              footage, or are you starting from raw, unlabeled video?
            </p>
          </div>

          <div className="mt-[15px] flex justify-end">
            <div className="rounded-[8px] bg-[#e9e8e6] px-3.5 py-2 text-[12px] text-[#5d5954]">
              Raw video, nothing labeled yet.
            </div>
          </div>

          <div className="mt-[15px] flex items-start gap-2.5">
            <Sparkles
              size={17}
              className="mt-0.5 shrink-0 text-[#9b9892]"
              strokeWidth={1.2}
            />
            <p className="max-w-[450px] text-[13px] leading-[18px] text-[#5b5752]">
              Since you’re starting from raw video, you’ll need to get data
              and label it before training. Here’s what I’d suggest:
            </p>
          </div>

          <div className="mt-2">
            <ModuleCard
              module={modules[0]}
              selected
              onToggle={() => {}}
            />
          </div>

          <div className="mb-2.5 mt-[13px] text-[13px] text-[#5b5752]">
            Optional modules to include (add any time)
          </div>

          <div className="space-y-2">
            {modules.slice(1).map((module) => (
              <ModuleCard
                key={module.id}
                module={module}
                selected={selected.includes(module.id)}
                onToggle={() => toggle(module.id)}
              />
            ))}
          </div>

          <button
            onClick={() => onCreate(selected)}
            className="mt-3 rounded-full bg-[#ed1639] px-4 py-2.5 text-[12px] font-medium text-white hover:bg-[#d70f31]"
          >
            Create Solution
          </button>

          <div className="mx-auto mt-[59px] w-[540px]">
            <PromptBox placeholder="Describe here" onSubmit={setFollowUp} />
            {followUp && (
              <div className="mt-2 text-right text-[11px] text-[#89847e]">
                {followUp}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
