import { ThemeContext } from "@/contexts/ThemeProvider";
import Box from "@/views/components/estructure/box/Box";
import LinkNext from "@/views/components/estructure/link/LinkNext";
import Stack from "@/views/components/estructure/stack/Stack";
import Text from "@/views/components/estructure/text/Text";
import React, { useContext } from "react";
import { SideBarContext } from "../../pageWrapper";
import useBreakpoint from "@/hooks/useBreakpoint";

export default function NavItem({ Icon, label, href }) {
  const { colors: colorsTheme } = useContext(ThemeContext);
  const { isSidebarOpen } = useContext(SideBarContext);
  const isMobile = useBreakpoint("mobile");

  return (
    <LinkNext href={href}>
      <Stack
        component="li"
        sp={{
          flexDirection: isSidebarOpen ? "row" : "column",
          justifyContent: isSidebarOpen ? "start" :"center",
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
            borderRight: isSidebarOpen
              ? `1px solid ${colors.white.dark}`
              : 0,
          })}
        >
          <Icon />
        </Box>
        <Text
          sp={{
            color: "inherit",
            display: isSidebarOpen ? "inline" : "none",
            marginLeft: "20px",
          }}
        >
          {label}
        </Text>
      </Stack>
    </LinkNext>
  );
}
