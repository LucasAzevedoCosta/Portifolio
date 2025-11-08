import { AboutIntro } from "./aboutIntro";
import { AboutTrajectory } from "./aboutTrajectory";
import { SkillGrid } from "./skillGrid";
import { aboutAbilities } from "../../utils/lists/aboutAbilities";
import { aboutText } from "../../utils/lists/aboutText";

export function AboutSection() {
  return (
    <section id="sobre" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto w-full">
        <AboutIntro title={aboutText.title} subtitle={aboutText.subtitle} />
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AboutTrajectory
            title={aboutText.trajectoryTitle}
            paragraphs={aboutText.paragraphs}
          />
          <SkillGrid skills={aboutAbilities} />
        </div>
      </div>
    </section>
  );
}
