/** @jsxImportSource @emotion/react */

import { ThemeContext } from "@/contexts/ThemeProvider";
import useInlineStyle from "@/hooks/useInlineStyles";
import { jsx } from "@emotion/react";
import { useContext } from "react";

export default function Text(props) {
  const { fontSizes: themeFontSize } = useContext(ThemeContext);
  const { sp, fontSize: fontSizeProp, fontWeight, color, component } = props;
  const styleProps = useInlineStyle(sp);

  const commonProps = { ...props };

  delete commonProps.sp;
  delete commonProps.component;
  delete commonProps.fontSize;
  delete commonProps.fontWeight;
  delete commonProps.color;

  return jsx(component || "p", {
    css: {
      fontSize: themeFontSize[fontSizeProp],
      color: color,
      fontWeight,
      ...styleProps,
    },
    ...commonProps,
  });
}
