import { Briefcase, CheckCircle } from "lucide-react";

export function HeroStats() {
  return (
    <div className="flex flex-wrap gap-6 text-sm">
      <div className="flex items-center gap-2">
        <Briefcase className="w-5 h-5 text-cyan-400" />
        <span className="text-slate-300">
          <span className="font-semibold text-white">Senior Developer</span>
          <span className="text-slate-500"> • 5+ anos</span>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-green-400" />
        <span className="text-slate-300">
          <span className="font-semibold text-white">10+ Projetos</span>
          <span className="text-slate-500"> • Completos</span>
        </span>
      </div>
    </div>
  );
}
