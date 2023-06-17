import { ThemeContext } from "@/contexts/ThemeProvider";
import React, { useContext, useState } from "react";
import { RiStarFill } from "react-icons/Ri";
import Box from "../../estructure/box/Box";
import Stack from "../../estructure/stack/Stack";

export default function ReadOnlyRating({ count = 5, grade }) {
  const { colors: colorsTheme } = useContext(ThemeContext);

  return (
    <Box sp={{ position: "relative" }}>
      <Stack sp={{ fontSize: "23px" }}>
        {new Array(count).fill(0).map((_, index) => {
          return (
            <Box key={index}>
              <RiStarFill style={{ color: colorsTheme.grey[3] }} />
            </Box>
          );
        })}
      </Stack>
      <Stack sp={{ fontSize: "23px", position: "absolute", top: 0 }}>
        {new Array(count).fill(0).map((_, index) => {
          let maxWidth;
          if (Math.trunc(grade) === index) {
            const decimal = Number(`0.${grade.toString().split(".")[1]}`);
            maxWidth = 100 * decimal + "%";
          }
          if (Math.trunc(grade) < index) {
            maxWidth = 0;
          }

          return (
            <Box key={index} sp={{ minWidth: "23px" }}>
              <Box sp={{ maxWidth: maxWidth, overflow: "hidden" }}>
                <RiStarFill
                  style={{
                    color: "#ffc926",
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
