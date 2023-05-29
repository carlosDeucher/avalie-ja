import React, { useContext } from "react";
import Box from "../../estructure/box/Box";
import Text from "../../estructure/text/Text";
import Stack from "../../estructure/stack/Stack";
import { MdArrowForwardIos } from "react-icons/Md";
import { ThemeContext } from "@/contexts/ThemeProvider";

export default function ShowdataMinimalist({ label, value, skeleton }) {
  const { colors: colorsTheme } = useContext(ThemeContext);
  return (
    <Box sp={{ padding: "13px 18px" }}>
      <Stack justifyContent="space-between">
        <Stack rowGap={"5px"} sp={{ flexDirection: ["column", "column","row"] }}>
          <Box sp={{ minWidth: "230px" }}>
            <Text fontSize="medium">{label}</Text>
          </Box>
          {!skeleton ? <Text sp={{color:colorsTheme.grey[6]}}>{value}</Text> : <></>}
        </Stack>
        <Box sp={{ display: ["none", "block"] }}>
          <MdArrowForwardIos style={{ color: colorsTheme.secondary.main }} />
        </Box>
      </Stack>
    </Box>
  );
}
