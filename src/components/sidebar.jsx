import { NavigationItem } from "./";
import { SocialLinks } from "./socialLinks";
import { useNavigation } from "../hooks/useNavigation";
import { User } from "lucide-react";

export function Sidebar({ activeSection = "inicio", onNavigate }) {
  const navigationItems = useNavigation();

  return (
    <aside className="w-64 h-screen fixed top-0 left-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col z-50">
      <div className="flex flex-col items-center pt-12 pb-8 px-6">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 border-4 border-cyan-400 shadow-lg shadow-cyan-400/30 overflow-hidden mb-4">
          <div className="w-full h-full flex items-center justify-center">
            <User className="w-16 h-16 text-slate-300" />
          </div>
        </div>

        <h1 className="text-xl font-bold text-white mb-1">Lucas Azevedo</h1>
        <p className="text-sm text-cyan-400">Fullstack Developer</p>
      </div>

      <nav className="flex-1 px-4 pb-6">
        <ul className="space-y-2">
          {navigationItems.map((item, index) => (
            <NavigationItem
              key={item.id}
              {...item}
              isActive={activeSection === item.id}
              isFirst={index === 0}
              onClick={() => onNavigate?.(item.id)}
            />
          ))}
        </ul>
      </nav>

      <div className="px-6 pb-6">
        <button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-red-500/30 transition-all duration-300 hover:shadow-red-500/50 hover:scale-105">
          Enviar via WhatsApp
        </button>
      </div>

      <SocialLinks />
    </aside>
  );
}
