import { ViewLoginContext } from "../../..";
import Input from "@/views/components/ui/input/Input";
import Box from "@/views/components/estructure/box/Box";
import Stack from "@/views/components/estructure/stack/Stack";
import ButtonContained from "@/views/components/ui/buttons/ButtonContained";
import { ApiLoginContext } from "@/pages/login";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ButtonText from "@/views/components/ui/buttons/ButtonText";
import LinkNext from "@/views/components/estructure/link/LinkNext";

export default function LoginForm() {
  const { setStep } = useContext(ViewLoginContext);
  const { loginUser } = useContext(ApiLoginContext);
  const { push, query, isReady } = useRouter();
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target[0].value;
    const data = await loginUser({ password, idUser: query.userId });
    if (data) {
      if (data.status === "success") {
        console.log("logado");
      } else if (data.type === "INVALID_CREDENCIALS")
        setIsInvalidPassword(true);
    }
  };

  useEffect(() => {
    if (isReady && !query.userId) {
      setStep("confirmEmail");
      push("/login");
    }
  }, []);

  return (
    <Box component="form" onSubmit={handleSubmit} sp={{ position: "relative" }}>
      <Box component="section">
        <Input
          name="textinput"
          labelText={"Senha"}
          autoComplete="current-password"
          error={isInvalidPassword && "Senha inválida."}
          onChange={(e) => {
            setIsInvalidPassword(false);
            setIsInputEmpty(!e.target.value.length);
          }}
        />

        <Stack
          columnGap={"35px"}
          rowGap={"0.5rem"}
          sp={{
            marginTop: "15px",
            flexDirection: ["column", "row", "row"],
          }}
        >
          <ButtonContained type="submit" disabled={isInputEmpty}>
            Iniciar sessão
          </ButtonContained>
          <LinkNext
            href="/login"
            sp={{ display: "flex", flexDirection: ["column", "row"] }}
          >
            <ButtonText onClick={() => setStep("confirmEmail")}>
              Alterar conta{" "}
            </ButtonText>
          </LinkNext>
        </Stack>
      </Box>
    </Box>
  );
}
