/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";

const defaultButtonStyle = (theme) => ({
  padding: "10px 15px",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.colors["secondary"].hover,
  },
  backgroundColor: theme.colors["secondary"].main,
  color: theme.colors["light"],
  fontSize: theme.fontSizes.small,
  borderRadius: "0.3em",
  transition: "background-color 350ms",
  fontWeight: "bold",
});

const disabledStyle = {
  backgroundColor: "black",
  color: "grey",
  cursor: "default",
};

export default function ButtonContained({
  onClick,
  children,
  sp,
  disabled,
  type,
}) {
  const style = useInlineStyle(defaultButtonStyle);

  const currentDisabledStyle = disabled ? disabledStyle : {};
  return (
    <button
      type={type}
      onClick={onClick}
      css={{
        ...style,
        ...currentDisabledStyle,
        ...sp,
      }}
    >
      {children}
    </button>
  );
}
