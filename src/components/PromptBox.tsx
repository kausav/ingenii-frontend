import { ArrowRight, Mic, Plus } from "lucide-react";
import { useState } from "react";

type Props = {
  placeholder?: string;
  compact?: boolean;
  value?: string;
  onSubmit?: (value: string) => void;
};

export function PromptBox({ placeholder = "Describe here", compact = false, value: initialValue = "", onSubmit }: Props) {
  const [value, setValue] = useState(initialValue);

  const submit = () => {
    if (!value.trim()) return;
    onSubmit?.(value.trim());
    setValue("");
  };

  return (
    <div
      className={`rounded-[9px] bg-white shadow-[0_1px_8px_rgba(30,30,30,0.03)] ${
        compact ? "h-[74px]" : "h-[136px]"
      }`}
    >
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            submit();
          }
        }}
        placeholder={placeholder}
        className="h-[calc(100%-43px)] w-full resize-none bg-transparent px-3.5 pt-3.5 text-[13px] text-[#3e3c39] outline-none placeholder:text-[#aaa7a2]"
      />
      <div className="flex h-[43px] items-center justify-between px-3.5">
        <button className="text-[#ed1639] hover:text-[#c90d2c]" aria-label="Add">
          <Plus size={18} strokeWidth={1.5} />
        </button>
        <div className="flex items-center gap-4">
          <button className="text-[#ed1639] hover:text-[#c90d2c]" aria-label="Voice">
            <Mic size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={submit}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ed1639] text-white transition hover:bg-[#d70f31]"
            aria-label="Send"
          >
            <ArrowRight size={15} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </div>
  );
}