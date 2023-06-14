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
import ButtonContained from "../../../buttons/ButtonContained";
import LinkNext from "@/views/components/estructure/link/LinkNext";
import Input from "../../../input/Input";
import useBreakpoint from "@/hooks/useBreakpoint";

export default function Header() {
  const { colors: colorsTheme } = useContext(ThemeContext);
  const { setIsSidebarOpen } = useContext(SideBarContext);
  const isMobile = useBreakpoint("mobile");
  const router = useRouter();

  return (
    <>
      <Box
        component="header"
        sp={{
          backgroundColor: colorsTheme.primary.main,
          minHeight: "4rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        {pagesLayout[router.route].renderSidebar && isMobile && (
          <Stack
            sp={{
              height: "100%",
              paddingLeft: "15px",
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
        )}

        <Container
          maxWidth={"desktop"}
          sp={{
            padding: "0 20px",
            alignItems: "center",
            height: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <LinkNext href="/home">
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
          </LinkNext>

          <LinkNext href="/create_product">
            <ButtonContained
              sp={{ height: "2rem", borderRadius: "20px", fontWeight: 400 }}
            >
              Avalie!
            </ButtonContained>
          </LinkNext>
        </Container>
      </Box>
    </>
  );
}
