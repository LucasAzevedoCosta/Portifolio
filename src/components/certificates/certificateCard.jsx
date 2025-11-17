import { Award, Calendar, ExternalLink } from "lucide-react";

export function CertificateCard({ cert }) {
  return (
    <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105">
      <div className="relative h-48 overflow-hidden bg-slate-700">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 w-12 h-12 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Award className="w-6 h-6 text-cyan-400" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 min-h-[3.5rem]">
          {cert.title}
        </h3>

        <div className="space-y-2 mb-4">
          <p className="text-sm text-slate-400">
            <span className="text-cyan-400 font-semibold">Emissor:</span>{" "}
            {cert.issuer}
          </p>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Calendar className="w-4 h-4 text-cyan-400" />
            {cert.date}
          </div>

          <p className="text-xs text-slate-500">
            Credencial:{" "}
            <span className="text-slate-400 font-mono">{cert.credential}</span>
          </p>
        </div>

        {cert.url ? (
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors group/link"
          >
            Verificar credencial
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        ) : (
          <p className="text-sm text-slate-400">Credencial não disponível para verificação.</p>
        )}
      </div>
    </div>
  );
}
