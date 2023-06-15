import Box from "@/views/components/estructure/box/Box";
import Stack from "@/views/components/estructure/stack/Stack";
import Image from "next/image";
import React, { useContext } from "react";
import logoSmall from "public/logos/logo-small.png";
import { SideBarContext } from "../../pageWrapper";

export default function Logo() {
  const { isSidebarOpen } = useContext(SideBarContext);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sp={({ colors }) => ({
        width: "100%",
        padding: "10px 0",
        backgroundColor: colors.primary.main,
        borderBottom: `1px solid #283a63`,
        boxShadow: "0 2px 4px #283a63",
      })}
    >
      <Image
        priority
        src={logoSmall}
        width={50}
        height={50}
        style={{ transition: "all 200ms" }}
        alt="logo da marca"
      />
    </Stack>
  );
}
