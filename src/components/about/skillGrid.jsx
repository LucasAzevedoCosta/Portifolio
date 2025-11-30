import { SkillCard } from "./skillCard";

export function SkillGrid({ skills }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  );
}
