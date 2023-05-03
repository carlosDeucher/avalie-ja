import useInlineStyle from "@/hooks/useInlineStyles";
import React from "react";
export default function Card({ children, sp }) {
  const style = useInlineStyle(sp);
  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: "5px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
