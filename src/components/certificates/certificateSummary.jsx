import { Award } from "lucide-react";

export function CertificateSummary({ total }) {
  return (
    <div className="mt-12 text-center">
      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-full px-8 py-4">
        <Award className="w-6 h-6 text-cyan-400" />
        <div className="text-left">
          <p className="text-2xl font-bold text-white">{total}+</p>
          <p className="text-sm text-slate-400">Certificações Profissionais</p>
        </div>
      </div>
    </div>
  );
}
