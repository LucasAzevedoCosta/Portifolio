import { Home, User, Briefcase, FileText, FolderOpen, Mail, MessageCircle } from "lucide-react";

export function UseNavigation() {
  return [
    { id: "inicio", label: "Início", icon: Home },
    { id: "sobre", label: "Sobre mim", icon: User },
    { id: "oque-faco", label: "O que eu faço", icon: Briefcase },
    { id: "resumo", label: "Resumo", icon: FileText },
    { id: "portfolio", label: "Portfolio", icon: FolderOpen },
    { id: "depoimentos", label: "Depoimentos", icon: MessageCircle },
    { id: "contato", label: "Contato", icon: Mail },
  ];
}
