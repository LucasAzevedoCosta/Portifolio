import { Home, User, Briefcase, FileText, FolderOpen } from "lucide-react";

export function UseNavigation() {
  return [
    { id: "inicio", label: "Início", icon: Home },
    { id: "sobre", label: "Sobre mim", icon: User },
    { id: "skills", label: "Habilidades", icon: Briefcase },
    { id: "certificados", label: "Certificados", icon: FileText },
    { id: "resumo", label: "Resumo", icon: FileText },
    { id: "portfolio", label: "Portfolio", icon: FolderOpen },
  ];
}
