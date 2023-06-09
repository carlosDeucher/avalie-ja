import Box from "@/views/components/estructure/box/Box";
import MainLink from "@/views/components/estructure/link/MainLink";
import Stack from "@/views/components/estructure/stack/Stack";
import Text from "@/views/components/estructure/text/Text";
import Image from "next/image";
import thanksSvg from "../images/thanks-svg.svg";
import React from "react";

export default function MessageProductCreated() {
  return (
    <>
      <Stack direction="column" alignItems="center">
        <Text fontSize="large" sp={{ marginTop: "30px", textAlign: "center" }}>
          Produto cadastrado com sucesso!
        </Text>
        <Text
          fontSize="medium"
          sp={{ marginTop: "10px", textAlign: "center" }}
        >
          Obrigado por ajudar outros consumidores!
        </Text>

        <Box
          sp={{
            width: ["180px", "300px"],
            height: ["180px", "300px"],
            position: "relative",
            margin:"20px 0"
          }}
        >
          <Image src={thanksSvg} fill />
        </Box>

        <MainLink
          fontSize={"xmedium"}
          sp={{ textAlign: "end", marginTop: "30px" }}
          href={"/home"}
        >
          Voltar para página inicial
        </MainLink>
      </Stack>
    </>
  );
}
