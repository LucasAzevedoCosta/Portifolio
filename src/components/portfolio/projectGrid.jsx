import { useState } from "react";
import { ProjectCard } from "./projectCard";

export function ProjectGrid({ projects, onOpenModal }) {
  const [cardImageIndices, setCardImageIndices] = useState({});

  const updateImageIndex = (projectId, index) => {
    setCardImageIndices((prev) => ({
      ...prev,
      [projectId]: index,
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          currentImageIndex={cardImageIndices[project.id] || 0}
          onChangeImage={(index) => updateImageIndex(project.id, index)}
          onClick={() => onOpenModal(project)}
        />
      ))}
    </div>
  );
}
