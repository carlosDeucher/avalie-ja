/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";
import React from "react";

export default function Divider({ sp }) {
  const style = useInlineStyle(sp);
  return <hr css={{opacity:0.3,...style}}></hr>;
}
