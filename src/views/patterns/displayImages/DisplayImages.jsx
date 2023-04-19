import useInlineStyle from "@/hooks/useInlineStyles";
import Box from "@/views/components/estructure/box/Box";
import Icon from "@/views/components/estructure/icon/Icon";
import Stack from "@/views/components/estructure/stack/Stack";
import React from "react";

const stackStyleFn = (state, props) => ({
  borderRadius: "50%",
  backgroundColor: state.hover ? "grey" : "transparent",
  cursor: "pointer",
  display: ["none", "none", "flex"],
});

export default function DisplayImages({ images }) {
  return (
    <Stack direction={"row"}>
      {images.length > 3 && (
        <Stack justifyContent="center" alignItems="center" sp={stackStyleFn}>
          <Stack>
            <Icon
              sp={({ hover }) => ({
                transform: hover ? "rotate(45deg)" : "none",
                transition: "300ms all",
              })}
            />
          </Stack>
        </Stack>
      )}

      {images.map((x, index) => {
        return (
          <Box
            key={index}
            sp={{
              backgroundColor: "black",
              height: "100px",
              width: "100px",
              margin: "0 1px",
            }}
          ></Box>
        );
      })}
      {images.length > 3 && (
        <Stack
          justifyContent="center"
          alignItems="center"
          sp={{
            backgroundColor: "black",
            height: "100px",
            width: "100px",
          }}
        >
          <Box
            sp={{
              backgroundColor: "#fff",
              height: "30px",
              width: "30px",
              margin: "auto",
            }}
          ></Box>
        </Stack>
      )}
    </Stack>
  );
}
