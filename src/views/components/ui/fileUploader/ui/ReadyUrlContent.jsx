import { ThemeContext } from "@/contexts/ThemeProvider";
import Box from "@/views/components/estructure/box/Box";
import Stack from "@/views/components/estructure/stack/Stack";
import Text from "@/views/components/estructure/text/Text";
import React, { useContext } from "react";
import { MdCheck } from "react-icons/Md";
import ButtonText from "../../buttons/ButtonText";

export default function ReadyContent({ fileUrl, onRemove }) {
  const { colors: colorsTheme } = useContext(ThemeContext);
  return (
    <>
      <Box component="section">
        <Box
          component="a"
          href={fileUrl}
          target="_blank"
          sp={{ height: "10rem", cursor: "pointer", color: "inherit" }}
        >
          <Stack
            direction="column"
            sp={{ height: "100%" }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sp={{
                width: "50px",
                height: "50px",
                fontSize: "50px",
                color: colorsTheme.secondary.main,
              }}
            >
              <MdCheck />
            </Box>
            <Text sp={{ color: colorsTheme.secondary.dark }} fontSize="xmedium">
              Arquivo selecionado!
            </Text>
            <Text
              sp={{ marginTop: "5px", color: colorsTheme.secondary.dark }}
              fontSize="medium"
            >
              Clique para visualizar
            </Text>
            <ButtonText
              onClick={(e) => {
                e.preventDefault();
                onRemove();
              }}
              color="warning"
              sp={{
                "&:hover": {
                  textDecoration: "underline",
                },
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
              fontSize="medium"
            >
              Remover
            </ButtonText>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
