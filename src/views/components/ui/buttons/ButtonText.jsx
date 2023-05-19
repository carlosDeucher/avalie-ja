/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";
import { jsx } from "@emotion/react";

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

export default function ButtonText(props) {
  const { component, sp, disabled } = props;
  const defaultStyle = useInlineStyle(defaultButtonStyle);
  const spStyle = useInlineStyle(sp);
  const currentDisabledStyle = disabled ? disabledStyle : {};

  const commonProps = { ...props };
  delete commonProps.sp;
  delete commonProps.component;
  delete commonProps.disabled;

  return jsx(component || "button", {
    css: {
      ...defaultStyle,
      ...currentDisabledStyle,
      ...spStyle,
    },
    ...commonProps,
  });
}
