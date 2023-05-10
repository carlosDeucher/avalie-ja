/** @jsxImportSource @emotion/react */

import { ContextTheme } from "@/contexts/ThemeProvider";
import useInlineStyle from "@/hooks/useInlineStyles";
import { useContext } from "react";

export default function ContainerLogin({ maxWidth, children }) {
  const style = useInlineStyle({
    display: "flex",
    justifyContent: "center",
    padding: ["15px 30px", "15px 40px", "15px 35px", "15px 200px 15px 100px"],
  });
  return (
    <>
      <div css={{ ...style }}>{children}</div>
    </>
  );
}
