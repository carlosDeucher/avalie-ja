/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";
import React from "react";

export default function Box(props) {
  const { children, sp, id } = props;
  const style = useInlineStyle(sp);

  return (
    <div css={style} id={id}>
      {children}
    </div>
  );
}
