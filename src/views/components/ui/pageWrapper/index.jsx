import React, { createContext, useState } from "react";
import Header from "./sections/header/Header";
import Stack from "../../estructure/stack/Stack";
import SideBar from "../sideBar";
import Box from "../../estructure/box/Box";

export const SideBarContext = createContext();
export default function PageWrapper({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <SideBarContext.Provider value={{isSidebarOpen, setIsSidebarOpen}}>
      <Stack direction="column" sp={{ height: "100vh", overflow: "hidden" }}>
        <Header
        />
        <Stack sp={{ flex: 1 }}>
          <SideBar
          />
          <Box sp={{ overflow: "overlay", flex: 1 }}>{children}</Box>
        </Stack>
      </Stack>
    </SideBarContext.Provider>
  );
}
