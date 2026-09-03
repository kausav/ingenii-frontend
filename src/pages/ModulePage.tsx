import { AskAI } from "../components/AskAI";
import { CapabilityCard } from "../components/CapabilityCard";
import { Progress } from "../components/Progress";
import { getModule } from "../data/modules";
import type { ModuleId } from "../types";

type Props = { moduleId: ModuleId };

// Figma reference: flexible main column + fixed 352px Ask AI panel.
export function ModulePage({ moduleId }: Props) {
  const module = getModule(moduleId);

  return (
    <div className="min-h-screen bg-[#f7f7f6]">
      <div className="module-workspace px-[62px] pb-12 pt-[76px]">
        <div className="flex items-center gap-2">
          <h1 className="text-[25px] font-medium tracking-[-0.5px] text-[#4b4945]">
            {module.name}
          </h1>
          <span className="rounded-full bg-[#35bd50] px-2 py-0.5 text-[9px] font-bold text-white">
            ACTIVE
          </span>
        </div>

        <div className="module-columns mt-8 grid grid-cols-[minmax(0,1fr)_352px] items-start gap-[30px]">
          <main className="min-w-0">
            <Progress value={0} />

            <section className="mt-4 rounded-[9px] bg-white p-4">
              <p className="text-[12px] leading-[17px] text-[#4e4a45]">
                AI does the heavy lifting of building out synthetic data – automatically turning
                your requirements into a ready-to-use dataset structure. Instead of building this
                from scratch, your team just reviews and approves the AI's work. This shift alone
                speeds up the process by 40–80%.
              </p>
            </section>

            <section className="mt-3 rounded-[9px] bg-white p-4">
              <div className="text-[14px] font-medium text-[#35322e]">Activity</div>
              <div className="mt-2 text-[12px] text-[#aaa6a0]">
                There is no active task right now. Launch one from capabilities section below.
              </div>
            </section>

            <section className="mt-3 rounded-[9px] bg-white p-4">
              <div className="text-[14px] font-medium text-[#35322e]">Capabilities</div>
              <div className="mt-3 flex gap-4">
                <div className="w-1/2">
                  <div className="mb-3 text-[9px] font-semibold tracking-[0.6px] text-[#a29e98]">
                    RELEVANT DATA
                  </div>
                  <CapabilityCard
                    name="Populii"
                    description="AI-powered data sourcing platform for collecting dashcam footage, sensor data, and field recordings at enterprise scale."
                    features={["Bulk data upload", "Sensor feed sync", "Format validation"]}
                    logo="populii"
                  />
                </div>
                <div className="w-1/2">
                  <div className="mb-3 text-[9px] font-semibold tracking-[0.6px] text-[#a29e98]">
                    SYNTHETIC DATA
                  </div>
                  <CapabilityCard
                    name="ALTAVEC"
                    subtitle="SynthGen"
                    description="Generate realistic synthetic samples to augment training data, fill edge-case gaps, and balance class distributions."
                    features={["Automated schema generation", "Smart edge case detection", "Human-reviewed quality control"]}
                    logo="altavec"
                  />
                </div>
              </div>
            </section>
          </main>

          <AskAI />
        </div>
      </div>
    </div>
  );
}