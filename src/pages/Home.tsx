import { GetStarted } from "./GetStarted";

type Props = {
  onBuild: (prompt: string) => void;
  onNavigate: (page: string) => void;
};

/**
 * Home is the content shown when the user has not selected a sidebar section.
 * The existing landing content is intentionally kept unchanged; Get Started
 * is now reserved for the solution-builder conversation shown in Figma.
 */
export function Home({ onBuild, onNavigate }: Props) {
  return <GetStarted onBuild={onBuild} onNavigate={onNavigate} />;
}
