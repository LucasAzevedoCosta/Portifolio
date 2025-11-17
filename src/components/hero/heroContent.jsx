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
        Sou desenvolvedor Full Stack com experiência em Java, TypeScript,
        Node.js e Next.js. Atuo na criação e manutenção de aplicações modernas,
        sempre buscando eficiência e boas práticas. Atualmente, estou
        aprofundando meus conhecimentos em React e arquitetura de software para
        entregar soluções cada vez mais completas e de alta qualidade.
      </p>

      <HeroStats />
      <HeroButtons />
    </div>
  );
}
