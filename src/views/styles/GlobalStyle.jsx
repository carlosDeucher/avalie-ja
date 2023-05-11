import { ContextTheme } from "@/contexts/ThemeProvider";
import { css, Global } from "@emotion/react";
import { useContext } from "react";

export default function GlobalStyle() {
  const themeProvider = useContext(ContextTheme);
  return (
    <Global
      styles={css`
        html {
          font-size: 14px;
          @media (min-width: ${themeProvider.breakpoints.tablet}px) {
            font-size: 16px;
          }
        }

        body {
          background-color: ${themeProvider.colors.possibleBackground[1]};
        }
      `}
    />
  );
}
