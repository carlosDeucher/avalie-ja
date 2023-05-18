/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";
import { useContext, useRef } from "react";
import { ThemeContext } from "@/contexts/ThemeProvider";
export default function Input(props) {
  const {
    register = () => null, //register e name sao utilizados para controlar o input com o useForm
    name,
    sp,
    error,
    labelText,
  } = props;
  const commonProps = { ...props };
  delete commonProps.register;
  delete commonProps.name;
  delete commonProps.sp;
  delete commonProps.error;
  delete commonProps.labelText;

  const { fontSizes, colors } = useContext(ThemeContext);
  const style = useInlineStyle(sp);
  const inputRef = useRef(null);
  return (
    <div css={{ ...style }}>
      <label
        css={{
          fontSize: fontSizes["small"],
          marginBottom: "4px",
          display: "inline-block",
        }}
      >
        {labelText}
      </label>
      <div
        onClick={() => inputRef.current.focus()}
        css={{
          border: "1px solid " + colors.grey[3],
          boxShadow: "0px 8px 24px" + colors.grey[3],
          display: "flex",
          alignItems: "center",
          padding: "10px 5px",
          borderRadius: "0.375em",
          "&:focus-within": {
            boxShadow: error
              ? `0 0 0 1px ${colors.error.main}`
              : `0 0 0 0.125em ${colors.secondary.main}`,
          },
          outline: "none",
          flex: 1,
        }}
      >
        <input
          {...register(name)}
          ref={inputRef}
          {...commonProps}
          css={{
            border: "none",
            outline: "none",
            fontSize: fontSizes["medium"],
            lineHeight: "1.5rem",
            flexGrow: 1,
            backgroundColor: colors.white,
          }}
        ></input>
      </div>
    </div>
  );
}
