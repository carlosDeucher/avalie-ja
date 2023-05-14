import Box from "@/views/components/estructure/box/Box";
import Card from "@/views/components/estructure/card/Card";
import Container from "@/views/components/estructure/container/Container";
import Stack from "@/views/components/estructure/stack/Stack";
import Text from "@/views/components/estructure/text/Text";
import ButtonContained from "@/views/components/ui/buttons/ButtonContained";
import ButtonText from "@/views/components/ui/buttons/ButtonText";
import CheckBox from "@/views/components/ui/checkbox";
import Input from "@/views/components/ui/input/Input";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import ComeceAgora from "./ui/ComeceAgora";

export default function UserRegisterView() {
  const { register } = useForm();
  return (
    <Container maxWidth={"laptop"}>
      <Card sp={{ marginTop: "20px", padding: "40px" }}>
        <Stack>
          <Box>
            <Text component="h1">Criar sua Conta do Avalie Ja</Text>
            {/* <Text component="h1">Criar sua Conta do Avalie Ja</Text> */}
            <Box component="form" sp={{ marginTop: "24px" }}>
              <Box component="section">
                <Input
                  labelText={"Username"}
                  name={"username"}
                  register={register}
                  placeholder={"Esse será o nome visto por outros usuários"}
                ></Input>
                <Input
                  labelText={"E-mail"}
                  name={"email"}
                  register={register}
                  placeholder={"Digite o seu e-mail"}
                  sp={{ marginTop: "24px" }}
                ></Input>
                <Stack columnGap={"15px"}>
                  <Input
                    labelText={"Senha"}
                    name={"password"}
                    register={register}
                    placeholder={"Digite a sua senha"}
                    type={"password"}
                    sp={{ flex: 1, marginTop: "24px" }}
                  ></Input>
                  <Input
                    labelText={"Confirmar senha"}
                    name={"confirm_password"}
                    register={register}
                    placeholder={"Confirme a sua senhas"}
                    type={"password"}
                    sp={{ flex: 1, marginTop: "24px" }}
                  ></Input>
                </Stack>
                <CheckBox />
              </Box>
            </Box>
            <Stack
              justifyContext="space-between"
              sp={{ width: "100%", marginBottom: "24px", marginTop: "40px" }}
            >
              <Link href="/login">
                <ButtonText>Faça login em vez disso</ButtonText>
              </Link>
              <ButtonContained type="submit">Finalizar</ButtonContained>
            </Stack>
          </Box>
          <ComeceAgora />
        </Stack>
      </Card>
    </Container>
  );
}
