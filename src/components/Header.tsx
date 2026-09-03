import { Bell, CircleHelp, UserRound } from "lucide-react";
import { Logo } from "./Logo";

/**
 * Header is intentionally outside Sidebar.
 * Its containing block is the main application column, so the logo starts
 * immediately to the right of whichever sidebar width is currently active.
 */
export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 h-[72px]">
      <div className="absolute left-[25px] top-[27px]">
        <Logo />
      </div>

      <div className="absolute right-[27px] top-[27px] flex items-center gap-7">
        <button
          className="text-[#4f4d49] hover:text-[#ed1639]"
          aria-label="Notifications"
        >
          <Bell size={19} strokeWidth={1.45} />
        </button>

        <button
          className="text-[#4f4d49] hover:text-[#ed1639]"
          aria-label="Help"
        >
          <CircleHelp size={18} strokeWidth={1.45} />
        </button>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#efefed] text-[#4f4d49] hover:bg-[#e7e7e4]"
          aria-label="Profile"
        >
          <UserRound size={17} strokeWidth={1.4} />
        </button>
      </div>
    </header>
  );
}
