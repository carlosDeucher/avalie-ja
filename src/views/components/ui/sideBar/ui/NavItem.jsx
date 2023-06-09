import { ThemeContext } from "@/contexts/ThemeProvider";
import Box from "@/views/components/estructure/box/Box";
import LinkNext from "@/views/components/estructure/link/LinkNext";
import Stack from "@/views/components/estructure/stack/Stack";
import Text from "@/views/components/estructure/text/Text";
import React, { useContext } from "react";
import { SideBarContext } from "../../pageWrapper";
import useBreakpoint from "@/hooks/useBreakpoint";
import { useRouter } from "next/router";

export default function NavItem({ Icon, label, href, route, onClick }) {
  const { colors: colorsTheme } = useContext(ThemeContext);
  const { isSidebarOpen } = useContext(SideBarContext);
  const router = useRouter();
  const isCurrentPage = route === router.route;

  const LiComponent = () => (
    <Stack
      component="li"
      onClick={onClick}
      sp={{
        flexDirection: isSidebarOpen ? "row" : "column",
        justifyContent: isSidebarOpen ? "start" : "center",
        alignItems: "center",
        color: colorsTheme.grey[3],
        borderLeft: `2px solid transparent`,
        borderBottom: `1px solid #283a63`,
        backgroundColor: isCurrentPage && colorsTheme.primary.hover,
        cursor: "pointer",
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
          borderRight: isSidebarOpen ? `1px solid #283a63` : 0,
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
  );

  if (href)
    return (
      <LinkNext href={href}>
        <LiComponent />
      </LinkNext>
    );
  return <LiComponent />;
}
