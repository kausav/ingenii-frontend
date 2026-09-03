export function Logo() {
  return (
    <div className="flex items-start gap-2.5 select-none">
      <div className="relative">
        <div className="text-[25px] leading-[24px] font-extrabold tracking-[-1.6px] text-[#101044]">
          ingenii
        </div>
        <span className="absolute -right-1.5 -top-1.5 h-2.5 w-2.5 rounded-full bg-[#ed1639]" />
      </div>
      <div className="pt-0.5 text-[9px] leading-[10px] text-[#55534f]">
        <div>from Data to Deployed</div>
        <div>and Governed AI</div>
      </div>
    </div>
  );
}