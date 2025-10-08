import { scrollToSection } from "../utils/scrollUtils";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Bem-vindo ao meu portfólio
        </h2>
        <p className="text-xl text-slate-400 mb-8">
          Desenvolvedor back-end apaixonado por criar soluções robustas e
          escaláveis
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => scrollToSection("sobre")}
            className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-900 font-semibold py-3 px-8 rounded-full shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:shadow-cyan-500/50 hover:scale-105"
          >
            Conheça meu trabalho
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Entre em contato
          </button>
        </div>
      </div>
    </section>
  );
}
