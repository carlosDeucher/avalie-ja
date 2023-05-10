/** @jsxImportSource @emotion/react */

import { ContextTheme } from "@/contexts/ThemeProvider";
import useInlineStyle from "@/hooks/useInlineStyles";
import { jsx } from "@emotion/react";
import { useContext } from "react";

export default function Text(props) {
  const { fontSizes: themeFontSize } = useContext(ContextTheme);
  const { sp, fontSize: fontSizeProp, fontWeight, color, component } = props;
  const styleProps = useInlineStyle(sp);

  const commonProps = { ...props };

  return jsx(component || "p", {
    css: {
      fontSize: themeFontSize[fontSizeProp],
      color: color,
      fontWeight,
      ...styleProps,
    },
    ...commonProps,
    sp: undefined,
    component: undefined,
    fontSize: undefined,
    fontWeight: undefined,
    color: undefined,
  });
}
