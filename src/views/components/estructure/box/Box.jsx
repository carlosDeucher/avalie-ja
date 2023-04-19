import useInlineStyle from "@/hooks/useInlineStyles";
import React from "react";

export default function Box({ children, sp }) {
  const [boxRef, style] = useInlineStyle(sp);

  return (
    <div ref={boxRef} style={style}>
      {children}
    </div>
  );
}
