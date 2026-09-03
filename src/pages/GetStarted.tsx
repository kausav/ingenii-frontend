import { Database, Image, ShieldCheck } from "lucide-react";
import { modules } from "../data/modules";
import { PromptBox } from "../components/PromptBox";

type Props = {
  onBuild: (prompt: string) => void;
  onNavigate: (page: string) => void;
};

export function GetStarted({ onBuild, onNavigate }: Props) {
  return (
    <main className="min-h-screen bg-[#f7f7f6]">
      <div className="mx-auto w-full max-w-[1040px] px-8 pb-16 pt-[98px]">
        <section className="text-center">
          <div className="text-[14px] text-[#353330]">
            Welcome, <span className="text-[#ed1639]">Shenhanshu</span>
          </div>

          <h1 className="mt-3 text-[25px] font-medium tracking-[-0.55px] text-[#292826]">
            What you would like to build?
          </h1>

          <div className="mx-auto mt-5 w-[565px] max-w-full">
            <PromptBox onSubmit={onBuild} />

            <div className="mt-2 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => onBuild("I want to collect new dataset")}
                className="flex items-center gap-2 rounded-[9px] bg-[#ecebea] px-3.5 py-2 text-[12px] text-[#4e4b47] hover:bg-[#e5e4e1]"
              >
                <Database size={15} strokeWidth={1.4} />
                I want to collect new dataset
              </button>

              <button
                onClick={() => onBuild("I want to secure my workflow")}
                className="flex items-center gap-2 rounded-[9px] bg-[#ecebea] px-3.5 py-2 text-[12px] text-[#4e4b47] hover:bg-[#e5e4e1]"
              >
                <ShieldCheck size={15} strokeWidth={1.4} />
                I want to secure my workflow
              </button>

              <button
                onClick={() => onBuild("I want to annotate images")}
                className="flex items-center gap-2 rounded-[9px] bg-[#ecebea] px-3.5 py-2 text-[12px] text-[#4e4b47] hover:bg-[#e5e4e1]"
              >
                <Image size={15} strokeWidth={1.4} />
                I want to annotate images
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mt-10 text-center text-[25px] font-medium tracking-[-0.55px] text-[#292826]">
            Choose your module
          </h2>

          <div className="mt-6 grid grid-cols-7 gap-2.5">
            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <button
                  key={module.id}
                  onClick={() => onNavigate(module.id)}
                  className="min-h-[185px] rounded-[8px] bg-white p-3 text-left transition hover:-translate-y-0.5 hover:shadow-[0_3px_14px_rgba(30,30,30,0.06)]"
                >
                  <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-[8px] bg-[#ed1639] text-white">
                    <Icon size={19} strokeWidth={1.4} />
                  </div>

                  <div className="text-[14px] font-medium text-[#292826]">
                    {module.name}
                  </div>

                  <div className="mt-1.5 text-[12px] leading-[17px] text-[#77736e]">
                    {module.description}
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
