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

type Props = {
  active: string;
  expanded?: boolean;
  onToggle: () => void;
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

export function Sidebar({
  active,
  expanded = false,
  onToggle,
  onNavigate,
}: Props) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 border-r border-[#ecebe8] bg-white transition-[width] duration-200 ${
        expanded ? "w-[236px]" : "w-[94px]"
      }`}
      aria-label="Primary navigation"
    >
      {/* The logo deliberately does NOT live here. It belongs to Header,
          matching both Figma expanded and collapsed states. */}
      <div className={`flex h-[72px] ${expanded ? "justify-start px-[58px]" : "justify-center"}`}>
        <button
          onClick={onToggle}
          className="flex h-9 w-9 items-center justify-center text-[#55534f] hover:text-[#ed1639]"
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
          title={expanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {expanded ? (
            <ArrowLeft size={18} strokeWidth={1.35} />
          ) : (
            <ArrowRight size={18} strokeWidth={1.35} />
          )}
        </button>
      </div>

      <nav className={expanded ? "px-[48px] space-y-1" : "space-y-2.5"}>
        {nav.map(({ id, label, icon: Icon }, index) => (
          <div key={id}>
            {index === 2 && (
              <div className={expanded ? "my-4 border-t border-[#eeeae5]" : "mx-[25px] my-4 border-t border-[#eeeae5]"} />
            )}

            <button
              onClick={() => onNavigate(id)}
              className={
                expanded
                  ? `flex h-10 w-[140px] items-center gap-3 rounded-xl px-2.5 text-[13px] transition ${
                      active === id
                        ? "bg-[#fff4f5] text-[#ed1639]"
                        : "text-[#4d4b47] hover:bg-[#f7f7f6]"
                    }`
                  : `mx-auto flex h-11 w-11 items-center justify-center rounded-xl transition ${
                      active === id
                        ? "bg-[#fff4f5] text-[#ed1639]"
                        : "text-[#4d4b47] hover:bg-[#f7f7f6]"
                    }`
              }
              aria-label={label}
              title={expanded ? undefined : label}
            >
              <Icon
                size={18}
                strokeWidth={active === id ? 1.8 : 1.4}
              />
              {expanded && <span>{label}</span>}
            </button>
          </div>
        ))}
      </nav>

      {expanded && (
        <div className="mx-[48px] mt-8 border-t border-[#eeeae5] pt-3">
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
      )}
    </aside>
  );
}
