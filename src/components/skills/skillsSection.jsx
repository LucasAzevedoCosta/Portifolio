import { useState } from "react";
import { skills } from "../../utils/lists/skills";
import { categories } from "../../utils/lists/categories";
import { categoryColors } from "../../utils/lists/categoryColors";

import { SkillsHeader } from "./skillsHeader";
import { SkillsCategories } from "./skillsCategories";
import { SkillsGrid } from "./skillsGrid";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto w-full">
        <SkillsHeader />
        <SkillsCategories
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <SkillsGrid skills={filteredSkills} categoryColors={categoryColors} />
      </div>
    </section>
  );
}
