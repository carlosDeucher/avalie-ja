import React from "react";
import Box from "../../estructure/box/Box";
import Stack from "../../estructure/stack/Stack";

export default function Loading({ isOpen }) {
  return (
    <>
      {isOpen && (
        <Stack
          sp={(theme) => ({
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            backgroundColor: theme.colors.grey[9],
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <Stack columnGap={"15px"}>
            <Box
              sp={{ height: "50px", width: "50px", backgroundColor: "black" }}
            ></Box>
            <Box
              sp={{ height: "50px", width: "50px", backgroundColor: "black" }}
            ></Box>
          </Stack>
        </Stack>
      )}
    </>
  );
}
