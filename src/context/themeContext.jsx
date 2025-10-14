import React, { createContext, useContext, useState, useEffect } from "react";
import { themes } from "../utils/themes";

const themeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(
    localStorage.getItem("themeName") || "ocean"
  );
  const [mode, setMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );

  useEffect(() => {
    const themeVars = themes[themeName][mode];
    const root = document.documentElement;

    Object.entries(themeVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    root.setAttribute("data-theme", `${themeName}-${mode}`);
    localStorage.setItem("themeName", themeName);
    localStorage.setItem("themeMode", mode);
  }, [themeName, mode]);

  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  const changeTheme = (name) => setThemeName(name);

  return (
    <themeContext.Provider value={{ themeName, mode, toggleMode, changeTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export const useTheme = () => useContext(themeContext);
