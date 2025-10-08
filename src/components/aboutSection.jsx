import { Code, Database, Shield, Users } from 'lucide-react';

export function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: 'Desenvolvimento',
      description: 'Java 8+, Spring, Hibernate, APIs REST'
    },
    {
      icon: Database,
      title: 'Bancos de Dados',
      description: 'SQL Server, DB2, PostgreSQL, Oracle'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Fortify, SonarQube, Análise de Vulnerabilidades'
    },
    {
      icon: Users,
      title: 'Metodologias',
      description: 'Scrum, Cascata, Trabalho em Equipe'
    }
  ];

  return (
    <section id="sobre" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-cyan-400 mb-4">Sobre Mim</h2>
        <p className="text-slate-400 text-lg">
          Desenvolvedor back-end apaixonado por tecnologia e inovação
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Minha Trajetória</h3>

            <div className="space-y-4 text-slate-300">
              <p>
                Sou graduado em Análise e Desenvolvimento de Sistemas e atuo como
                desenvolvedor back-end com foco em Java 8+, criando e mantendo APIs REST
                robustas, escaláveis e seguras.
              </p>

              <p>
                Comecei minha trajetória profissional em 2019 na área de telecomunicações,
                evoluindo para suporte técnico em software em 2021, e atualmente focado no
                desenvolvimento back-end com ampla experiência em sistemas legados.
              </p>

              <p>
                Tenho ampla experiência em bancos de dados relacionais e domínio de frameworks
                essenciais para garantir performance, segurança e estabilidade em sistemas
                críticos.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105"
            >
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-white font-bold mb-2">{skill.title}</h4>
              <p className="text-slate-400 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      </div>
    </section>
  );
}
