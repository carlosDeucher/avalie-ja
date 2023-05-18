/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";
import Link from "next/link";
import React from "react";

export default function LinkNext(props) {
  const { sp, children } = props;
  const style = useInlineStyle(sp);

  const commonProps = { ...props };
  delete commonProps.sp;
  delete commonProps.children;
  return (
    <Link css={style} {...commonProps}>
      {children}
    </Link>
  );
}
