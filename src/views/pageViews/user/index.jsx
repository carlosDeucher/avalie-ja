import Box from "@/views/components/estructure/box/Box";
import Card from "@/views/components/estructure/card/Card";
import Container from "@/views/components/estructure/container/Container";
import Divider from "@/views/components/estructure/divider/Divider";
import Text from "@/views/components/estructure/text/Text";
import ShowdataMinimalist from "@/views/components/ui/showData/ShowdataMinimalist";
import React, { useState } from "react";
import ModalEditarCampo from "./windows/ModalEditarCampo";
import ModalEditarSenha from "./windows/ModalEditarSenha";

export default function UserView() {
  const [modalEditarCampoConfig, setModalEditarCampoConfig] = useState({
    open: false,
  });
  const [isOpenModalAlterarSenha, setIsOpenModalAlterarSenha] = useState(false);
  return (
    <>
      <ModalEditarCampo
        onClose={() => setModalEditarCampoConfig(false)}
        isOpen={modalEditarCampoConfig.open}
        label={modalEditarCampoConfig.label}
        name={modalEditarCampoConfig.name}
      />
      <ModalEditarSenha
        isOpen={isOpenModalAlterarSenha}
        onClose={() => setIsOpenModalAlterarSenha(false)}
      />
      <Container component="main" maxWidth="tablet">
        <Box component="section">
          <Text component="h1" sp={{ marginTop: "40px" }} fontSize={"large"}>
            Meus dados
          </Text>
          <Text component="h2" sp={{ marginTop: "30px" }} fontSize={"xmedium"}>
            Dados da conta
          </Text>
          <Card sp={{ marginTop: "10px" }}>
            <Box
              sp={{ cursor: "pointer" }}
              onClick={() => {
                setModalEditarCampoConfig({
                  open: true,
                  label: "Informe o novo nome de usuário",
                  name: "username",
                });
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
                setModalEditarCampoConfig({
                  open: true,
                  label: "Informe o novo e-mail",
                  name: "email",
                });
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
                setIsOpenModalAlterarSenha(true);
              }}
            >
              <ShowdataMinimalist
                label="Senha"
                value={"carlos henrique deucher"}
              />
            </Box>
          </Card>
        </Box>
      </Container>{" "}
    </>
  );
}
