import { Sidebar } from "./components/sidebar";
import { HeroSection } from "./components/heroSection";
import { AboutSection } from "./components/aboutSection";
import { AppProvider, useAppContext } from "./context/appContext";
import { scrollToSection } from "./utils/scrollUtils";
import { ThemeProvider } from "./context/themeContext";
import { SkillsSection } from "./components/skillsSection";
import { ExperienceSection } from "./components/experienceSection";
import { PortfolioSection } from "./components/portfolio/portfolioSection";
import { CertificatesSection } from "./components/certificates/certificatesSection";

function AppContent() {
  const { activeSection } = useAppContext();

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
      <main className="ml-64 flex-1 overflow-y-auto scroll-smooth">
        <div className="px-8">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <CertificatesSection />
          <ExperienceSection />
          <PortfolioSection />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ThemeProvider>
  );
}
