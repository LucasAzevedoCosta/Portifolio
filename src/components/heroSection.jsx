import { Briefcase, CheckCircle, ArrowRight, Download } from "lucide-react";

export function HeroSection() {
  const codeSnippet = `class Arthur:
    def __init__(self):
        self.name = "Lucas Cabral"
        self.skills = [
            "Python", "Java", "HTML",
            "React", "JavaScript", "CSS"
            "C", "SQL", "MongoDB"
        ]

    # Sempre aprendendo...`;
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">
                  <span className="font-semibold text-white">
                    Senior Developer
                  </span>
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
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
              </button>
              <button
                //onClick={() =>}
                className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-600 hover:border-cyan-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-slate-700/50"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-700/20 rounded-2xl blur-2xl"></div>

              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/40 overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-3 border-b border-slate-700/30">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-slate-500 ml-auto">
                    profile.py
                  </span>
                </div>

                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <div className="space-y-1.5 text-slate-300">
                    <div>
                      <span className="text-blue-400">class</span>
                      <span className="text-white"> Arthur:</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-400">def</span>
                      <span className="text-white"> </span>
                      <span className="text-yellow-400">__init__</span>
                      <span className="text-white">(</span>
                      <span className="text-cyan-400">self</span>
                      <span className="text-white">):</span>
                    </div>
                    <div className="ml-8">
                      <span className="text-cyan-400">self</span>
                      <span className="text-white">.name = </span>
                      <span className="text-green-400">"Lucas Cabral"</span>
                    </div>
                    <div className="ml-8">
                      <span className="text-cyan-400">self</span>
                      <span className="text-white">.skills = [</span>
                    </div>
                    <div className="ml-12">
                      <span className="text-green-400">"Python"</span>
                      <span className="text-white">, </span>
                      <span className="text-green-400">"Java"</span>
                      <span className="text-white">, </span>
                      <span className="text-green-400">"HTML"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="ml-12">
                      <span className="text-green-400">"React"</span>
                      <span className="text-white">, </span>
                      <span className="text-green-400">"JavaScript"</span>
                      <span className="text-white">, </span>
                      <span className="text-green-400">"CSS"</span>
                    </div>
                    <div className="ml-12">
                      <span className="text-green-400">"C"</span>
                      <span className="text-white">, </span>
                      <span className="text-green-400">"SQL"</span>
                      <span className="text-white">, </span>
                      <span className="text-green-400">"MongoDB"</span>
                    </div>
                    <div className="ml-8">
                      <span className="text-white">]</span>
                    </div>
                    <div className="mt-3 ml-4">
                      <span className="text-slate-500">
                        # Sempre aprendendo...
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
