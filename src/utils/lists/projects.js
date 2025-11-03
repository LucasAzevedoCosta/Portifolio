import { FaJava } from "react-icons/fa";
import { SiPostgresql, SiSpringboot, SiSwagger } from "react-icons/si";

import vagas from "./photos/projects/vagas.jpeg";
import img1 from "./photos/projects/1756992559190.jpeg";
import img2 from "./photos/projects/1756992559299.jpeg";
import img3 from "./photos/projects/1756992559364.jpeg";
import img4 from "./photos/projects/1756992559438.jpeg";
import img5 from "./photos/projects/1756992559488.jpeg";
import captura from "./photos/projects/Captura de tela de 2025-11-03 17-04-21.png";

export const projects = [
  {
    id: 1,
    title: "Sistema de Gestão Empresarial",
    description: "Plataforma completa para gestão de processos empresariais",
    image: vagas,
    category: "Web Application",
    details: {
      info: "Sistema robusto desenvolvido para gerenciar processos empresariais com foco em escalabilidade e performance.",
      technologies: [
        { icon: FaJava, category: "backend" },
        { icon: SiSpringboot, category: "backend" },
        { icon: SiPostgresql, category: "database" },
        { icon: SiSwagger, category: "devops" },
      ],
      date: "15/08/2024",
      url: "https://www.example.com.br",
      github: "https://github.com/seuusuario/sistema-gestao",
      images: [vagas],
    },
  },
  {
    id: 2,
    title: "API de Integração",
    description: "API REST para integração entre sistemas legados",
    image: img1,
    category: "Backend",
    details: {
      info: "Solução escalável para processamento de pagamentos com alta disponibilidade e segurança.rquitetura de microserviços para processamento de pagamentosArquitetura de microserviços para processamento de pagamentosArquitetura de microserviços para processamento de pagamentosArquitetura de microserviços para processamento de pagamentos",
      technologies: [
        { icon: FaJava, category: "backend" },
        { icon: SiSpringboot, category: "backend" },
        { icon: SiPostgresql, category: "database" },
        { icon: SiSwagger, category: "devops" },
      ],
      date: "20/06/2024",
      url: "https://www.example.com.br",
      github: "https://github.com/seuusuario/sistema-gestao",
      images: [img1, img2, img3, img4, img5],
    },
  },
  {
    id: 3,
    title: "Microserviços de Pagamento",
    description: "Arquitetura de microserviços para processamento de pagamentos",
    image: captura,
    category: "Microservices",
    details: {
      info: "Solução escalável para processamento de pagamentos com alta disponibilidade e segurança.rquitetura de microserviços para processamento de pagamentosArquitetura de microserviços para processamento de pagamentosArquitetura de microserviços para processamento de pagamentosArquitetura de microserviços para processamento de pagamentos",
      technologies: [
        { icon: FaJava, category: "backend" },
        { icon: SiSpringboot, category: "backend" },
        { icon: SiPostgresql, category: "database" },
        { icon: SiSwagger, category: "devops" },
      ],
      date: "10/09/2024",
      url: "https://www.example.com.br",
      github: "https://github.com/seuusuario/sistema-gestao",
      images: [captura],
    },
  },
];
