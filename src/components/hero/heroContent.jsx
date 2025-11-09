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
          <span className="text-slate-400">Crio soluções</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            eficientes e escaláveis
          </span>
        </h2>
      </div>

      <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
        Sou desenvolvedor Back-End com experiência em Java, TypeScript e Node.js.
        Atualmente estagiando na Secretaria de Educação, do Esporte e do Lazer do Rio Grande do Norte (SEEC/RN),
        onde aplico e aprimoro meus conhecimentos no desenvolvimento e manutenção de sistemas internos.
        Busco evoluir como desenvolvedor Full Stack, ampliando meu domínio em React e outras tecnologias modernas.
      </p>

      <HeroStats />
      <HeroButtons />
    </div>
  );
}
