import Box from "@/views/components/estructure/box/Box";
import Card from "@/views/components/estructure/card/Card";
import Container from "@/views/components/estructure/container/Container";
import Divider from "@/views/components/estructure/divider/Divider";
import Text from "@/views/components/estructure/text/Text";
import ShowdataMinimalist from "@/views/components/ui/showData/ShowdataMinimalist";
import React, { useContext, useState } from "react";
import ModalEditarCampo from "./windows/ModalEditarCampo";
import ModalEditarSenha from "./windows/ModalEditarSenha";
import { UserContext } from "@/contexts/UserContext";
import { ApiUserContext } from "@/pages/user/[idUser]";

export default function UserView() {
  const { updateUser } = useContext(ApiUserContext);
  const [modalEditarCampoConfig, setModalEditarCampoConfig] = useState({
    open: false,
  });
  const [isOpenModalAlterarSenha, setIsOpenModalAlterarSenha] = useState(false);
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <ModalEditarCampo
        onClose={() => setModalEditarCampoConfig(false)}
        isOpen={modalEditarCampoConfig.open}
        label={modalEditarCampoConfig.label}
        name={modalEditarCampoConfig.name}
        value={modalEditarCampoConfig.value}
        mutateFn={updateUser}
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
                  value: currentUser?.username,
                });
              }}
            >
              <ShowdataMinimalist
                label="Usuário"
                value={currentUser?.username}
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
                  value: currentUser?.email,
                });
              }}
            >
              <ShowdataMinimalist label="E-mail" value={currentUser?.email} />
            </Box>
            <Divider />
            <Box
              sp={{ cursor: "pointer" }}
              onClick={() => {
                setIsOpenModalAlterarSenha(true);
              }}
            >
              <ShowdataMinimalist label="Senha" value={"*********"} />
            </Box>
          </Card>
        </Box>
      </Container>{" "}
    </>
  );
}
