import React, { useContext } from "react";
import Stack from "../../estructure/stack/Stack";
import Text from "../../estructure/text/Text";
import { IoMdAlert } from "react-icons/Io";
import { ThemeContext } from "@/contexts/ThemeProvider";

export default function InputError({ showError, children }) {
  const { colors: colorsTheme } = useContext(ThemeContext);

  return (
    <Stack
      alignItems={"center"}
      columnGap={"4px"}
      sp={{
        marginTop: "3px",
        opacity: showError ? 1 : 0,
        marginLeft: "2px",
      }}
    >
      <IoMdAlert color={colorsTheme.error.main} />
      <Text fontSize="small" color={colorsTheme.error.main} fontWeight={500}>
        {children}
      </Text>
    </Stack>
  );
}
