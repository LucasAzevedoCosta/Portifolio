import arquiteturaMVC from "./photos/certificates/ArquiteturaDeSoftwarePadrãoMVC_page-0001.jpg";
import fundamentosJava from "./photos/certificates/FundamentosDeJava_page-0001.jpg";
import fundamentosPython from "./photos/certificates/FundamentosDePython_page-0001.jpg";
import fundamentosReact from "./photos/certificates/FundamentosDoReact_page-0001.jpg";
import fundamentosSpringBoot from "./photos/certificates/FundamentosDoSpringBoot _page-0001.jpg";
import geminiPython from "./photos/certificates/GeminiPython_page-0001.jpg";
import nestAPI from "./photos/certificates/Nest.jsCriandoUmaAPIRestful_page-0001.jpg";
import networkingEssentials from "./photos/certificates/NetworkingEssentials_page-0001.jpg";
import cybersecurityEssentials from "./photos/certificates/CybersecurityEssentials_page-0001.jpg";
import scrumFundamentals from "./photos/certificates/ScrumFundamentals_page-0001.jpg";

import { categoryColors } from "./categoryColors";

export const certificates = [
  {
    title: "Fundamentos do React",
    issuer: "Rocketseat",
    date: "Abril 2025",
    credential: "bec90311-c274-4258-a894-75edc6e0f596",
    image: fundamentosReact,
    url: "https://app.rocketseat.com.br/certificates/bec90311-c274-4258-a894-75edc6e0f596",
    ...categoryColors.frontend
  },
  {
    title: "Arquitetura de Software e Padrão MVC",
    issuer: "Rocketseat",
    date: "Fevereiro 2025",
    credential: "646a0b49-4dc5-47be-9a2b-b22e4e2f6c1c",
    image: arquiteturaMVC,
    url: "https://app.rocketseat.com.br/certificates/646a0b49-4dc5-47be-9a2b-b22e4e2f6c1c",
    ...categoryColors.backend
  },
  {
    title: "Fundamentos de Python",
    issuer: "Rocketseat",
    date: "Fevereiro 2025",
    credential: "1b83aa5f-d811-4ae8-aa10-e07f230fb391",
    image: fundamentosPython,
    url: "https://app.rocketseat.com.br/certificates/1b83aa5f-d811-4ae8-aa10-e07f230fb391",
    ...categoryColors.backend
  },
  {
    title: "Fundamentos do Spring Boot",
    issuer: "Rocketseat",
    date: "Fevereiro 2025",
    credential: "a133f12b-e396-4be3-8b25-d3ce94395ed7",
    image: fundamentosSpringBoot,
    url: "https://app.rocketseat.com.br/certificates/a133f12b-e396-4be3-8b25-d3ce94395ed7",
    ...categoryColors.backend
  },
  {
    title: "Fundamentos de Java",
    issuer: "Rocketseat",
    date: "Janeiro 2025",
    credential: "9e890443-2be2-439c-b2df-023a9374eb2c",
    image: fundamentosJava,
    url: "https://app.rocketseat.com.br/certificates/9e890443-2be2-439c-b2df-023a9374eb2c",
    ...categoryColors.backend
  },
  {
    title: "Nest.js: Criando uma API Restful",
    issuer: "Alura",
    date: "Abril 2025",
    credential: "b85bf9ca-03bc-4e58-bd87-2a4f214173ce",
    image: nestAPI,
    url: "https://cursos.alura.com.br/certificate/b85bf9ca-03bc-4e58-bd87-2a4f214173ce?lang",
    ...categoryColors.backend
  },
  {
    title: "Gemini e Python: Crie seu Chatbot com IA Generativa",
    issuer: "Alura",
    date: "Abril 2025",
    credential: "0d1a7e47-b294-4574-b3c9-31fe870b574c",
    image: geminiPython,
    url: "https://cursos.alura.com.br/certificate/0d1a7e47-b294-4574-b3c9-31fe870b574c?lang",
    ...categoryColors.frontend
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "Junho 2023",
    credential: "99e6fdca-e549-4dcd-a903-dc719b1c868e",
    image: cybersecurityEssentials,
    url: "https://www.credly.com/badges/99e6fdca-e549-4dcd-a903-dc719b1c868e",
    ...categoryColors.devops
  },
  {
    title: "Networking Essentials",
    issuer: "Cisco Networking Academy",
    date: "Dezembro 2023",
    credential: "",
    image: networkingEssentials,
    ...categoryColors.devops
  },
  {
    title: "Scrum Fundamentals Certified",
    issuer: "VMEdu Inc.",
    date: "Junho 2024",
    credential: "1035900",
    image: scrumFundamentals,
    ...categoryColors.default
  }
];
