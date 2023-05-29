import React from "react";
import Stack from "../../estructure/stack/Stack";
import NavItem from "./ui/NavItem";
import { BiHomeAlt2 } from "react-icons/Bi";
import { BsPlusLg } from "react-icons/Bs";
import { FiLogOut } from "react-icons/Fi";
import { AiOutlineUser } from "react-icons/Ai";
import Logo from "./ui/Logo";

export default function SideBar() {
  return (
    <Stack
      direction="column"
      sp={({ colors, shadows }) => ({
        minWidth: ["60px", "250px"],
        backgroundColor: colors.primary.main,
        transition: "min-width 200ms",
        borderRadius: "10px",
        margin: "15px",
        marginRight: 0,
        boxShadow: shadows.xlarge,
        overflow: "hidden",
      })}
    >
      <Logo />
      <NavItem label={"Home"} Icon={() => <BiHomeAlt2 />} />
      <NavItem label={"Novo produto"} Icon={() => <BsPlusLg />} />
      <NavItem label={"Meu perfil"} Icon={() => <AiOutlineUser />} />
      <NavItem label={"Sair"} Icon={() => <FiLogOut />} />
    </Stack>
  );
}
