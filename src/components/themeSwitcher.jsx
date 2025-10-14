import React from "react";
import { useTheme } from "../context/themeContext";
import { themes } from "../utils/themes";

export function ThemeSwitcher() {
  const { themeName, mode, toggleMode, changeTheme } = useTheme();

  return (
    <div className="flex items-center gap-4 p-4 bg-background text-text border border-accent rounded-xl shadow-sm">
      {/* Seletor de tema */}
      <div className="flex gap-3">
        {Object.keys(themes).map((name) => {
          const colors = themes[name].light;
          return (
            <button
              key={name}
              onClick={() => changeTheme(name)}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition 
                ${themeName === name ? "border-primary scale-110" : "border-transparent hover:scale-105"}
              `}
              title={name}
            >
              {/* Círculo com 3 cores */}
              <div className="absolute inset-0 rounded-full overflow-hidden flex">
                <div
                  className="flex-1 h-full"
                  style={{ backgroundColor: colors['--primary'] }}
                />
                <div
                  className="flex-1 h-full"
                  style={{ backgroundColor: colors['--secondary'] }}
                />
                <div
                  className="flex-1 h-full"
                  style={{ backgroundColor: colors['--accent'] }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Toggle light/dark */}
      <button
        onClick={toggleMode}
        className="p-2 px-4 rounded-lg border border-accent bg-primary text-background font-medium shadow-sm hover:opacity-90 transition"
      >
        {mode === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
}
