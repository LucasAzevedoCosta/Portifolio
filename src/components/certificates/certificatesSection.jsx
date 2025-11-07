import { Award } from "lucide-react";
import { certificates } from "../../utils/lists/certificates";
import { CertificateGrid } from "./certificateGrid";
import { CertificateSummary } from "./certificateSummary";

export function CertificatesSection() {
  return (
    <section id="certificados" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">
            QUALIFICAÇÕES
          </p>
          <h2 className="text-5xl font-bold text-white mb-4">Certificações</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Certificações profissionais que validam minha expertise técnica
          </p>
        </div>

        {/* Grid de certificados */}
        <CertificateGrid certificates={certificates} />

        {/* Resumo final */}
        <CertificateSummary total={certificates.length} />
      </div>
    </section>
  );
}
