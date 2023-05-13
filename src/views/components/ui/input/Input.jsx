/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";
import { useContext, useRef } from "react";
import { ContextTheme } from "@/contexts/ThemeProvider";
export default function Input({
  placeholder,
  register = () => null, //register e name sao utilizados para controlar o input com o useForm
  name,
  onChange,
  sp,
  value,
  error,
  labelText,
}) {
  const { fontSizes, colors } = useContext(ContextTheme);
  const style = useInlineStyle(sp);
  const inputRef = useRef(null);
  return (
    <>
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
          ...style,
        }}
      >
        <input
          {...register(name)}
          ref={inputRef}
          autoFocus
          onChange={onChange}
          value={value}
          type="text"
          placeholder={placeholder}
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
    </>
  );
}
