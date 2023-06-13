import { useContext, useEffect } from "react";
import { ThemeContext } from "@/contexts/ThemeProvider";
import Box from "../../../../estructure/box/Box";
import { MdMenu } from "react-icons/Md";
import { SideBarContext } from "../..";
import Container from "@/views/components/estructure/container/Container";
import Image from "next/image";
import logoEscrita from "public/logos/logo-escrita.png";
import Stack from "@/views/components/estructure/stack/Stack";
import { pagesLayout } from "@/utils/pagesLayout";
import { useRouter } from "next/router";

export default function Header() {
  const { colors: colorsTheme } = useContext(ThemeContext);
  const { setIsSidebarOpen } = useContext(SideBarContext);
  const router = useRouter();

  return (
    <>
      <Box
        component="header"
        sp={{
          backgroundColor: colorsTheme.primary.main,
          minHeight: "3rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        {pagesLayout[router.route].renderSidebar ? (
          <Stack
            sp={{
              height: "100%",
              padding: "0 15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component="button"
              onClick={() => setIsSidebarOpen(true)}
              sp={{
                color: colorsTheme.grey[3],
                display: ["block", "none"],
                fontSize: "25px",
                cursor: "pointer",
                ":hover": {
                  color: colorsTheme.grey[5],
                },
              }}
            >
              <MdMenu />
            </Box>
          </Stack>
        ) : (
          <Box sp={{ minWidth: "55px" }} />
        )}

        <Container
          maxWidth={"desktop"}
          sp={{
            padding: 0,
            alignItems: "center",
            height: "100%",
            display: "flex",
            flex: 1,
          }}
        >
          <Box
            sp={{
              position: "relative",
              width: "6.25rem",
              height: "2.2rem",
              transform: "translateY(-0.4rem)",
            }}
          >
            <Image priority src={logoEscrita} fill alt="logo da marca" />
          </Box>
        </Container>
      </Box>
    </>
  );
}
