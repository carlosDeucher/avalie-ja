/** @jsxImportSource @emotion/react */

import { ContextTheme } from "@/contexts/ThemeProvider";
import useInlineStyle from "@/hooks/useInlineStyles";
import { jsx } from "@emotion/react";
import React, { useContext } from "react";

const styleDefaultFn = (theme) => ({
  border: "1px solid " + theme.colors.grey[3],
  boxShadow: "0px 8px 24px" + theme.colors.grey[3],
  backgroundColor: theme.colors.white,
  borderRadius: "5px",
});

export default function Card(props) {
  const { sp, component } = props;

  const styleDefault = useInlineStyle(styleDefaultFn);
  const styleProps = useInlineStyle(sp);

  const commonProps = { ...props };
  delete commonProps.sp;
  delete commonProps.component;

  return jsx(component || "div", {
    css: {
      ...styleDefault,
      ...styleProps,
    },
    ...commonProps,
    sp: undefined,
    component: undefined,
  });
}
