import { FaJava, FaNode } from "react-icons/fa";
import { SiDocker, SiJavascript, SiPostgresql, SiReact, SiSpringboot, SiSwagger } from "react-icons/si";
import img1 from "./photos/projects/1756992559190.jpeg";
import img2 from "./photos/projects/1756992559299.jpeg";
import img3 from "./photos/projects/1756992559364.jpeg";
import img4 from "./photos/projects/1756992559438.jpeg";
import img5 from "./photos/projects/1756992559488.jpeg";
import cvonline from "./photos/projects/cvonline.png";
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
      date: "01/09/2025",
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
      date: "19/11/2025",
      //url: "#",
      github: "https://github.com/LucasAzevedoCosta/Portifolio",
      images: [cvonline],
    },
  },
];
