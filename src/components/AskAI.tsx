import { ChevronRight, Info, Search, Sparkles } from "lucide-react";
import { PromptBox } from "./PromptBox";

export function AskAI() {
  const suggestions = [
    { icon: Search, text: "Annotate and Train are both moving – 72% and 18%. Want a status summary, or help with either one?" },
    { icon: Info, text: "Tips for labelling faster" },
    { icon: Search, text: "Why is Train’s loss not dropping?" },
    { icon: Search, text: "What does Secure check for?" },
  ];

  return (
    <aside className="flex h-[452px] w-[352px] shrink-0 flex-col rounded-[9px] bg-white p-4 shadow-[0_1px_8px_rgba(30,30,30,0.02)]">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 text-[16px] font-medium text-[#4b4945]">
            <Sparkles size={23} strokeWidth={1.45} className="text-[#ed1639]" />
            Ask AI
          </div>
          <p className="mt-2 max-w-[275px] text-[12px] leading-[17px] text-[#89847e]">
            Ask about your project, or get help with what's in progress.
          </p>
        </div>
        <button className="mt-1 text-[#5b5752] hover:text-[#ed1639]" aria-label="Collapse Ask AI">
          <ChevronRight size={19} strokeWidth={1.35} />
        </button>
      </div>

      <div className="mt-5 space-y-2">
        {suggestions.map(({ icon: Icon, text }, index) => (
          <button
            key={index}
            className={`flex max-w-[272px] items-start gap-2 rounded-[8px] bg-[#f3f2f0] px-3 py-2 text-left text-[12px] leading-[17px] text-[#5b5752] hover:bg-[#ecebe8]`}
          >
            <Icon size={15} strokeWidth={1.35} className="mt-0.5 shrink-0" />
            <span>{text}</span>
          </button>
        ))}
      </div>

      <div className="mt-auto">
        <PromptBox compact placeholder="Ask a question" />
      </div>
    </aside>
  );
}