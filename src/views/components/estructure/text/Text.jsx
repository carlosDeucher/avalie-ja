import styles from "./textStyles.module.scss";

export default function Text({ children, style, fontSize, color, component }) {
  let classFont;
  switch (fontSize) {
    case "big": {
      classFont = "font_size_big";
      break;
    }
    case "normal": {
      classFont = "font_size_normal";
      break;
    }
    case "small": {
      classFont = "font_size_small";
      break;
    }
  }

  let classColor;

  switch (color) {
    case "primary":
      classColor = "color_primary";
      break;
    case "secondary":
      classColor = "color_secondary";
      break;
  }

  const className = `${styles.text} ${styles[classFont]} ${styles[classColor]}`;
  return (
    <GetTagComponent
      className={className}
      style={{ ...style }}
      component={component}
    >
      {children}
    </GetTagComponent>
  );
}

function GetTagComponent(props) {
  const { children, component } = props;
  switch (component) {
    case "h1":
      return <h1 {...props}>{children}</h1>;
    case "h2":
      return <h2 {...props}>{children}</h2>;
    case "h3":
      return <h3 {...props}>{children}</h3>;
    default:
      return <p {...props}>{children}</p>;
  }
}
