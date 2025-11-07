import { Github, Globe } from "lucide-react";
import { ProjectImageCarousel } from "./projectImageCarousel";
import { categoryColors } from "../../utils/lists/categoryColors";

export function ProjectCard({ project, currentImageIndex, onChangeImage, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
    >
      <ProjectImageCarousel
        images={project.details.images}
        currentIndex={currentImageIndex}
        onChange={onChangeImage}
      />

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <p className="text-slate-400 text-sm">{project.description}</p>
        </div>

        <div>
          <span className="text-slate-500 text-sm">Tecnologias:</span>
          <div className="flex flex-wrap gap-3">
            {project.details.technologies.map((tech, index) => {
              const { icon: Icon, category } = tech;
              const colors = categoryColors[category] || categoryColors.default;

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
}
