/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";
import { jsx } from "@emotion/react";

export default function Box(props) {
  const { sp, component } = props;
  const style = useInlineStyle(sp);

  const commonProps = { ...props };

  delete commonProps.sp;
  delete commonProps.component;

  return jsx(component || "div", {
    css: style,
    ...commonProps,
  });
}
