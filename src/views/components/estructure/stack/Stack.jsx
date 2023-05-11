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

    delete commonProps.sp;
    delete commonProps.component;
    delete commonProps.justifyContent;
    delete commonProps.direction;
    delete commonProps.alignItems;
    delete commonProps.columnGap;
    delete commonProps.rowGap;
    delete commonProps.width;
    delete commonProps.height;

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
  });
}
