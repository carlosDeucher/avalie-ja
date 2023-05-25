/** @jsxImportSource @emotion/react */

import React, { useContext, useState } from "react";
import Stack from "../../estructure/stack/Stack";
import { ThemeContext } from "@/contexts/ThemeProvider";
import Box from "../../estructure/box/Box";
import { BsCheckLg } from "react-icons/bs";

export default function CheckBox(props) {
  const { sp, labelText } = props;
  const commonProps = { ...props };
  delete commonProps.sp;
  delete commonProps.labelText;

  const { colors: colorsTheme, fontSizes: fontSizesTheme } =
    useContext(ThemeContext);

  return (
    <Stack sp={sp} columnGap={"5px"}>
      <Box
        sp={{
          padding: "10px",
          position: "relative",
          zIndex: 2,
          ":hover #hover::after": { backgroundColor: colorsTheme.grey[4] },
          ":hover input:checked~#hover::after": {
            backgroundColor: colorsTheme["secondary"].main,
          },
        }}
      >
        <input
          {...commonProps}
          type="checkbox"
          id="checkbox"
          css={{
            position: "absolute",
            left: "-4px",
            right: "-4px",
            bottom: "-4px",
            top: "-4px",
            opacity: 0,
            cursor: "pointer",
            zIndex: 2,
            "&:checked +div": {
              backgroundColor: colorsTheme["secondary"].dark,
              borderColor: colorsTheme["secondary"].dark,
            },
          }}
        />
        <Box
          sp={{
            height: "17px",
            width: "17px",
            border: `2px solid ${colorsTheme.grey[9]}`,
            position: "relative",
            borderRadius: "2px",
          }}
        >
          <BsCheckLg
            style={{
              color: colorsTheme.white.main,
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              width: "13px",
              height: "13px",
            }}
          />
        </Box>
        <Box
          id="hover"
          sp={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: "100%",
            "&::after": {
              content: `""`,
              borderRadius: "50%",
              position: "absolute",
              zIndex: 1,
              opacity: 0.3,
              left: 0,
              top: 0,
              height: "100%",
              width: "100%",
            },
          }}
        ></Box>
      </Box>
      {labelText && (
        <label for="checkbox">
          <span
            css={{
              fontSize: fontSizesTheme.medium,
              lineHeight: "37px",
            }}
          >
            {labelText}
          </span>
        </label>
      )}
    </Stack>
  );
}
