export function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <div
      className="
        bg-gradient-to-br from-slate-800 to-slate-900
        rounded-2xl p-6 border border-slate-700
        hover:border-cyan-500 transition-all duration-300
        hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105
        flex flex-col

        h-auto
        sm:h-48
        md:h-50
        lg:h-54
      "
    >
      <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>

      <h4 className="text-white font-bold mb-2">{skill.title}</h4>

      <p className="text-slate-400 text-sm break-words leading-relaxed">
        {skill.description}
      </p>
    </div>
  );
}
