import { FaLaravel, FaNodeJs, FaPhp, FaVuejs } from "react-icons/fa";
import {
  SiDocker,
  SiNestjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export const experiences = [
  {
    position: "Desenvolvedor Full Stack",
    company: "Telepesquisa",
    period: "Jun/2026 - Presente",
    duration: "Atual",
    location: "Natal, RN",
    type: "Híbrido",
    description:
      "Atuação como desenvolvedor full stack em equipe enxuta de 3 desenvolvedores, participando da definição de requisitos e entregas. Desenvolvimento de sistema de inbox integrado ao painel administrativo com Laravel e Vue.js, e criação de chatbot de atendimento para WhatsApp com integração à API da OpenAI.",
    technologies: [FaPhp, FaLaravel, FaVuejs, SiPostgresql, SiDocker],
    highlights: [
      "Desenvolvimento de sistema de inbox integrado substituindo o Chatwoot, economizando 3 a 4 minutos por ação para a equipe de atendimento",
      "Criação de chatbot de atendimento para WhatsApp com IA, com atendimentos 100% automatizados e comportamento configurável por empresa",
      "Atuação de ponta a ponta (back-end, front-end e integrações com IA) junto ao consultor de projetos",
    ],
  },
  {
    position: "Estagiário em Desenvolvimento de Software",
    company: "Secretaria de Educação, Esporte e Lazer (SEEC/RN)",
    period: "Ago/2024 - Mai/2026",
    duration: "1 ano e 10 meses",
    location: "Natal, RN",
    type: "Presencial",
    description:
      "Atuação no desenvolvimento e manutenção de sistemas internos do setor COINTE, contribuindo para a otimização de processos administrativos. Responsável por desenvolver APIs, implementar funcionalidades em sistemas de gestão e apoiar iniciativas de automação voltadas ao aumento de eficiência operacional.",
    technologies: [
      FaNodeJs,
      SiTypescript,
      SiNestjs,
      SiPostgresql,
      SiReact,
      RiNextjsFill,
    ],
    highlights: [
      "Desenvolvimento de sistemas internos com TypeScript, Node.js e Nest.js, reduzindo retrabalho e acelerando o acesso a informações em até 10%",
      "Desenvolvimento e manutenção de sites institucionais e projetos educacionais com React e Next.js",
      "Desenvolvimento de sistema de gerenciamento do estúdio com React e Nest.js, aumentando a produtividade da equipe em cerca de 25%",
    ],
  },
];
