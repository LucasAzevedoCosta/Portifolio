import { FaJava } from "react-icons/fa";
import { SiPostgresql, SiSpringboot, SiSwagger } from "react-icons/si";

export const projects = [
  {
    id: 1,
    title: "Sistema de Gestão Empresarial",
    description: "Plataforma completa para gestão de processos empresariais",
    image:
      "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      images: [
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
  },
  {
    id: 2,
    title: "API de Integração",
    description: "API REST para integração entre sistemas legados",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Backend",
    details: {
      info: "API desenvolvida para facilitar a comunicação entre sistemas legados e novas plataformas.",
      technologies: [
        { icon: FaJava, category: "backend" },
        { icon: SiSpringboot, category: "backend" },
        { icon: SiPostgresql, category: "backend" },
        { icon: SiSwagger, category: "backend" },
      ],
      date: "20/06/2024",
      url: "https://www.example.com.br",
      images: [
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
  },
  {
    id: 3,
    title: "Microserviços de Pagamento",
    description:
      "Arquitetura de microserviços para processamento de pagamentos",
    image:
      "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Microservices",
    details: {
      info: "Solução escalável para processamento de pagamentos com alta disponibilidade e segurança.",
      technologies: [
        { icon: FaJava, category: "backend" },
        { icon: SiSpringboot, category: "backend" },
        { icon: SiPostgresql, category: "backend" },
        { icon: SiSwagger, category: "backend" },
      ],
      date: "10/09/2024",
      url: "https://www.example.com.br",
      images: [
        "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
  },
];
