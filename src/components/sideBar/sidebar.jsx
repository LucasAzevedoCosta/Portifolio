import { useState } from "react";
import { NavigationItem } from "./navigationItem";
import { SocialLinks } from "./socialLinks";
import { UseNavigation } from "../../hooks/useNavigation";

export function Sidebar({ activeSection = "inicio", onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigationItems = UseNavigation();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 xl:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="xl:hidden p-4 text-white fixed top-4 left-4 z-50 focus:outline-none"
      >
        <div className="space-y-1">
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
      </button>

      <aside
        className={`
          fixed top-0 left-0 h-screen bg-gradient-to-b
          from-slate-900 via-slate-800 to-slate-900 text-white
          flex flex-col z-50 duration-300 overflow-hidden

          w-64 transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          xl:translate-x-0 xl:w-64
        `}
      >
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="xl:hidden absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>
        )}

        <div className="flex flex-col items-center pt-12 pb-8 px-6">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-cyan-400 shadow-lg shadow-cyan-400/30">
            <img src="https://github.com/lucasazevedocosta.png" alt="" />
          </div>

          <h1 className="text-xl font-bold">Lucas Azevedo</h1>
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
                onClick={() => {
                  onNavigate?.(item.id);
                  setIsOpen(false);
                }}
              />
            ))}
          </ul>
        </nav>

        <SocialLinks />
      </aside>
    </>
  );
}
