import { personalInfo } from "../../utils/lists/personalInfo";
import { experiences } from "../../utils/lists/experiences";
import { ExperienceProfileCard } from "./experienceProfileCard";
import { ExperienceList } from "./experienceList";

export function ExperienceSection() {
  return (
    <section id="resumo" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">
            TRAJETÓRIA
          </p>
          <h2 className="text-5xl font-bold text-white mb-4">
            Experiência Profissional
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Minha jornada profissional no desenvolvimento de software
          </p>
        </div>

        {/* Layout de duas colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ExperienceProfileCard personalInfo={personalInfo} />
          </div>

          <div className="lg:col-span-2">
            <ExperienceList experiences={experiences} />
          </div>
        </div>
      </div>
    </section>
  );
}
