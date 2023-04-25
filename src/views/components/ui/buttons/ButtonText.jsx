import useInlineStyle from "@/hooks/useInlineStyles";
import React from "react";

const defaultButtonStyle = (styleButton, theme) => ({
  padding: "10px 15px",
  border: "none",
  cursor: "pointer",
  color: theme.colors["secondary"].main,
  fontSize: theme.fontSizes.small,
  borderRadius: "0.3em",
  fontWeight: "bold",
  backgroundColor: "transparent",
});

const disabledStyle = {
  cursor: "default",
};

export default function ButtonText({ disabled, sp, type, onClick, children }) {
  const [buttonRef, defaultStyle] = useInlineStyle(defaultButtonStyle);
  const currentDisabledStyle = disabled ? disabledStyle : {};
  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      type={type}
      style={{ ...defaultStyle, ...currentDisabledStyle, ...sp }}
    >
      {children}
    </button>
  );
}
