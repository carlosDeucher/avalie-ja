import { ThemeContext } from "@/contexts/ThemeProvider";
import { ViewLoginContext } from "../../..";
import Input from "@/views/components/ui/input/Input";
import Box from "@/views/components/estructure/box/Box";
import Stack from "@/views/components/estructure/stack/Stack";
import { IoMdAlert } from "react-icons/Io";
import Text from "@/views/components/estructure/text/Text";
import ButtonContained from "@/views/components/ui/buttons/ButtonContained";
import { ApiLoginContext } from "@/pages/login";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ButtonText from "@/views/components/ui/buttons/ButtonText";

export default function LoginForm() {
  const { setStep } = useContext(ViewLoginContext);
  const { colors: colorsTheme } = useContext(ThemeContext);
  const { loginUser } = useContext(ApiLoginContext);
  const { push, query, isReady } = useRouter();
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target[0].value;
    const data = await loginUser({ password, idUser: query.userId });
    console.log(data)
    if (data) {
      if (data.status === "success") {
        console.log("logado")
      } else if (data.type === "INVALID_CREDENCIALS") setIsInvalidPassword(true);
    }
  };

  useEffect(() => {
    if (isReady && !query.userId) {
      setStep("confirmEmail");
      push("/login");
    }
  }, []);

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Input
        sp={{ flex: 1 }}
        name="textinput"
        labelText={"Senha"}
        error={isInvalidPassword}
        onChange={(e) => {
          setIsInvalidPassword(false);
          setIsInputEmpty(!e.target.value.length);
        }}
      />
      <Stack
        alignItems={"center"}
        columnGap={"4px"}
        sp={{
          marginTop: "3px",
          opacity: isInvalidPassword ? 1 : 0,
          marginLeft: "2px",
        }}
      >
        <IoMdAlert color={colorsTheme.error.main} />
        <Text fontSize="small" color={colorsTheme.error.main} fontWeight={500}>
          Senha inválida.
        </Text>
      </Stack>

      <Stack
        columnGap={"20px"}
        rowGap={"0.5rem"}
        sp={{
          marginTop: "15px",
          flexDirection: ["column", "row", "row"],
        }}
      >
        <ButtonContained type="submit" disabled={isInputEmpty}>
          Iniciar sessão
        </ButtonContained>
        <ButtonText
          onClick={() => {
            setStep("confirmEmail");
            push("/login");
          }}
        >
          Alterar conta{" "}
        </ButtonText>
      </Stack>
    </Box>
  );
}
