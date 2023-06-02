/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";
import { jsx } from "@emotion/react";

const defaultButtonStyle = (theme, { disabled, color = "secondary" }) => ({
  padding: "10px 24px",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.colors[color].hover,
  },
  backgroundColor: theme.colors[color].main,
  color: theme.colors["white"].main,
  fontSize: theme.fontSizes.medium,
  borderRadius: "0.3em",
  transition: !disabled && "background-color 350ms",
  fontWeight: "600",
});

const disabledStyle = (theme) => ({
  backgroundColor: theme.colors.grey[3],
  "&:hover": {
    backgroundColor: theme.colors.grey[3],
  },
  color: theme.colors.grey[5],
  fontWeight: 600,
  cursor: "default",
});

export default function ButtonContained(props) {
  const { sp, component, disabled, color } = props;
  const defaultStyle = useInlineStyle(defaultButtonStyle, { disabled, color });
  const currentDisabledStyle = useInlineStyle(disabled && disabledStyle);
  const spStyle = useInlineStyle(sp);

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
