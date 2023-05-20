import Box from "@/views/components/estructure/box/Box";
import Card from "@/views/components/estructure/card/Card";
import Container from "@/views/components/estructure/container/Container";
import Stack from "@/views/components/estructure/stack/Stack";
import Text from "@/views/components/estructure/text/Text";
import ButtonContained from "@/views/components/ui/buttons/ButtonContained";
import ButtonText from "@/views/components/ui/buttons/ButtonText";
import CheckBox from "@/views/components/ui/checkbox";
import Input from "@/views/components/ui/input/Input";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import ComeceAgora from "./ui/ComeceAgora";
import LinkNext from "@/views/components/estructure/link/LinkNext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApiUserRegisterContext } from "@/pages/user_register";

const schema = yup.object({
  email: yup
    .string()
    .required("Informe o e-mail.")
    .email("Informe um e-mail válido."),
  password: yup.string().required("Informe a senha."),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
  username: yup.string().required("Informe o nome de usuário."),
});

export default function UserRegisterView() {
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const { createUser } = useContext(ApiUserRegisterContext);
  const [isPasswordDisplayed, setIsPasswordDisplayed] = useState(false);

  const onSubmit = async (form) => {
    const data = await createUser(form);
    if (data?.status === "success") {
      console.log("usuario criado");
    } else if (data?.type === "USED_EMAIL") {
      setError("email", { message: "Já existe uma conta com este e-mail." });
    }
  };

  return (
    <Container maxWidth={"laptop"}>
      <Card
        sp={{
          margin: "0 auto",
          marginTop: [0, "120px"],
          padding: "40px",
          width: ["100%", "fit-content"],
          height: ["100vh", "auto"],
        }}
      >
        <Stack>
          <Box sp={{ flex: 1 }}>
            <Text
              component="h1"
              sp={(theme) => ({ fontSize: theme.fontSizes.xmedium })}
            >
              Criar sua Conta do Avalie Ja
            </Text>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              id="register-form"
              sp={{ marginTop: "18px" }}
            >
              <Box component="section">
                <Input
                  labelText={"Username"}
                  register={register("username")}
                  error={errors.username?.message}
                  placeholder={"Esse será o nome visto por outros usuários"}
                  autoComplete="nickname"
                ></Input>
                <Input
                  labelText={"E-mail"}
                  register={register("email")}
                  error={errors.email?.message}
                  placeholder={"Digite o seu e-mail"}
                  autoComplete="email"
                  sp={{ marginTop: "18px" }}
                ></Input>
                <Stack
                  columnGap={"15px"}
                  sp={{ flexDirection: ["column", "row"] }}
                >
                  <Input
                    labelText={"Senha"}
                    register={register("password")}
                    autoComplete="new-password"
                    placeholder={"Digite a sua senha"}
                    error={errors.password?.message}
                    type={isPasswordDisplayed ? "text" : "password"}
                    sp={{ flex: 1, marginTop: "18px" }}
                  ></Input>
                  <Input
                    labelText={"Confirmar senha"}
                    register={register("confirm_password")}
                    autoComplete="off"
                    error={errors.confirm_password?.message}
                    placeholder={"Confirme a sua senhas"}
                    type={isPasswordDisplayed ? "text" : "password"}
                    sp={{ flex: 1, marginTop: "18px" }}
                  ></Input>
                </Stack>
                <CheckBox
                  sp={{ marginTop: "10px" }}
                  labelText="Mostrar senha"
                  value={isPasswordDisplayed}
                  onClick={() =>
                    setIsPasswordDisplayed((oldValue) => !oldValue)
                  }
                />
              </Box>
            </Box>
            <Stack
              justifyContent="center"
              columnGap={"10px"}
              rowGap={"10px"}
              sp={{
                width: "100%",
                marginBottom: "24px",
                marginTop: "40px",
                flexDirection: ["column-reverse", "row"],
              }}
            >
              <LinkNext href="/login" style={{ display: "flex", flex: 1 }}>
                <ButtonText
                  sp={{ minWidth: "max-content", width: ["100%", "auto"] }}
                >
                  Faça login em vez disso
                </ButtonText>
              </LinkNext>
              <ButtonContained type="submit" form="register-form">
                Finalizar
              </ButtonContained>
            </Stack>
          </Box>
          <ComeceAgora />
        </Stack>
      </Card>
    </Container>
  );
}
