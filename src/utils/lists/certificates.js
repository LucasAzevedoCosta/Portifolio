import estruturaDeDados from "./photos/certificates/Captura de tela de 2025-11-01 11-27-11.png";
import cshap from "./photos/certificates/Captura de tela de 2025-11-01 11-27-50.png";
import sla from "./photos/certificates/Captura de tela de 2025-11-01 11-28-31.png";


export const certificates = [
    {
      title: 'Oracle Certified Professional, Java SE 11 Developer',
      issuer: 'Oracle',
      date: 'Dezembro 2023',
      credential: 'OC1234567',
      image: cshap,
      url: 'https://www.oracle.com/certifications',
      color: 'from-red-600 to-red-500'
    },
    {
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: 'Setembro 2023',
      credential: 'AWS-ASA-12345',
      image: estruturaDeDados,
      url: 'https://aws.amazon.com',
      color: 'from-amber-600 to-amber-500'
    },
    {
      title: 'Spring Professional Certification',
      issuer: 'VMware',
      date: 'Junho 2023',
      credential: 'SPRING-2023-456',
      image: sla,
      url: 'https://spring.io/certification',
      color: 'from-green-600 to-green-500'
    },
  ];