import { DiMsqlServer } from "react-icons/di";
import { FaJava } from "react-icons/fa";
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
    projects: 12,
    icon: FaJava,
  },
  {
    name: "Spring Boot",
    category: "backend",
    level: 90,
    experience: "4+ anos",
    projects: 10,
    icon: SiSpringboot,
  },
  {
    name: "Hibernate",
    category: "backend",
    level: 85,
    experience: "4+ anos",
    projects: 8,
    icon: SiHibernate,
  },
  {
    name: "REST API",
    category: "backend",
    level: 95,
    experience: "5+ anos",
    projects: 15,
    icon: SiSwagger,
  },

  {
    name: "PostgreSQL",
    category: "database",
    level: 90,
    experience: "4+ anos",
    projects: 9,
    icon: SiPostgresql,
  },
  {
    name: "SQL Server",
    category: "database",
    level: 88,
    experience: "4+ anos",
    projects: 6,
    icon: DiMsqlServer,
  },
  {
    name: "Oracle DB",
    category: "database",
    level: 80,
    experience: "3+ anos",
    projects: 5,
    icon: SiOracle,
  },

  {
    name: "Docker",
    category: "devops",
    level: 85,
    experience: "3+ anos",
    projects: 7,
    icon: SiDocker,
  },
  {
    name: "Git",
    category: "devops",
    level: 90,
    experience: "5+ anos",
    projects: 20,
    icon: SiGit,
  },
  {
    name: "SonarQube",
    category: "devops",
    level: 82,
    experience: "2+ anos",
    projects: 4,
    icon: SiSonarqube,
  },

  {
    name: "React",
    category: "frontend",
    level: 75,
    experience: "2+ anos",
    projects: 5,
    icon: SiReact,
  },
];
