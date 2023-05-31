import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeProvider";
import Box from "../../../../estructure/box/Box";
import { MdMenu } from "react-icons/Md";
import { SideBarContext } from "../..";

export default function Header() {
  const { colors: colorsTheme } = useContext(ThemeContext);
  const { isSidebarOpen, setisSidebarOpen } =
    useContext(SideBarContext);
  return (
    <>
      <Box
        component="header"
        sp={{ backgroundColor: colorsTheme.primary.main, height: "4rem" }}
      >
        <Box
          onClick={() => setisSidebarOpen(true)}
          sp={{
            padding: "15px",
            color: colorsTheme.grey[3],
            display: ["block", "none"],
            fontSize: "25px",
            ":hover": {
              color: colorsTheme.grey[5],
            },
          }}
        >
          <MdMenu />
        </Box>
      </Box>
    </>
  );
}
