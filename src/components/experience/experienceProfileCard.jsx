import { Calendar, MapPin, Mail, Github, Download } from "lucide-react";

export function ExperienceProfileCard({ personalInfo }) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 sticky top-24">
      <div className="mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30">
          <img
            src="https://github.com/lucasazevedocosta.png"
            alt={personalInfo.name}
            className="w-20 h-20 rounded-2xl"
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          {personalInfo.name}
        </h3>
        <p className="text-cyan-400 font-semibold mb-4">{personalInfo.title}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 text-justify">
          {personalInfo.description}
        </p>
      </div>

      <div className="space-y-4 border-t border-slate-700 pt-6">
        <ProfileInfo
          icon={<Calendar className="w-5 h-5 text-cyan-400" />}
          label="Data de Nascimento"
          value={personalInfo.birthDate}
        />
        <ProfileInfo
          icon={<MapPin className="w-5 h-5 text-cyan-400" />}
          label="Localização"
          value={personalInfo.location}
        />
        <ProfileInfo
          icon={<Mail className="w-5 h-5 text-cyan-400" />}
          label="Email"
          value={
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-300 font-medium text-sm truncate hover:text-cyan-400 transition-colors"
            >
              {personalInfo.email}
            </a>
          }
        />
        <ProfileInfo
          icon={<Github className="w-5 h-5 text-cyan-400" />}
          label="GitHub"
          value={
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 font-medium text-sm truncate hover:text-cyan-400 transition-colors"
            >
              {personalInfo.github}
            </a>
          }
        />
      </div>

      <a
        href="/Currículo-LucasAzevedo.pdf"
        download
        className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
      >
        <Download className="w-5 h-5" />
        Baixar Currículo
      </a>
    </div>
  );
}

function ProfileInfo({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div className="flex-1 min-w-0">
        <p className="text-xs text-slate-500">{label}</p>
        <div className="text-slate-300 font-medium text-sm truncate">
          {value}
        </div>
      </div>
    </div>
  );
}
