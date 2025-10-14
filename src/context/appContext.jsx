import { createContext, useContext } from "react";
import { UseActiveSection } from "../hooks/useActiveSection";

const appContext = createContext();

export function AppProvider({ children }) {
  const sectionIds = [
    "inicio",
    "sobre",
    "oque-faco",
    "resumo",
    "portfolio",
    "depoimentos",
    "contato",
  ];

  const activeSection = UseActiveSection(sectionIds);

  return (
    <appContext.Provider value={{ activeSection }}>
      {children}
    </appContext.Provider>
  );
}

export const useAppContext = () => useContext(appContext);
