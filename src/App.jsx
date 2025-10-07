import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";

function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "inicio",
        "sobre",
        "oque-faco",
        "resumo",
        "portfolio",
        "depoimentos",
        "contato",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="ml-64 flex-1 overflow-y-auto scroll-smooth">
        <div className="px-8">
          <HeroSection />
          <AboutSection />
        </div>
      </main>
    </div>
  );
}

export default App;
