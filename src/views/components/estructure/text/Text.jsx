/** @jsxImportSource @emotion/react */

import { ContextTheme } from "@/contexts/ThemeProvider";
import useInlineStyle from "@/hooks/useInlineStyles";
import { useContext } from "react";

export default function Text({
  children,
  sp,
  fontSize: fontSizeProp,
  fontWeight,
  color,
  component,
}) {
  const { fontSizes: themeFontSize, colors: themeColors } =
    useContext(ContextTheme);
  const style = useInlineStyle(sp);

  return (
    <GetTagComponent
      style={{
        fontSize: themeFontSize[fontSizeProp],
        color: themeColors[color],
        fontWeight,
        ...style,
      }}
      component={component}
    >
      {children}
    </GetTagComponent>
  );
}

function GetTagComponent(props) {
  const { children, component, style: css, textRef } = props;
  const textAttributes = { ref: textRef, css };
  switch (component) {
    case "h1":
      return <h1 {...textAttributes}>{children}</h1>;
    case "h2":
      return <h2 {...textAttributes}>{children}</h2>;
    case "h3":
      return <h3 {...textAttributes}>{children}</h3>;
    default:
      return <p {...textAttributes}>{children}</p>;
  }
}
