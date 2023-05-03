/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";
import React from "react";

export default function Box(props) {
  const { children, sp, id } = props;
  const [boxRef, style] = useInlineStyle(sp);

  return (
    <div ref={boxRef} css={style} id={id}>
      {children}
    </div>
  );
}
