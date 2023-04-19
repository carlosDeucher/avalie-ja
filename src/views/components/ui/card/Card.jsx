import React from "react";
export default function Card({ children, sp }) {
  const [cardRef, style] = useInlineStyle(sp);
  return (
    <div ref={cardRef} style={style}>
      {children}
    </div>
  );
}
