import deepFreeze from "@/utils/deepFreeze";
import getDeviceSize from "@/utils/getDeviceSize";
import { createContext } from "react";

const colors = deepFreeze({
  primary: "#1a1a2e",
  secondary: { main: "#aeb8fe", hover: "#8c96db", disabled: "#57596b" },
  success: "#2ecc71",
  error: { main: "#e74c3c", dark: "#d14738" },
  warning: "#f1c40f",
  info: "#8be9fd",
  grey: [
    "rgba(250, 250, 250, 1)",
    "rgba(244, 244, 244, 1)",
    "rgba(238, 238, 238, 1)",
    "rgba(221, 221, 221, 1)",
    "rgba(204, 204, 204, 1)",
    "rgba(170, 170, 170, 1)",
    "rgba(136, 136, 136, 1)",
    "rgba(102, 102, 102, 1)",
    "rgba(68, 68, 68, 1)",
    "rgba(34, 34, 34, 1)",
  ],
  light: "#f8f9fa",
  dark: "#000000",
  white: "#f6f6f6",
  possibleBackground: ["#f6f6f6", "#ebebeb", "#ffffff"],
});
const breakpoints = deepFreeze({
  desktop: 1050,
  laptop: 900,
  tablet: 750,
  mobile: 600,
});

const fontSizes = deepFreeze({
  xsmall: "0.75rem",
  small: "0.875rem",
  medium: "1rem",
  xmedium: "1.375rem",
  large: "2rem",
  xlarge: "2.25rem",
});

const shadows = deepFreeze({
  xsmall: "0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24)",
  small: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
  medium: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  large: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
  xlarge: "0 15px 25px rgba(0, 0, 0, 0.22), 0 5px 10px rgba(0, 0, 0, 0.15)",
});

const border = deepFreeze({});

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ colors, fontSizes, shadows, breakpoints }}>
      {children}
    </ThemeContext.Provider>
  );
}
