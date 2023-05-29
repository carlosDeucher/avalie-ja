import { ThemeContext } from "@/contexts/ThemeProvider";
import Box from "@/views/components/estructure/box/Box";
import Stack from "@/views/components/estructure/stack/Stack";
import Text from "@/views/components/estructure/text/Text";
import React, { useContext } from "react";

export default function NavItem({ Icon, label }) {
  const { colors: colorsTheme } = useContext(ThemeContext);
  return (
    <Stack
      sp={{
        flexDirection: ["column", "row"],
        justifyContent: ["center", "start"],
        alignItems: "center",
        color: colorsTheme.grey[3],
        borderLeft: `2px solid transparent`,
        borderBottom: `1px solid ${colorsTheme.white.dark}`,
        ":hover": {
          color: colorsTheme.grey[5],
          borderLeftColor: colorsTheme.grey[5],
          backgroundColor: colorsTheme.primary.hover,
        },
      }}
    >
      <Box
        sp={({ colors }) => ({
          fontSize: "25px",
          color: "inherit",
          padding: "15px",
          borderRight: [0,`1px solid ${colors.white.dark}`],
        })}
      >
        <Icon />
      </Box>
      <Text sp={{ color: "inherit", display: ["none", "inline"], marginLeft:"20px" }}>
        {label}
      </Text>
    </Stack>
  );
}
