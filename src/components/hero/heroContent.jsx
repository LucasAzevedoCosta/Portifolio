import { Briefcase, CheckCircle } from "lucide-react";
import { HeroButtons } from "./heroButtons";
import { HeroStats } from "./heroStats";

export function HeroContent() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg text-slate-400 mb-3">Olá, sou</p>
        <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-4">
          Lucas Azevedo
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-slate-400">Construo experiências</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            digitais robustas
          </span>
        </h2>
      </div>

      <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
        Desenvolvedor Java especializado em criar aplicações enterprise
        escaláveis. Com mais de 5 anos de experiência em arquitetura de
        microserviços, APIs REST e otimização de performance.
      </p>

      <HeroStats />
      <HeroButtons />
    </div>
  );
}
