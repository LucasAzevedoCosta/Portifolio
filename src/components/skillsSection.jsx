import { useState } from 'react';
import { DiMsqlServer } from 'react-icons/di';
import { SiDocker, SiGit, SiHibernate, SiJavascript, SiOracle, SiPostgresql, SiReact, SiSonarqube, SiSpringboot, SiSwagger } from 'react-icons/si';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'devops', label: 'DevOps' },
    { id: 'frontend', label: 'Frontend' }
  ];

  const skills = [
    {
      name: 'Java',
      category: 'backend',
      level: 95,
      experience: '5+ anos',
      icon: SiJavascript,
      color: 'from-red-600 to-red-500',
      bgColor: 'bg-red-600',
    },
    {
      name: 'Spring Boot',
      category: 'backend',
      level: 90,
      experience: '4+ anos',
      icon: SiSpringboot,
      color: 'from-green-600 to-green-500',
      bgColor: 'bg-green-600',
    },
    {
      name: 'Hibernate',
      category: 'backend',
      level: 85,
      experience: '4+ anos',
      icon: SiHibernate,
      color: 'from-amber-600 to-amber-500',
      bgColor: 'bg-amber-600',
    },
    {
      name: 'PostgreSQL',
      category: 'database',
      level: 90,
      experience: '4+ anos',
      icon: SiPostgresql,
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-blue-600',
    },
    {
      name: 'SQL Server',
      category: 'database',
      level: 88,
      experience: '4+ anos',
      icon: DiMsqlServer,
      color: 'from-red-600 to-red-500',
      bgColor: 'bg-red-600',
    },
    {
      name: 'Oracle DB',
      category: 'database',
      level: 80,
      experience: '3+ anos',
      icon: SiOracle,
      color: 'from-orange-600 to-orange-500',
      bgColor: 'bg-orange-600',
    },
    {
      name: 'Docker',
      category: 'devops',
      level: 85,
      experience: '3+ anos',
      icon: SiDocker,
      color: 'from-cyan-600 to-cyan-500',
      bgColor: 'bg-cyan-600',
    },
    {
      name: 'REST API',
      category: 'backend',
      level: 95,
      experience: '5+ anos',
      icon: SiSwagger,
      color: 'from-purple-600 to-purple-500',
      bgColor: 'bg-purple-600',
    },
    {
      name: 'Git',
      category: 'devops',
      level: 90,
      experience: '5+ anos',
      icon: SiGit,
      color: 'from-slate-600 to-slate-500',
      bgColor: 'bg-slate-600',
    },
    {
      name: 'SonarQube',
      category: 'devops',
      level: 82,
      experience: '2+ anos',
      icon: SiSonarqube,
      color: 'from-indigo-600 to-indigo-500',
      bgColor: 'bg-indigo-600',
    },
    {
      name: 'React',
      category: 'frontend',
      level: 75,
      experience: '2+ anos',
      icon: SiReact,
      color: 'from-cyan-600 to-cyan-500',
      bgColor: 'bg-cyan-600',
    },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="oque-faco" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">EXPERTISE</p>
          <h2 className="text-5xl font-bold text-white mb-4">Habilidades Técnicas</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Uma visão abrangente da minha experiência técnica em backend, banco de dados e DevOps
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 ${skill.bgColor} rounded-xl flex items-center justify-center shadow-lg`}>
                    <skill.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                    <span className="text-sm text-cyan-400">{skill.experience}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-white">{skill.level}%</span>
                  <p className="text-xs text-slate-500">Proficiência</p>
                </div>
              </div>

              <div className="relative">
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}