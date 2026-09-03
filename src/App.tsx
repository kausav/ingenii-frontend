import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import { GetStarted } from "./pages/GetStarted";
import { ModulePage } from "./pages/ModulePage";
import { SolutionBuilder } from "./pages/SolutionBuilder";
import type { ModuleId } from "./types";

type Page = "get-started" | "solution" | "dashboard" | ModuleId;

const moduleIds: ModuleId[] = [
  "source",
  "curate",
  "annotate",
  "train",
  "secure",
  "deploy",
  "govern",
];

function isModulePage(page: string): page is ModuleId {
  return moduleIds.includes(page as ModuleId);
}

function pageFromHash(): Page {
  const value = window.location.hash.replace("#/", "").replace("#", "");
  if (
    value === "get-started" ||
    value === "solution" ||
    value === "dashboard" ||
    isModulePage(value)
  ) {
    return value as Page;
  }
  return "get-started";
}

function App() {
  const [page, setPage] = useState<Page>(pageFromHash);
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    const onHashChange = () => setPage(pageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (next: string) => {
    if (
      next === "get-started" ||
      next === "solution" ||
      next === "dashboard" ||
      isModulePage(next)
    ) {
      window.location.hash = `/${next}`;
      setPage(next as Page);
    }
  };

  const buildFromPrompt = (value: string) => {
    setPrompt(value);
    navigate("solution");
  };

  // Only Get Started uses the wide/expanded navigation shown in Figma.
  // Dashboard, Solution and module screens use the compact icon rail.
  const expandedSidebar = page === "get-started";

  return (
    <div className="min-h-screen bg-[#f7f7f6]">
      <Sidebar
        active={page}
        expanded={expandedSidebar}
        onNavigate={navigate}
      />

      <div
        className={`min-h-screen ${
          expandedSidebar ? "ml-[236px]" : "ml-[94px]"
        }`}
      >
        <Header showLogo={!expandedSidebar} />

        {page === "get-started" && (
          <GetStarted onBuild={buildFromPrompt} onNavigate={navigate} />
        )}

        {page === "solution" && (
          <SolutionBuilder
            prompt={prompt}
            onCreate={() => navigate("dashboard")}
          />
        )}

        {page === "dashboard" && (
          <Dashboard onSource={() => navigate("source")} />
        )}

        {isModulePage(page) && <ModulePage moduleId={page} />}
      </div>
    </div>
  );
}

export default App;
