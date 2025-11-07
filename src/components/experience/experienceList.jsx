import { ExperienceCard } from "./experienceCard";

export function ExperienceList({ experiences }) {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} exp={exp} />
      ))}
    </div>
  );
}
