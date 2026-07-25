import { createContext, useContext, type ReactNode } from "react";

type Theme = "light";
const ThemeCtx = createContext<{ theme: Theme }>({
  theme: "light",
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeCtx.Provider value={{ theme: "light" }}>{children}</ThemeCtx.Provider>;
}

export const useTheme = () => useContext(ThemeCtx);
