/** @jsxImportSource @emotion/react */

import { ThemeContext } from "@/contexts/ThemeProvider";
import { useContext } from "react";
import Box from "../box/Box";
import useInlineStyle from "@/hooks/useInlineStyles";

export default function Container({ maxWidth, children, sp }) {
  const { breakpoints } = useContext(ThemeContext);
  const styleProps = useInlineStyle(sp);
  return (
    <>
      <Box
        sp={{
          maxWidth: breakpoints[maxWidth],
          margin: "auto",
          padding: [0, "15px 20px"],
          ...styleProps,
        }}
      >
        {children}
      </Box>
    </>
  );
}
