/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";
import { jsx } from "@emotion/react";

const styleDefaultFn = (theme, {outlined}) => ({
  border: "1px solid " + theme.colors.grey[3],
  boxShadow:!outlined && "0px 8px 24px " + theme.colors.grey[3],
  backgroundColor: theme.colors.white.main,
  borderRadius: "5px",
});

export default function Card(props) {
  const { sp, component,outlined  } = props;

  const styleDefault = useInlineStyle(styleDefaultFn, {outlined});
  const styleProps = useInlineStyle(sp);

  const commonProps = { ...props };
  delete commonProps.sp;
  delete commonProps.component;
  delete commonProps.outlined;


  return jsx(component || "div", {
    css: {
      ...styleDefault,
      ...styleProps,
    },
    ...commonProps,
  });
}
