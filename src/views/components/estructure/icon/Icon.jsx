import Image from "next/image";
import React from "react";
import arrowLeft from "/public/left-arrow-circle.svg";
import useInlineStyle from "@/hooks/useInlineStyles";
export default function Icon({ size, sp }) {
  const [iconRef, style] = useInlineStyle(sp);

  return (
    <div
      ref={iconRef}
      style={{ height: "40px", width: "40px", position: "relative", ...style }}
    >
      <Image src={arrowLeft} fill />
    </div>
  );
}
