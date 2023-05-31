/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";
import { jsx } from "@emotion/react";

const defaultButtonStyle = (theme, { color = "secondary" }) => ({
  padding: "10px 0",
  border: "none",
  cursor: "pointer",
  color: theme.colors[color].main,
  fontSize: theme.fontSizes.medium,
  borderRadius: "0.3em",
  fontWeight: "600",
  backgroundColor: "transparent",
});

const disabledStyle = {
  cursor: "default",
};

export default function ButtonText(props) {
  const { component, sp, disabled, color } = props;
  const defaultStyle = useInlineStyle(defaultButtonStyle, { color });
  const spStyle = useInlineStyle(sp);
  const currentDisabledStyle = disabled ? disabledStyle : {};

  const commonProps = { ...props };
  delete commonProps.sp;
  delete commonProps.component;
  delete commonProps.disabled;
  delete commonProps.color;

  return jsx(component || "button", {
    css: {
      ...defaultStyle,
      ...currentDisabledStyle,
      ...spStyle,
    },
    ...commonProps,
  });
}
