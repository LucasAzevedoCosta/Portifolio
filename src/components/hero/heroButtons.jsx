import { ArrowRight, Download } from "lucide-react";

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <button
        onClick={() =>
          document
            .getElementById("resumo")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
      >
        Ver experiência
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      <a
        href="/Currículo-LucasAzevedo.pdf"
        download
        className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-600 hover:border-cyan-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-slate-700/50"
      >
        <Download className="w-5 h-5" />
        Baixar Currículo
      </a>
    </div>
  );
}
