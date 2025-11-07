import { useState } from "react";
import { projects } from "../../utils/lists/projects";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectModal } from "./ProjectModal";

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="portfolio" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-cyan-400 mb-4">Meu Trabalho</h2>
          <p className="text-slate-400 text-lg">
            Uma coleção de projetos nos quais trabalhei
          </p>
        </div>

        <ProjectGrid projects={projects} onOpenModal={openModal} />

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </div>
    </section>
  );
}
