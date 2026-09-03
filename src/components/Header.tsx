import { Bell, CircleHelp, UserRound } from "lucide-react";
import { Logo } from "./Logo";

export function Header({ showLogo = false }: { showLogo?: boolean }) {
  return (
    <>
      {showLogo && (
        <div className="absolute left-[23px] top-7 z-20">
          <Logo />
        </div>
      )}

      <header className="absolute right-7 top-7 z-20 flex items-center gap-7">
        <button className="text-[#4f4d49] hover:text-[#ed1639]" aria-label="Notifications">
          <Bell size={19} strokeWidth={1.45} />
        </button>
        <button className="text-[#4f4d49] hover:text-[#ed1639]" aria-label="Help">
          <CircleHelp size={18} strokeWidth={1.45} />
        </button>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#efefed] text-[#4f4d49] hover:bg-[#e7e7e4]"
          aria-label="Profile"
        >
          <UserRound size={17} strokeWidth={1.4} />
        </button>
      </header>
    </>
  );
}
