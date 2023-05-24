import React from "react";
import Box from "../../estructure/box/Box";
import Stack from "../../estructure/stack/Stack";
import { keyframes } from "@emotion/react";


const circleTranslateCanto = keyframes`from {
  transform:translateY(-17px)
}
to {
  transform:translateY(15px)
}`;

const circleTranslateMeio = keyframes`from {
  transform:translateY(0px);
}
to {
  transform:translateY(10px);
}`;

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
            justifyContent: "center",
            alignItems: "center",
            "::after": {
              content: `""`,
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              backgroundColor: theme.colors.grey[9],
              opacity: 0.3,
            },
          })}
        >
          <Stack
            columnGap={"12px"}
            sp={{ position: "relative", transform: "translateY(-10vh)" }}
          >
            <Circle
              animationOutside={`${circleTranslateCanto} 500ms infinite alternate`}
            />
            <Circle
              animationOutside={`${circleTranslateMeio} 500ms infinite alternate-reverse`}
            />
            <Circle
              animationOutside={`${circleTranslateCanto} 500ms infinite alternate`}
            />
          </Stack>
        </Stack>
      )}
    </>
  );
}

const Circle = ({ animationOutside }) => {
  return (
    <Stack
      sp={(theme) => ({
        height: "40px",
        width: "40px",
        opacity: 1,
        backgroundColor: theme.colors.primary.main,
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        animation: animationOutside,
      })}
    />
  );
};
