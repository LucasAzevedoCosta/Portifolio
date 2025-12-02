import { SkillCard } from "./skillCard";

export function SkillsGrid({ skills, categoryColors, activeCategory }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill) => (
        <SkillCard
          key={skill.name + activeCategory}
          skill={skill}
          categoryColors={categoryColors}
        />
      ))}
    </div>
  );
}
