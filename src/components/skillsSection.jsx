import { useState } from "react";
import { skills } from "../utils/lists/skills";
import { categories } from "../utils/lists/categories";
import { categoryColors } from "../utils/lists/categoryColors";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="oque-faco" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">
            EXPERTISE
          </p>
          <h2 className="text-5xl font-bold text-white mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Uma visão abrangente da minha experiência técnica em backend, banco
            de dados e DevOps
          </p>
        </div>

        {/* Botões de categoria */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/30"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Lista de habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => {
            const colors =
              categoryColors[skill.category] || categoryColors.default;

            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 ${colors.bgColor} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <skill.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {skill.name}
                      </h3>
                      <div className="text-sm text-cyan-400 flex flex-col">
                        <span>{skill.experience}</span>
                        <span className="text-sm text-cyan-400">
                          {skill.projects}{" "}
                          {skill.projects === 1 ? "projeto" : "projetos"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-white">
                      {skill.level}%
                    </span>
                    <p className="text-xs text-slate-500">Proficiência</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${colors.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
