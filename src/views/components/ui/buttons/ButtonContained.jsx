/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";
import { jsx } from "@emotion/react";

const defaultButtonStyle = (theme, { disabled }) => ({
  padding: "0 24px",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.colors["secondary"].hover,
  },
  backgroundColor: theme.colors["secondary"].main,
  color: theme.colors["light"],
  fontSize: theme.fontSizes.medium,
  borderRadius: "0.3em",
  transition: !disabled && "background-color 350ms",
  fontWeight: "600",
  height: "43px",
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
  const { sp, component, disabled } = props;
  const defaultStyle = useInlineStyle(defaultButtonStyle, { disabled });
  const currentDisabledStyle = useInlineStyle(disabled && disabledStyle);
  const spStyle = useInlineStyle(sp);

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
