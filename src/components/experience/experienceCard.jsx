import { Briefcase, MapPin } from "lucide-react";
import { ClockIcon } from "./clockIcon";

export function ExperienceCard({ exp }) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{exp.position}</h3>
              <p className="text-cyan-400 font-semibold text-sm">
                {exp.company}
              </p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="bg-red-600/20 border border-red-600/30 text-red-400 text-xs font-bold px-3 py-1 rounded-full inline-block">
            {exp.period}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
        <span className="flex items-center gap-1">
          <ClockIcon className="w-4 h-4 text-cyan-400" />
          {exp.duration}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-4 h-4 text-cyan-400" />
          {exp.location}
        </span>
        <span className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
          {exp.type}
        </span>
      </div>

      <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

      <div className="mb-4">
        <p className="text-sm text-slate-500 mb-2">Tecnologias:</p>
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((TechIcon, idx) => (
            <div
              key={idx}
              className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
            >
              <TechIcon className="w-5 h-5 text-white" />
            </div>
          ))}
        </div>
      </div>

      {exp.highlights.length > 0 && (
        <div>
          <p className="text-sm text-slate-500 mb-2">Destaques:</p>
          <ul className="space-y-1">
            {exp.highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-slate-300"
              >
                <span className="text-cyan-400 font-bold mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
