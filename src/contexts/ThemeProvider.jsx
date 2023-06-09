import deepFreeze from "@/utils/deepFreeze";
import { createContext } from "react";

const colors = deepFreeze({
  primary: {
    main: "#4c8bf5",
    hover: "#3466c2",
    disabled: "#b0c8f8",
    dark: "#324a80",
  },
  secondary: {
    main: "#e68a00",
    hover: "#bf6600",
    disabled: "#ffc266",
    dark: "#804d00",
  },
  success: {
    main: "#58b368",
    hover: "#3c894a",
    disabled: "#a1d9af",
    dark: "#33663e",
  },
  error: {
    main: "#f04a4a",
    hover: "#c23333",
    disabled: "#f8a6a6",
    dark: "#802d2d",
  },
  warning: {
    main: "#f5a623",
    hover: "#c97a1e",
    disabled: "#f8d49c",
    dark: "#805116",
  },
  info: {
    main: "#5bcaff",
    hover: "#3997c2",
    disabled: "#a7d9f8",
    dark: "#326280",
  },
  white: {
    main: "#ffffff",
    hover: "#f5f5f5",
    disabled: "#eeeeee",
    dark: "#bdbdbd",
  },
  dark: {
    main: "#222222",
    hover: "#444444",
    disabled: "#777777",
    dark: "#000000",
  },
  background: {
    main: "#f5f5f5",
    hover: "#e0e0e0",
    disabled: "#bdbdbd",
    dark: "#9e9e9e",
  },
  cancel: {
    main: "rgba(204, 204, 204, 1)",
    hover: "rgba(170, 170, 170, 1)",
    disabled: "#bdbdbd",
  },
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
  xmedium: "1.15rem",
  large: "1.375rem",
  xlarge: "2rem",
});

const shadows = deepFreeze({
  xsmall: "0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24)",
  small: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
  medium: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  large: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
  xlarge: "0 15px 25px rgba(0, 0, 0, 0.22), 0 5px 10px rgba(0, 0, 0, 0.15)",
});

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ colors, fontSizes, shadows, breakpoints }}>
      {children}
    </ThemeContext.Provider>
  );
}
