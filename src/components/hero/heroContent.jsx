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
          <span className="text-slate-400">Desenvolvedor Full Stack</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            focado em qualidade e performance
          </span>
        </h2>
      </div>

      <p className="text-lg text-slate-400 leading-relaxed max-w-xl space-y-4 text-justify">
        Sou desenvolvedor Full Stack com experiência em Java, TypeScript,
        Node.js e Next.js, atuando tanto na criação quanto na manutenção de
        aplicações modernas.
        <br />
        <br />
        Além disso, encontro-me em processo de aprofundamento técnico em React e
        arquitetura de software, a fim de entregar soluções progressivamente
        mais completas, robustas e de elevada qualidade.
        <br />
        <br />
        Dessa forma, consigo alinhar inovação, organização e excelência em cada
        projeto desenvolvido, mantendo assim um compromisso constante com a
        evolução profissional.
      </p>

      <HeroStats />
      <HeroButtons />
    </div>
  );
}
