/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";
import React from "react";

const defaultButtonStyle = (theme) => ({
  padding: "10px 15px",
  border: "none",
  cursor: "pointer",
  color: theme.colors["secondary"].main,
  fontSize: theme.fontSizes.medium,
  borderRadius: "0.3em",
  fontWeight: "600",
  backgroundColor: "transparent",
});

const disabledStyle = {
  cursor: "default",
};

export default function ButtonText({ disabled, sp, type, onClick, children }) {
  const style = useInlineStyle(defaultButtonStyle);
  const currentDisabledStyle = disabled ? disabledStyle : {};
  return (
    <button
      onClick={onClick}
      type={type}
      css={{ ...style, ...currentDisabledStyle, ...sp }}
    >
      {children}
    </button>
  );
}
