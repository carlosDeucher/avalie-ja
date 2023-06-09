import Box from "@/views/components/estructure/box/Box";
import Text from "@/views/components/estructure/text/Text";
import Image from "next/image";
import welcomeSvg from "../images/Welcome.svg";
import React from "react";

export default function ComeceAgora() {
  return (
    <Box
      sp={{
        width: "335px",
        marginTop: "30px",
        display: ["none", "none", "block"],
      }}
    >
      <Box
        sp={{
          width: "250px",
          margin: "0 auto",
          height: "250px",
          position: "relative",
        }}
      >
        <Image
          fill
          src={welcomeSvg}
          alt="imagem ilustrando que voce eh bem vindo!"
        />
      </Box>
      <Text
        fontSize="xmedium"
        fontWeight={500}
        sp={{  textAlign: "center" }}
      >
        Crie uma conta e avalie!
      </Text>
    </Box>
  );
}
