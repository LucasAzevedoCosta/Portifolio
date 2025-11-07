import { CertificateCard } from "./certificateCard";

export function CertificateGrid({ certificates }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((cert, index) => (
        <CertificateCard key={index} cert={cert} />
      ))}
    </div>
  );
}
