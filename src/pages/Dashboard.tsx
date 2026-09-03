import { AskAI } from "../components/AskAI";
import { ModuleIcon } from "../components/ModuleIcon";
import { Progress } from "../components/Progress";
import { getModule } from "../data/modules";

type Props = {
  onSource: () => void;
};

// Figma reference: Dashboard is a separate Home/Dashboard screen, never the Get Started landing screen.
export function Dashboard({ onSource }: Props) {
  const source = getModule("source");

  return (
    <div className="min-h-screen bg-[#f7f7f6]">
      <div className="module-workspace px-[62px] pb-12 pt-[76px]">
        <h1 className="text-[25px] font-medium tracking-[-0.5px] text-[#4b4945]">Dashboard</h1>

        <div className="module-columns mt-8 grid grid-cols-[minmax(0,1fr)_352px] items-start gap-[30px]">
          <main className="min-w-0">
            <Progress value={0} />

            <button
              onClick={onSource}
              className="mt-4 flex w-full items-start rounded-[9px] bg-white p-4 text-left hover:shadow-[0_2px_10px_rgba(30,30,30,0.04)]"
            >
              <ModuleIcon module={source} />
              <div className="ml-2.5 flex-1">
                <div className="text-[14px] font-medium text-[#302e2b]">Source</div>
                <div className="mt-0.5 text-[12px] text-[#77736e]">
                  Ready to begin · Start generating sources
                </div>
                <span className="mt-2 inline-flex rounded-full bg-[#ffb600] px-2 py-0.5 text-[9px] font-bold text-[#3f3100]">
                  PENDING
                </span>
              </div>
              <span className="pt-0.5 text-[13px] text-[#ed1639]">View Details</span>
            </button>
          </main>

          <AskAI />
        </div>
      </div>
    </div>
  );
}