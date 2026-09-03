import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { ModulePage } from "./pages/ModulePage";
import { SolutionBuilder } from "./pages/SolutionBuilder";
import type { ModuleId } from "./types";

type Page = "home" | "get-started" | "solution" | "dashboard" | ModuleId;

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
    value === "home" ||
    value === "get-started" ||
    value === "solution" ||
    value === "dashboard" ||
    isModulePage(value)
  ) {
    return value as Page;
  }

  // The app opens on Home. Get Started is a separate sidebar workflow.
  return "home";
}

function App() {
  const [page, setPage] = useState<Page>(pageFromHash);
  const [prompt, setPrompt] = useState("");
  // Figma: the landing/Home screen is shown with the sidebar expanded;
  // dashboard/module screens start collapsed. The user can toggle either state.
  const [sidebarExpanded, setSidebarExpanded] = useState(
    () => pageFromHash() === "home"
  );

  useEffect(() => {
    const onHashChange = () => setPage(pageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (next: string) => {
    if (
      next === "home" ||
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
    navigate("get-started");
  };

  // The Figma Get Started workflow uses the compact icon rail.
  // Home/Dashboard/module pages also keep the same rail so the content
  // does not shift when the user changes sidebar sections.
  const activeSidebarItem = page === "solution" ? "get-started" : page;

  return (
    <div className="min-h-screen bg-[#f7f7f6]">
      <Sidebar
        active={activeSidebarItem}
        expanded={sidebarExpanded}
        onToggle={() => setSidebarExpanded((expanded) => !expanded)}
        onNavigate={navigate}
      />

      <div
        className={`relative min-h-screen transition-[margin-left] duration-200 ${
          sidebarExpanded ? "ml-[236px]" : "ml-[94px]"
        }`}
      >
        <Header />

        {page === "home" && <Home onBuild={buildFromPrompt} onNavigate={navigate} />}

        {page === "get-started" && (
          <SolutionBuilder
            prompt={prompt}
            onCreate={() => navigate("dashboard")}
          />
        )}

        {/* Keep the old solution hash working for links/bookmarks created by
            earlier versions of the app. It now renders the same Get Started
            workflow instead of a separate, competing page. */}
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
