import { ThemeContext } from "@/contexts/ThemeProvider";
import React, { useContext, useState } from "react";
import { RiStarFill } from "react-icons/Ri";
import Box from "../../estructure/box/Box";
import Stack from "../../estructure/stack/Stack";

export default function Rating({ count }) {
  const { colors: colorsTheme } = useContext(ThemeContext);
  const [selectedStarIndex, setSelectedStarIndex] = useState();

  const getColor = (starIndex) => {
    if (starIndex <= selectedStarIndex) return "#ffc926";
    else return colorsTheme.grey[4];
  };
  
  const setSiblingsColorStr = `&:has(~ #star:hover)`;

  return (
    <Stack sp={{ fontSize: "23px" }}>
      {new Array(count).fill(0).map((_, index) => {
        return (
          <Box
            id={`star`}
            sp={{
              "&:hover": {
                transform: "scale(1.15)",
                color: "#ffc926",
              },
              [setSiblingsColorStr]: {
                color: "#ffc926",
              },
              color: getColor(index),
            }}
          >
            <RiStarFill
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                if (index === selectedStarIndex)
                  return setSelectedStarIndex(index - 1);
                else setSelectedStarIndex(index);
              }}
            />
          </Box>
        );
      })}
    </Stack>
  );
}
