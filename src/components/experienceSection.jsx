import {
  Briefcase,
  Calendar,
  MapPin,
  Mail,
  Github,
  Download,
} from "lucide-react";
import { personalInfo } from "../utils/lists/personalInfo";
import { experiences } from "../utils/lists/experiences";

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 sticky top-24">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
                  <img
                    src="https://github.com/lucasazevedocosta.png"
                    alt=""
                    className="w-20 h-20 rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-cyan-400 font-semibold mb-4">
                  {personalInfo.title}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {personalInfo.description}
                </p>
              </div>

              <div className="space-y-4 border-t border-slate-700 pt-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-slate-500">Data de Nascimento</p>
                    <p className="text-slate-300 font-medium">
                      {personalInfo.birthDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-slate-500">Localização</p>
                    <p className="text-slate-300 font-medium">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-slate-300 font-medium text-sm truncate hover:text-cyan-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500">GitHub</p>
                    <a
                      href={`https://${personalInfo.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 font-medium text-sm truncate hover:text-cyan-400 transition-colors"
                    >
                      {personalInfo.github}
                    </a>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30">
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {exp.position}
                          </h3>
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
                      <Clock className="w-4 h-4 text-cyan-400" />
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

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm text-slate-500 mb-2">Tecnologias:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((TechIcon, idx) => (
                        <div
                          key={idx}
                          className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-2xl flex items-center justify-center"
                        >
                          <TechIcon className="w-5 h-5 mr-1 text-cyan-400" />
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
                            <span className="text-cyan-400 font-bold mt-1">
                              •
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Clock({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
