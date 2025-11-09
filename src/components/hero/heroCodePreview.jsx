export function HeroCodePreview() {
  return (
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
            <span className="text-xs text-slate-500 ml-auto">profile.py</span>
          </div>

          <div className="p-6 font-mono text-sm overflow-x-auto">
            <div className="space-y-1.5 text-slate-300">
              <div>
                <span className="text-blue-400">class</span>
                <span className="text-white"> LucasAzevedo:</span>
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
                <span className="text-green-400">"Lucas Azevedo Costa"</span>
              </div>
              <div className="ml-8">
                <span className="text-cyan-400">self</span>
                <span className="text-white">.role = </span>
                <span className="text-green-400">"Desenvolvedor Back-End"</span>
              </div>
              <div className="ml-8">
                <span className="text-white">.skills = [</span>
              </div>
              <div className="ml-12">
                <span className="text-green-400">"Java"</span>,{" "}
                <span className="text-green-400">"TypeScript"</span>,{" "}
                <span className="text-green-400">"React"</span>,{" "}
              </div>
              <div className="ml-12">
                <span className="text-green-400">"PostgreSQL"</span>,{" "}
                <span className="text-green-400">"Docker"</span>,{" "}
                <span className="text-green-400">"API REST"</span>
              </div>
              <div className="ml-8">
                <span className="text-white">]</span>
              </div>
              <div className="mt-3 ml-4">
                <span className="text-slate-500">
                  # Sempre aprendendo e evoluindo...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
