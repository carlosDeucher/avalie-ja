import Box from "@/views/components/estructure/box/Box";
import Stack from "@/views/components/estructure/stack/Stack";
import React from "react";

export default function Logo() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sp={({ colors }) => ({
        width: "100%",
        height: "80px",
        backgroundColor: colors.primary.dark,
      })}
    >
      <Box
        sp={({ colors }) => ({
          height: "40px",
          width: "40px",
          backgroundColor: colors.grey[3],
        })}
      ></Box>
    </Stack>
  );
}
