import React, { useContext, useEffect } from "react";
import Stack from "../../estructure/stack/Stack";
import NavItem from "./ui/NavItem";
import { BiHomeAlt2 } from "react-icons/Bi";
import { BsPlusLg } from "react-icons/Bs";
import { FiLogOut } from "react-icons/Fi";
import { AiOutlineUser } from "react-icons/Ai";
import Logo from "./ui/Logo";
import useBreakpoint from "@/hooks/useBreakpoint";
import Box from "../../estructure/box/Box";
import { SideBarContext } from "../pageWrapper";
import AsideSelector from "./ui/AsideSelector";

export default function SideBar() {
  const { isSidebarOpen, setisSidebarOpen } = useContext(SideBarContext);
  const isMobile = useBreakpoint("mobile");
  let widthSidebar;
  if (isMobile) {
    widthSidebar = isSidebarOpen ? "250px" : 0;
  } else {
    widthSidebar = isSidebarOpen ? "250px" : "60px";
  }

  useEffect(() => setisSidebarOpen(false), [isMobile]);

  return (
    <>
      <Box
        onClick={(e) => {
          if (isMobile && isSidebarOpen) setisSidebarOpen(false);
        }}
        sp={
          isMobile && isSidebarOpen
            ? {
                position: "absolute",
                inset: 0,
                backgroundColor: `rgba(0, 0, 0, 0.3)`,
              }
            : {}
        }
      />
      <Stack
        sp={{
          position: "relative",
        }}
      >
        <AsideSelector>
          <Stack component="nav">
            <Stack
              component="ul"
              direction="column"
              sp={({ colors, shadows }) => ({
                width: widthSidebar,
                backgroundColor: colors.primary.main,
                transition: "width 200ms",
                borderRadius: "10px",
                margin: (!isMobile || isSidebarOpen) && "15px",
                marginRight: 0,
                boxShadow: shadows.xlarge,
                overflow: "hidden",
              })}
            >
              <Logo />
              <NavItem href={"#"} label={"Home"} Icon={() => <BiHomeAlt2 />} />
              <NavItem
                href={"#"}
                label={"Novo produto"}
                Icon={() => <BsPlusLg />}
              />
              <NavItem
                href={"/user"}
                label={"Meu perfil"}
                Icon={() => <AiOutlineUser />}
              />
              <NavItem href={"#"} label={"Sair"} Icon={() => <FiLogOut />} />
              <button onClick={() => setisSidebarOpen((oldValue) => !oldValue)}>
                Abrir sidebar
              </button>
            </Stack>{" "}
          </Stack>{" "}
        </AsideSelector>
      </Stack>
    </>
  );
}
