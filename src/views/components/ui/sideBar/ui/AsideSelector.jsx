import Stack from "@/views/components/estructure/stack/Stack";
import React, { useContext } from "react";
import { SideBarContext } from "../../pageWrapper";
import useBreakpoint from "@/hooks/useBreakpoint";

export default function AsideSelector({ children }) {
  const isMobile = useBreakpoint("mobile");
  const { isSidebarOpen } = useContext(SideBarContext);

  if (isMobile)
    return (
      <Stack
        component="aside"
        sp={{
          zIndex: isSidebarOpen && 5,
          bottom: 0,
          top: 0,
          position: "absolute",
        }}
      >
        {children}
      </Stack>
    );

  return <Stack component="aside">{children}</Stack>;
}
