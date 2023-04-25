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
  const [stackRef, style] = useInlineStyle(sp);
  return (
    <>
      <div
        ref={stackRef}
        style={{
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
