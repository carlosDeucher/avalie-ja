/** @jsxImportSource @emotion/react */

import useInlineStyle from "@/hooks/useInlineStyles";
import { useContext, useRef } from "react";
import { ThemeContext } from "@/contexts/ThemeProvider";
import InputError from "../error/InputError";
import Box from "../../estructure/box/Box";
import { jsx } from "@emotion/react";
import handleResponsiveValues, {
  convertResponsiveValues,
} from "@/utils/handleResponsiveValues";
import useBreakpoint from "@/hooks/useBreakpoint";
export default function Input(props) {
  const {
    register, //register  utilizados para controlar o input com o useForm
    sp,
    error,
    labelText,
    multiline,
  } = props;
  const breakpoint = useBreakpoint();
  const rows = convertResponsiveValues(props.rows, breakpoint);
  const commonProps = { ...props };
  delete commonProps.register;
  delete commonProps.sp;
  delete commonProps.error;
  delete commonProps.labelText;
  delete commonProps.multiline;
  delete commonProps.rows;

  const { fontSizes, colors } = useContext(ThemeContext);
  const style = useInlineStyle(sp);
  const registerHookForm = register;

  return (
    <Box sp={{ ...style }}>
      <label css={{ display: "block" }}>
        <span
          css={{
            fontSize: fontSizes["small"],
            marginBottom: "4px",
            display: "inline-block",
          }}
        >
          {labelText}
        </span>
        <div
          css={{
            border: "1px solid " + colors.grey[3],
            boxShadow: error && `0 0 0 1px ${colors.error.main}`,
            display: "flex",
            alignItems: "center",
            padding: "10px 5px",
            borderRadius: "0.375em",
            backgroundColor: colors.white.main,
            "&:focus-within": {
              boxShadow: error
                ? `0 0 0 1.5px ${colors.error.main}`
                : `0 0 0 0.125em ${colors.secondary.main}`,
            },
            outline: "none",
            flex: 1,
          }}
        >
          {jsx(multiline ? "textarea" : "input", {
            ...commonProps,
            ...registerHookForm,
            css: {
              border: "none",
              outline: "none",
              fontSize: fontSizes["medium"],
              lineHeight: "1.5rem",
              flexGrow: 1,
              backgroundColor: colors.white.main,
              maxWidth: "100%",
              resize: "none",
            },
            rows,
          })}
        </div>
      </label>
      <InputError showError={!!error}>{error}</InputError>
    </Box>
  );
}
