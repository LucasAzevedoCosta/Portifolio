import { FaJava, FaNode } from "react-icons/fa";
import { SiDocker, SiElectron, SiJavascript, SiNestjs, SiPostgresql, SiReact } from "react-icons/si";
import img1 from "./photos/projects/1756992559190.jpeg";
import img2 from "./photos/projects/1756992559299.jpeg";
import img3 from "./photos/projects/1756992559364.jpeg";
import img4 from "./photos/projects/1756992559438.jpeg";
import img5 from "./photos/projects/1756992559488.jpeg";
import cvonline from "./photos/projects/cvonline.png";
import tecImg1 from "./photos/projects/tec-img1.png";
import tecImg2 from "./photos/projects/tec-img2.png";
import tecImg3 from "./photos/projects/tec-img3.png";
import pomo1 from "./photos/projects/pomo1.png";
import pomo2 from "./photos/projects/pomo2.png";
import pomo3 from "./photos/projects/pomo3.png";
import pomo4 from "./photos/projects/pomo4.png";
import pomo5 from "./photos/projects/pomo5.png";
import pomo6 from "./photos/projects/pomo6.png";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

export const projects = [
  {
    id: 1,
    title: "Gerenciamento de tarefas",
    description: "Projeto full-stack para gerenciamento de tarefas",
    image: img1,
    category: "Full-stack",
    details: {
      info: "Este é um projeto full-stack para gerenciamento de tarefas, composto por um backend em NestJS e um frontend em Next.js. Ele permite que os usuários criem, editem, visualizem e excluam tarefas de forma intuitiva, com autenticação segura e persistência de dados confiável, oferecendo uma solução prática e eficiente para organizar atividades diárias.",
      technologies: [
        { icon: BiLogoTypescript, category: "backend" },
        { icon: FaNode, category: "backend" },
        { icon: RiNextjsFill, category: "frontend" },
        { icon: SiPostgresql, category: "database" },
        { icon: SiDocker, category: "devops" },
      ],
      date: "05/08/2025 - 01/09/2025",
      //url: "https://github.com/LucasAzevedoCosta/to-do",
      github: "https://github.com/LucasAzevedoCosta/to-do",
      images: [img1, img2, img3, img4, img5],
    },
  },
  {
    id: 2,
    title: "Currículo Online",
    description: "Projeto Front-End de um currículo online ",
    image: cvonline,
    category: "Front-End",
    details: {
      info: "Desenvolvimento de currículo online interativo, com foco na apresentação dinâmica de informações profissionais e educacionais. O projeto foi desenvolvido utilizando JavaScript e React, aplicando os fundamentos da programação web, design responsivo e práticas de usabilidade para garantir uma experiência intuitiva para o usuário.",
      technologies: [
        { icon: SiJavascript, category: "frontend" },
        { icon: SiReact, category: "frontend" },
      ],
      date: "01/11/2025 - Presente",
      url: "https://lucasazevedo.vercel.app/",
      github: "https://github.com/LucasAzevedoCosta/Portifolio",
      images: [cvonline],
    },
  },
  {
    id: 3,
    title: "Pomodoro Timer",
    description: "Aplicativo Desktop de Pomodoro Timer com temas dinâmicos",
    image: pomo1,
    category: "Desktop",
    details: {
      info: "Exploração do desenvolvimento Desktop com Electron, empacotando tecnologias web (HTML/CSS/JS/TS) para criar um software nativo. O app conta com gerenciamento de estado persistente do timer e configurações, um Theming Engine com seletor de temas dinâmico (Cyberpunk, Dark Academia, etc.) utilizando variáveis CSS, e comunicação IPC entre o processo principal e o de renderização para notificações nativas do sistema. Compatível com Linux e Windows.",
      technologies: [
        { icon: BiLogoTypescript, category: "frontend" },
        { icon: SiReact, category: "frontend" },
        { icon: SiElectron, category: "frontend" },
      ],
      date: "05/01/2026 - 23/01/2026",
      github: "https://github.com/LucasAzevedoCosta/pomodoro-timer",
      images: [pomo1, pomo2, pomo3, pomo4, pomo5, pomo6],
    },
  },
  {
    id: 4,
    title: "Plataforma Digital Campanha NATE 2025",
    description: "Sistema full-stack para inscrição e avaliação de projetos da Campanha NATE.",
    image: tecImg1,
    category: "Full-stack",
    details: {
      info: "Plataforma desenvolvida para gerenciar a 'Campanha NATE 2025: Tecnologia que Transforma'. O backend em NestJS/TypeScript e PostgreSQL é responsável por receber, armazenar e gerenciar a submissão dos projetos (relatos, vídeos e imagens), além de fornecer uma área de administração para a COINTE realizar a avaliação conforme os critérios definidos. O frontend em React/JavaScript oferece a interface para a participação dos professores e a visualização na 'Galeria Virtual'.",
      technologies: [
        { icon: BiLogoTypescript, category: "backend" },
        { icon: FaNode, category: "backend" },
        { icon: SiNestjs, category: "backend" },
        { icon: SiReact, category: "frontend" },
        { icon: SiJavascript, category: "frontend" },
        { icon: SiPostgresql, category: "database" },
      ],
      date: "10/08/2025 - 13/09/2025",
      url: "https://tectransforma.educacao.rn.gov.br/", 
      //github: "",
      images: [tecImg1, tecImg2, tecImg3],
    },
  },
];
