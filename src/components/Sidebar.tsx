import {
  ArrowLeft,
  ArrowRight,
  Rocket,
  House,
  Database,
  Shapes,
  Tag,
  Settings2,
  ShieldCheck,
  MonitorCheck,
  Landmark,
} from "lucide-react";
import { Logo } from "./Logo";

type Props = {
  active: string;
  expanded?: boolean;
  onNavigate: (page: string) => void;
};

const nav = [
  { id: "get-started", label: "Get Started", icon: Rocket },
  { id: "dashboard", label: "Dashboard", icon: House },
  { id: "source", label: "Source", icon: Database },
  { id: "curate", label: "Curate", icon: Shapes },
  { id: "annotate", label: "Annotate", icon: Tag },
  { id: "train", label: "Train", icon: Settings2 },
  { id: "secure", label: "Secure", icon: ShieldCheck },
  { id: "deploy", label: "Deploy", icon: MonitorCheck },
  { id: "govern", label: "Govern", icon: Landmark },
] as const;

export function Sidebar({ active, expanded = false, onNavigate }: Props) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 border-r border-[#ecebe8] bg-white ${
        expanded ? "w-[236px]" : "w-[94px]"
      }`}
    >
      {expanded ? (
        <div className="px-[22px] pt-7">
          <div className="flex items-center">
            <button
              className="mr-4 text-[#55534f] hover:text-[#ed1639]"
              aria-label="Collapse navigation"
              title="Collapse navigation"
            >
              <ArrowLeft size={18} strokeWidth={1.35} />
            </button>
            <Logo />
          </div>

          <nav className="mt-7 space-y-1">
            {nav.map(({ id, label, icon: Icon }, index) => (
              <div key={id}>
                {index === 2 && (
                  <div className="my-4 border-t border-[#eeeae5]" />
                )}
                <button
                  onClick={() => onNavigate(id)}
                  className={`flex h-10 w-full items-center gap-3 rounded-xl px-2.5 text-[13px] transition ${
                    active === id
                      ? "bg-[#fff4f5] text-[#ed1639]"
                      : "text-[#4d4b47] hover:bg-[#f7f7f6]"
                  }`}
                >
                  <Icon size={18} strokeWidth={active === id ? 1.8 : 1.4} />
                  <span>{label}</span>
                </button>
              </div>
            ))}
          </nav>

          <div className="mt-8 border-t border-[#eeeae5] pt-3">
            <div className="mb-3 text-[11px] font-medium text-[#99958e]">
              History
            </div>
            <button className="block w-full border-t border-[#eeeae5] pt-2 text-left text-[12px] leading-[15px] text-[#4f4d49] hover:text-[#ed1639]">
              I want to collect new
              <br />
              dataset
            </button>
            <button className="mt-2 block w-full text-left text-[12px] leading-[15px] text-[#4f4d49] hover:text-[#ed1639]">
              I want to annotate images
            </button>
            <button className="mt-2 block w-full text-left text-[12px] leading-[15px] text-[#4f4d49] hover:text-[#ed1639]">
              Prompt title goes here
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex h-[72px] items-center justify-center">
            <button
              onClick={() => onNavigate("get-started")}
              className="flex h-9 w-9 items-center justify-center text-[#55534f] hover:text-[#ed1639]"
              aria-label="Get Started"
              title="Get Started"
            >
              <ArrowRight size={18} strokeWidth={1.35} />
            </button>
          </div>

          <nav className="space-y-2.5">
            {nav.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`mx-auto flex h-11 w-11 items-center justify-center rounded-xl transition ${
                  active === id
                    ? "bg-[#fff4f5] text-[#ed1639]"
                    : "text-[#4d4b47] hover:bg-[#f7f7f6]"
                }`}
                aria-label={id}
                title={id}
              >
                <Icon
                  size={19}
                  strokeWidth={active === id ? 1.8 : 1.4}
                />
              </button>
            ))}
          </nav>
        </>
      )}
    </aside>
  );
}
