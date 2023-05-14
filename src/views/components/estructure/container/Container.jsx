/** @jsxImportSource @emotion/react */

import { ThemeContext } from "@/contexts/ThemeProvider";
import { useContext } from "react";

export default function Container({ maxWidth, children }) {
  const { breakpoints } = useContext(ThemeContext);
  return (
    <>
      <div
        css={{
          maxWidth: breakpoints[maxWidth],
          margin: "auto",
          padding: "15px 20px",
        }}
      >
        {children}
      </div>
    </>
  );
}
