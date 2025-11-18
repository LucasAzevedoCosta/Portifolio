import { X, ExternalLink, Github } from "lucide-react";
import { categoryColors } from "../../utils/lists/categoryColors";
import { ProjectModalCarousel } from "./projectModalCarousel";

export function ProjectModal({ project, onClose }) {
  const { details } = project;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-slate-700 shadow-2xl">
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-4 flex justify-between items-center z-10">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-8">
          {/* Carrossel de Imagens com um tamanho maior */}
          <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
            <ProjectModalCarousel images={details.images} />
          </div>

          {/* Conteúdo do projeto */}
          <div className="space-y-6">
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">
                Informação do projeto:
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {details.info}
              </p>
            </div>

            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">
                Detalhes do projeto:
              </h4>
              <div className="space-y-2">
                <div>
                  <span className="text-slate-500 text-sm">Tecnologias:</span>
                  <div className="flex flex-wrap items-center space-x-4">
                    {details.technologies.map((tech, i) => {
                      const { icon: Icon, category } = tech;
                      const colors =
                        categoryColors[category] || categoryColors.default;
                      return (
                        <div
                          key={i}
                          className={`w-10 h-10 ${colors.bgColor} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 text-sm">Data:</span>
                  <p className="text-slate-300 text-sm">{details.date}</p>
                </div>

                {details.url && (
                  <div>
                    <span className="text-slate-500 text-sm">URL:</span>
                    <p className="text-cyan-400 text-sm">{details.url}</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-cyan-400 font-semibold mb-3">Share:</h4>
              <div className="flex gap-3">
                {details.url && (
                  <a
                    href={details.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                )}

                {details.github && (
                  <a
                    href={details.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
