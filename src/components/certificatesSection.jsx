import { Award, Calendar, ExternalLink } from 'lucide-react';

export function CertificatesSection() {
  const certificates = [
    {
      title: 'Oracle Certified Professional, Java SE 11 Developer',
      issuer: 'Oracle',
      date: 'Dezembro 2023',
      credential: 'OC1234567',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://www.oracle.com/certifications',
      color: 'from-red-600 to-red-500'
    },
    {
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: 'Setembro 2023',
      credential: 'AWS-ASA-12345',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://aws.amazon.com/certification',
      color: 'from-amber-600 to-amber-500'
    },
    {
      title: 'Spring Professional Certification',
      issuer: 'VMware',
      date: 'Junho 2023',
      credential: 'SPRING-2023-456',
      image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://spring.io/certification',
      color: 'from-green-600 to-green-500'
    },
    {
      title: 'PostgreSQL 14 Associate Certification',
      issuer: 'PostgreSQL',
      date: 'Abril 2023',
      credential: 'PG14-ASSOC-789',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://www.postgresql.org',
      color: 'from-blue-600 to-blue-500'
    },
    {
      title: 'Docker Certified Associate (DCA)',
      issuer: 'Docker Inc.',
      date: 'Janeiro 2023',
      credential: 'DCA-2023-321',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://www.docker.com/certification',
      color: 'from-cyan-600 to-cyan-500'
    },
    {
      title: 'Certified Secure Software Lifecycle Professional',
      issuer: 'ISC2',
      date: 'Novembro 2022',
      credential: 'CSSLP-654',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://www.isc2.org/Certifications/CSSLP',
      color: 'from-purple-600 to-purple-500'
    }
  ];

  return (
    <section id="resumo" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">QUALIFICAÇÕES</p>
          <h2 className="text-5xl font-bold text-white mb-4">Certificações</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Certificações profissionais que validam minha expertise técnica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden bg-slate-700">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-60`}></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 min-h-[3.5rem]">
                  {cert.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <p className="text-sm text-slate-400">
                    <span className="text-cyan-400 font-semibold">Emissor:</span> {cert.issuer}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    {cert.date}
                  </div>
                  <p className="text-xs text-slate-500">
                    Credencial: <span className="text-slate-400 font-mono">{cert.credential}</span>
                  </p>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors group/link"
                >
                  Verificar credencial
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-full px-8 py-4">
            <Award className="w-6 h-6 text-cyan-400" />
            <div className="text-left">
              <p className="text-2xl font-bold text-white">{certificates.length}+</p>
              <p className="text-sm text-slate-400">Certificações Profissionais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}