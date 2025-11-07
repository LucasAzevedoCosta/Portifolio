import { SkillCard } from "./skillCard";

export function SkillsGrid({ skills, categoryColors }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} categoryColors={categoryColors} />
      ))}
    </div>
  );
}
