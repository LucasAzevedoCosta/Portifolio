import { useState } from "react";
import {
  X,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Globe,
} from "lucide-react";
import { projects } from "../utils/lists/projects";
import { categoryColors } from "../utils/lists/categoryColors";

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardImageIndices, setCardImageIndices] = useState({}); // controla imagem atual de cada card

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.details.images.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.details.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.details.images.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.details.images.length - 1 : prev - 1
      );
    }
  };

  const nextCardImage = (e, projectId, totalImages) => {
    e.stopPropagation();
    setCardImageIndices((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1 || 1) % totalImages,
    }));
  };

  const prevCardImage = (e, projectId, totalImages) => {
    e.stopPropagation();
    setCardImageIndices((prev) => ({
      ...prev,
      [projectId]:
        prev[projectId] === 0 || prev[projectId] === undefined
          ? totalImages - 1
          : prev[projectId] - 1,
    }));
  };

  const selectCardImage = (e, projectId, index) => {
    e.stopPropagation();
    setCardImageIndices((prev) => ({
      ...prev,
      [projectId]: index,
    }));
  };

  return (
    <section id="portfolio" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-cyan-400 mb-4">
            Meu Trabalho
          </h2>
          <p className="text-slate-400 text-lg">
            Uma coleção de projetos nos quais trabalhei
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const currentCardIndex = cardImageIndices[project.id] || 0;
            const totalImages = project.details.images.length;

            return (
              <div
                key={project.id}
                onClick={() => openModal(project)}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-700">
                  <img
                    src={project.details.images[currentCardIndex]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {totalImages > 1 && (
                    <>
                      <button
                        onClick={(e) =>
                          prevCardImage(e, project.id, totalImages)
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/70 hover:bg-slate-800 text-white p-1 rounded-md transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) =>
                          nextCardImage(e, project.id, totalImages)
                        }
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/70 hover:bg-slate-800 text-white p-1 rounded-md transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {project.details.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => selectCardImage(e, project.id, i)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              i === currentCardIndex
                                ? "bg-cyan-400 w-4"
                                : "bg-slate-500"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-500 text-sm">Tecnologias:</span>
                    <div className="flex flex-wrap gap-3">
                      {project.details.technologies.map((tech, index) => {
                        const { icon: Icon, category } = tech;
                        const colors =
                          categoryColors[category] || categoryColors.default;

                        return (
                          <div
                            key={index}
                            className={`w-7 h-7 ${colors.bgColor} rounded-lg flex items-center justify-center shadow-md`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500 text-sm">Links:</span>
                    <div className="flex gap-3 pt-2">
                      {project.details.url && (
                        <a
                          href={project.details.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-7 h-7 bg-slate-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <Globe className="w-5 h-5 text-white" />
                        </a>
                      )}

                      {project.details.github && (
                        <a
                          href={project.details.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-7 h-7 bg-slate-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl">
              <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-4 flex justify-between items-center z-10">
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Imagem e controles */}
                  <div className="relative">
                    <div className="aspect-video bg-slate-700 rounded-xl overflow-hidden">
                      <img
                        src={selectedProject.details.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${
                          currentImageIndex + 1
                        }`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {selectedProject.details.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-lg transition-colors"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-lg transition-colors"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedProject.details.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                index === currentImageIndex
                                  ? "bg-cyan-400 w-8"
                                  : "bg-slate-600"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Detalhes do projeto */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">
                        Informação do projeto:
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {selectedProject.details.info}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">
                        Detalhes do projeto:
                      </h4>
                      <div className="space-y-2">
                        <div>
                          <span className="text-slate-500 text-sm">
                            Tecnologias:
                          </span>
                          <div className="flex flex-wrap items-center space-x-4">
                            {selectedProject.details.technologies.map(
                              (tech, index) => {
                                const { icon: Icon, category } = tech;
                                const colors =
                                  categoryColors[category] ||
                                  categoryColors.default;

                                return (
                                  <div
                                    key={index}
                                    className={`w-10 h-10 ${colors.bgColor} rounded-xl flex items-center justify-center shadow-lg`}
                                  >
                                    <Icon className="w-6 h-6 text-white" />
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                        <div>
                          <span className="text-slate-500 text-sm">Data:</span>
                          <p className="text-slate-300 text-sm">
                            {selectedProject.details.date}
                          </p>
                        </div>
                        <div>
                          <span className="text-slate-500 text-sm">URL:</span>
                          <p className="text-cyan-400 text-sm">
                            {selectedProject.details.url}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-3">
                        Share:
                      </h4>
                      <div className="flex gap-3">
                        <a
                          href={selectedProject.details.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-slate-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={selectedProject.details.github}
                          className="w-10 h-10 bg-slate-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
