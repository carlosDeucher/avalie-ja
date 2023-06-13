import React, { useContext } from "react";
import { MdMenu } from "react-icons/Md";
import { SideBarContext } from "../../pageWrapper";
import { ThemeContext } from "@/contexts/ThemeProvider";
import Stack from "@/views/components/estructure/stack/Stack";

export default function ExpandSidebar() {
  const {  setIsSidebarOpen } = useContext(SideBarContext);
  const { colors: colorsTheme } = useContext(ThemeContext);
  return (
    <>
      <Stack
        component="li"
        onClick={() => setIsSidebarOpen((oldValue) => !oldValue)}
        sp={{
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          color: colorsTheme.grey[3],
          borderLeft: `2px solid transparent`,
          borderTop: `1px solid #283a63`,
          cursor: "pointer",
          ":hover": {
            color: colorsTheme.grey[5],
            backgroundColor: colorsTheme.primary.hover,
          },
        }}
      >
        <Stack
          sp={{
            fontSize: "25px",
            color: "inherit",
            padding: "15px",
          }}
        >
          <MdMenu
          />
        </Stack>
      </Stack>
    </>
  );
}
