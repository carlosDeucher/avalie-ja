/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";
import { jsx } from "@emotion/react";

const stylesDefault = { display: "flex", justifyContent: "space-between" };

export default function Stack(props) {
  const {
    sp,
    component,
    justifyContent,
    direction,
    alignItems,
    columnGap,
    rowGap,
    width,
    height,
  } = props;
  const stylesProps = useInlineStyle(sp);

  const commonProps = { ...props };

  return jsx(component || "div", {
    css: {
      ...stylesDefault,
      justifyContent,
      alignItems,
      rowGap,
      columnGap,
      flexDirection: direction,
      width,
      height,
      ...stylesProps,
    },
    ...commonProps,
    sp: undefined,
    component: undefined,
    justifyContent: undefined,
    alignItems: undefined,
    direction: undefined,
    rowGap: undefined,
    columnGap: undefined,
    width: undefined,
    height: undefined,
  });
}
