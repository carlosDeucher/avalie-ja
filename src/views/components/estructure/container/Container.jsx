/** @jsxImportSource @emotion/react */

import { ThemeContext } from "@/contexts/ThemeProvider";
import { useContext } from "react";
import Box from "../box/Box";
import useInlineStyle from "@/hooks/useInlineStyles";

export default function Container({ maxWidth, children, sp, component }) {
  const { breakpoints } = useContext(ThemeContext);
  const styleProps = useInlineStyle(sp);
  return (
    <>
      <Box
        component={component}
        sp={{
          maxWidth: breakpoints[maxWidth],
          margin: "0 auto",
          padding: ["15px 25px", "15px 35px"],
          ...styleProps,
        }}
      >
        {children}
      </Box>
    </>
  );
}
