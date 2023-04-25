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
  const { fontSizes: fontSizeTheme, colors: colorsTheme } =
    useContext(ContextTheme);
  const [textRef, style] = useInlineStyle(sp);

  return (
    <GetTagComponent
      textRef={textRef}
      style={{
        ...style,
        fontSize: fontSizeTheme[fontSizeProp],
        color: colorsTheme[color],
        fontWeight,
      }}
      component={component}
    >
      {children}
    </GetTagComponent>
  );
}

function GetTagComponent(props) {
  const { children, component, style, textRef } = props;
  const textAttributes = { ref: textRef, style };
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
