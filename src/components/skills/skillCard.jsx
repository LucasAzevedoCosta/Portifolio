import { SkillProgressBar } from "./skillProgressBar";

export function SkillCard({ skill, categoryColors }) {
  const colors = categoryColors[skill.category] || categoryColors.default;

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 ${colors.bgColor} rounded-xl flex items-center justify-center shadow-lg`}
          >
            <skill.icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{skill.name}</h3>
            <div className="text-sm text-cyan-400 flex flex-col">
              <span>{skill.experience}</span>
              <span className="text-sm text-cyan-400">
                {skill.projects} {skill.projects === 1 ? "projeto" : "projetos"}
              </span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <span className="text-2xl font-bold text-white">{skill.level}%</span>
          <p className="text-xs text-slate-500">Proficiência</p>
        </div>
      </div>

      <SkillProgressBar level={skill.level} colors={colors} />
    </div>
  );
}
