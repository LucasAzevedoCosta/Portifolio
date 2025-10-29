import { DiJava, DiMsqlServer } from "react-icons/di";
import {
  SiDocker,
  SiGit,
  SiHibernate,
  SiOracle,
  SiPostgresql,
  SiReact,
  SiSonarqube,
  SiSpringboot,
  SiSwagger,
} from "react-icons/si";

export const skills = [
  {
    name: "Java",
    category: "backend",
    level: 95,
    experience: "5+ anos",
    icon: DiJava,
  },
  {
    name: "Spring Boot",
    category: "backend",
    level: 90,
    experience: "4+ anos",
    icon: SiSpringboot,
  },
  {
    name: "Hibernate",
    category: "backend",
    level: 85,
    experience: "4+ anos",
    icon: SiHibernate,
  },
  {
    name: "REST API",
    category: "backend",
    level: 95,
    experience: "5+ anos",
    icon: SiSwagger,
  },

  {
    name: "PostgreSQL",
    category: "database",
    level: 90,
    experience: "4+ anos",
    icon: SiPostgresql,
  },
  {
    name: "SQL Server",
    category: "database",
    level: 88,
    experience: "4+ anos",
    icon: DiMsqlServer,
  },
  {
    name: "Oracle DB",
    category: "database",
    level: 80,
    experience: "3+ anos",
    icon: SiOracle,
  },

  {
    name: "Docker",
    category: "devops",
    level: 85,
    experience: "3+ anos",
    icon: SiDocker,
  },
  {
    name: "Git",
    category: "devops",
    level: 90,
    experience: "5+ anos",
    icon: SiGit,
  },
  {
    name: "SonarQube",
    category: "devops",
    level: 82,
    experience: "2+ anos",
    icon: SiSonarqube,
  },

  {
    name: "React",
    category: "frontend",
    level: 75,
    experience: "2+ anos",
    icon: SiReact,
  },
];
