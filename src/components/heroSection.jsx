import { Briefcase, CheckCircle, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-slate-300">
                Disponível para projetos
              </span>
            </div>

            <div>
              <p className="text-lg text-slate-400 mb-3">Olá, sou</p>
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-4">
                Seu Nome
                <span className="wave inline-block ml-2">👋</span>
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
                    .getElementById("depoimentos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                Ver experiência
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-600 hover:border-cyan-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-slate-700/50"
              >
                Entre em contato
              </button>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl blur-3xl"></div>

              <div className="absolute inset-0 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl flex items-center justify-center overflow-hidden">
                <svg
                  className="w-full h-full p-8 opacity-80"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#06b6d4", stopOpacity: 0.8 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#2563eb", stopOpacity: 0.3 }}
                      />
                    </linearGradient>
                  </defs>

                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="60"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="40"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    opacity="0.7"
                  />

                  <g opacity="0.6">
                    <path
                      d="M100 30 Q130 40 140 70"
                      stroke="url(#grad1)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M100 170 Q130 160 140 130"
                      stroke="url(#grad1)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M30 100 Q40 70 70 60"
                      stroke="url(#grad1)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M170 100 Q160 130 130 140"
                      stroke="url(#grad1)"
                      strokeWidth="2"
                      fill="none"
                    />
                  </g>

                  <circle
                    cx="100"
                    cy="100"
                    r="20"
                    fill="url(#grad1)"
                    opacity="0.6"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="15"
                    fill="url(#grad1)"
                    opacity="0.4"
                  />
                </svg>

                <style>{`
                  @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                  }
                  @keyframes pulse-glow {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.7; }
                  }
                  svg {
                    animation: float 6s ease-in-out infinite;
                  }
                  circle:nth-child(3) {
                    animation: pulse-glow 3s ease-in-out infinite;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        .wave {
          animation: wave 1s ease-in-out infinite;
          display: inline-block;
          transform-origin: 70% 70%;
        }
      `}</style>
    </section>
  );
}
