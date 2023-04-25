import deepFreeze from "@/utils/deepFreeze";
import { createContext } from "react";

const colors = deepFreeze({
  primary: "#1a1a2e",
  secondary: {main:"#aeb8fe", hover:"#8c96db"},
  success: "#2ecc71",
  error: "#e74c3c",
  warning: "#f1c40f",
  info: "#8be9fd",
  light: "#f8f9fa",
  dark: "#000000",
  white: "#f6f6f6",
  possibleBackground: ["#f6f6f6", "#ebebeb", "#ffffff", "#8be9fd"],
});

const fontSizes = deepFreeze({
  xsmall: "10px",
  small: "12px",
  medium: "16px",
  large: "32px",
  xlarge: "36px",
});

const shadows = deepFreeze({
  xsmall: "0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24)",
  small: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
  medium: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  large: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
  xlarge: "0 15px 25px rgba(0, 0, 0, 0.22), 0 5px 10px rgba(0, 0, 0, 0.15)",
});

const breakpoints = deepFreeze({
  desktop: 1200,
  laptop: 900,
  tablet: 750,
  mobile: 600,
});

const border= deepFreeze({
  
})

export const ContextTheme = createContext();

export default function ThemeProvider({ children }) {
  return (
    <ContextTheme.Provider value={{ colors, fontSizes, shadows, breakpoints }}>
      {children}
    </ContextTheme.Provider>
  );
}
