export function Progress({ value = 0 }: { value?: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[16px] text-[#514e49]">
        <span>Overall Progress</span>
        <span>{value}%</span>
      </div>
      <div className="mt-2 h-[4px] overflow-hidden rounded-full bg-[#deddda]">
        <div className="h-full rounded-full bg-[#151044]" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}