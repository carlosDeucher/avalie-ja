import React, { useContext, useEffect, useState } from "react";
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
import { UserContext } from "@/contexts/UserContext";
import PopupLogout from "../popups/popupLogout";

export default function SideBar() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SideBarContext);
  const { user } = useContext(UserContext);
  const isMobile = useBreakpoint("mobile");
  const isMobileOrFirstRender = isMobile || isMobile === undefined;
  const [isOpenPopupLogout, setIsOpenPopupLogout] = useState(false);

  let widthSidebar;
  if (isMobileOrFirstRender) {
    widthSidebar = isSidebarOpen ? "250px" : 0;
  } else {
    widthSidebar = isSidebarOpen ? "250px" : "60px";
  }

  useEffect(() => setIsSidebarOpen(false), [isMobileOrFirstRender]);

  return (
    <>
      <PopupLogout
        isOpen={isOpenPopupLogout}
        onClose={() => setIsOpenPopupLogout(false)}
      />
      <Box
        onClick={(e) => {
          if (isMobileOrFirstRender && isSidebarOpen) setIsSidebarOpen(false);
        }}
        sp={
          isMobileOrFirstRender && isSidebarOpen
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
              justifyContent="space-between"
              sp={({ colors, shadows }) => ({
                width: widthSidebar,
                backgroundColor: colors.primary.dark,
                transition: "width 200ms",
                borderRadius: "10px",
                margin: (!isMobileOrFirstRender || isSidebarOpen) && "15px",
                marginRight: 0,
                boxShadow: shadows.xlarge,
                overflow: "hidden",
              })}
            >
              <Box>
                <Logo isMobileOrFirstRender={isMobileOrFirstRender} />
                <NavItem
                  route="/home"
                  href={"/home"}
                  label={"Home"}
                  Icon={() => <BiHomeAlt2 />}
                />
                <NavItem
                  route="/create_product"
                  href={"/create_product"}
                  label={"Novo produto"}
                  Icon={() => <BsPlusLg />}
                />
                <NavItem
                  route="/user/[idUser]"
                  href={"/user/" + user?.id}
                  label={"Meu perfil"}
                  Icon={() => <AiOutlineUser />}
                />
                <NavItem
                  onClick={() => setIsOpenPopupLogout(true)}
                  label={"Sair"}
                  Icon={() => <FiLogOut />}
                />{" "}
              </Box>
              <button onClick={() => setIsSidebarOpen((oldValue) => !oldValue)}>
                {isSidebarOpen ? "Fechar" : "Abrir"} sidebar
              </button>
            </Stack>{" "}
          </Stack>{" "}
        </AsideSelector>
      </Stack>
    </>
  );
}
