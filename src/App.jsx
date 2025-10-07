import { Sidebar } from "./components/Sidebar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { AppProvider, useAppContext } from "./context/AppContext";
import { scrollToSection } from "./utils/scrollUtils";

function AppContent() {
  const { activeSection } = useAppContext();

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
      <main className="ml-64 flex-1 overflow-y-auto scroll-smooth">
        <div className="px-8">
          <HeroSection />
          <AboutSection />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

