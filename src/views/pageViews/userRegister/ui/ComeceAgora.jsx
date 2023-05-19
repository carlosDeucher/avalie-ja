import Box from "@/views/components/estructure/box/Box";
import Text from "@/views/components/estructure/text/Text";
import React from "react";

export default function ComeceAgora() {
  return (
    <Box
      sp={{
        width: "335px",
        marginTop: "72px",
        display: ["none", "none", "block"],
      }}
    >
      <Box
        sp={{
          width: "150px",
          margin: "0 auto",
          height: "150px",
          backgroundColor: "black",
        }}
      ></Box>
      <Text sp={{ marginTop: "20px", textAlign: "center" }}>
        Comece agora no Avalie Ja
      </Text>
    </Box>
  );
}
