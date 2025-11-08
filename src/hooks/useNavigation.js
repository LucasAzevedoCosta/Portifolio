import { Home, User, FileText, FolderOpen } from "lucide-react";
import { GiLightBulb } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";

export function UseNavigation() {
  return [
    { id: "inicio", label: "Início", icon: Home },
    { id: "sobre", label: "Sobre mim", icon: User },
    { id: "resumo", label: "Resumo", icon: FileText },
    { id: "portfolio", label: "Portfolio", icon: FolderOpen },
    { id: "skills", label: "Habilidades", icon: GiLightBulb },
    { id: "certificados", label: "Certificados", icon: GrCertificate },
  ];
}
