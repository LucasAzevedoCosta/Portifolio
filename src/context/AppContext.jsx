import { createContext, useContext } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const AppContext = createContext();

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

  const activeSection = useActiveSection(sectionIds);

  return (
    <AppContext.Provider value={{ activeSection }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
