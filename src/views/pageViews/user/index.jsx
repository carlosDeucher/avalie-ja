import Box from "@/views/components/estructure/box/Box";
import Card from "@/views/components/estructure/card/Card";
import Container from "@/views/components/estructure/container/Container";
import Divider from "@/views/components/estructure/divider/Divider";
import Text from "@/views/components/estructure/text/Text";
import ShowdataMinimalist from "@/views/components/ui/showData/ShowdataMinimalist";
import React, { useState } from "react";
import ModalEditarCampo from "./windows/ModalEditarCampo";

export default function UserView() {
  const [isOpenModalEditar, setIsOpenModalEditar] = useState(false);
  return (
    <>
      <ModalEditarCampo
        onClose={() => setIsOpenModalEditar(false)}
        isOpen={isOpenModalEditar}
        label={"Informe o novo e-mail"}
      />
      <Container maxWidth="tablet">
        <Text sp={{ marginTop: "40px" }} fontSize={"large"}>
          Meus dados
        </Text>
        <Text sp={{ marginTop: "30px" }} fontSize={"xmedium"}>
          Dados da conta
        </Text>
        <Card sp={{ marginTop: "10px" }}>
          <Box
            sp={{ cursor: "pointer" }}
            onClick={() => {
              setIsOpenModalEditar(true);
            }}
          >
            <ShowdataMinimalist
              label="Usuário"
              value={"carlos henrique deucher"}
            />
          </Box>
          <Divider />
          <Box
            sp={{ cursor: "pointer" }}
            onClick={() => {
              setIsOpenModalEditar(true);
            }}
          >
            <ShowdataMinimalist
              label="E-mail"
              value={"carloshenriquedeucher@gmail.com"}
            />
          </Box>
          <Divider />
          <Box
            sp={{ cursor: "pointer" }}
            onClick={() => {
              setIsOpenModalEditar(true);
            }}
          >
            <ShowdataMinimalist
              label="Senha"
              value={"carlos henrique deucher"}
            />
          </Box>
        </Card>
      </Container>{" "}
    </>
  );
}
