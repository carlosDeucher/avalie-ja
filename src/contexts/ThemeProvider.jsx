import deepFreeze from "@/utils/deepFreeze";
import { createContext } from "react";

const colors = deepFreeze({
  primary: "#1a1b41",
  secondary: "#aeb8fe",
  success: "#a9ffcb",
  danger: "#f22b29",
  warning: "#ffc53a",
  info: "#17a2b8",
  light: "#f8f9fa",
  dark: "#343a40",
  white: "#fff",
});

const fontSize = deepFreeze({
  xsmall: "10px",
  small: "12px",
  medium: "16px",
  large: "24px",
  xlarge: "36px",
});

const shadows = deepFreeze({
  xsmall: "0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24)",
  small: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
  medium: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  large: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
  xlarge: "0 15px 25px rgba(0, 0, 0, 0.22), 0 5px 10px rgba(0, 0, 0, 0.15)",
});

export const ContextTheme = createContext();

export default function ThemeProvider({ children }) {
    
  return (
    <ContextTheme.Provider value={{ colors, fontSize, shadows }}>
      {children}
    </ContextTheme.Provider>
  );
}
