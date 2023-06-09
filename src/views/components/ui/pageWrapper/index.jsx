import React, { createContext, useState } from "react";
import Header from "./sections/header/Header";
import Stack from "../../estructure/stack/Stack";
import SideBar from "../sideBar";
import Box from "../../estructure/box/Box";
import { useRouter } from "next/router";
import { pagesLayout } from "@/utils/pagesLayout";

export const SideBarContext = createContext();
export default function PageWrapper({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  console.log(router.pathname)
  return (
    <SideBarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <Stack direction="column" sp={{ height: "100vh", overflow: "hidden" }}>
        <Header />
        <Stack sp={{ flex: 1 }}>
          {pagesLayout[router.route].renderSidebar && <SideBar />}

          <Box sp={{ overflow: "overlay", flex: 1 }}>{children}</Box>
        </Stack>
      </Stack>
    </SideBarContext.Provider>
  );
}
