/** @jsxImportSource @emotion/react */

import { ContextTheme } from "@/contexts/ThemeProvider";
import useInlineStyle from "@/hooks/useInlineStyles";
import { useContext } from "react";

export default function Stack({
  children,
  justifyContent,
  direction,
  alignItems,
  columnGap,
  rowGap,
  sp,
  cor,
}) {
  const { colors } = useContext(ContextTheme);
  const style = useInlineStyle(sp);
  return (
    <>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          justifyContent,
          alignItems,
          direction,
          rowGap,
          columnGap,
          backgroundColor: colors[cor],
          ...style,
        }}
      >
        {children}
      </div>
    </>
  );
}
