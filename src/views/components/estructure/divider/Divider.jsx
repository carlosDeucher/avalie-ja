import useInlineStyle from "@/hooks/useInlineStyles";
import React from "react";

export default function Divider({ sp }) {
  const [hrRef, style] = useInlineStyle(sp);
  return <hr ref={hrRef} style={{opacity:0.3,...style}}></hr>;
}
