import { Code, Database, Shield, Users } from "lucide-react";

export function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Java 8+, Spring, Hibernate, APIs REST",
    },
    {
      icon: Database,
      title: "Bancos de Dados",
      description: "SQL Server, DB2, PostgreSQL, Oracle",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Fortify, SonarQube, Análise de Vulnerabilidades",
    },
    {
      icon: Users,
      title: "Metodologias",
      description: "Scrum, Cascata, Trabalho em Equipe",
    },
  ];

  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center py-20 bg-background text-text transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto w-full px-6 md:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-4 transition-colors duration-500">
            Sobre Mim
          </h2>
          <p className="text-secondary text-lg transition-colors duration-500">
            Desenvolvedor back-end apaixonado por tecnologia e inovação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Coluna esquerda */}
          <div className="space-y-6">
            <div className="rounded-2xl p-8 border border-accent bg-[color:var(--background)]/70 shadow-lg shadow-[color:var(--accent)]/10 backdrop-blur-sm transition-all duration-500">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Minha Trajetória
              </h3>

              <div className="space-y-4 text-text/90">
                <p>
                  Sou graduado em Análise e Desenvolvimento de Sistemas e atuo
                  como desenvolvedor back-end com foco em Java 8+, criando e
                  mantendo APIs REST robustas, escaláveis e seguras.
                </p>

                <p>
                  Comecei minha trajetória profissional em 2019 na área de
                  telecomunicações, evoluindo para suporte técnico em software
                  em 2021, e atualmente focado no desenvolvimento back-end com
                  ampla experiência em sistemas legados.
                </p>

                <p>
                  Tenho ampla experiência em bancos de dados relacionais e
                  domínio de frameworks essenciais para garantir performance,
                  segurança e estabilidade em sistemas críticos.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna direita */}
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 border border-accent bg-[color:var(--background)]/60 hover:bg-[color:var(--primary)]/10 hover:border-primary hover:shadow-[0_0_20px_var(--primary)]/20 hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-primary font-bold mb-2">{skill.title}</h4>
                <p className="text-text/80 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
