import { ContextTheme } from "@/contexts/ThemeProvider";
import { ViewLoginContext } from "../../..";
import Input from "@/views/components/ui/input/Input";
import Box from "@/views/components/estructure/box/Box";
import Stack from "@/views/components/estructure/stack/Stack";
import { IoMdAlert } from "react-icons/Io";
import Text from "@/views/components/estructure/text/Text";
import ButtonContained from "@/views/components/ui/buttons/ButtonContained";
import { ApiLoginContext } from "@/pages/login";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import ButtonText from "@/views/components/ui/buttons/ButtonText";

export default function ConfirmEmailForm() {
  const { setStep } = useContext(ViewLoginContext);
  const { colors: colorsTheme } = useContext(ContextTheme);
  const { confirmUserEmail } = useContext(ApiLoginContext);
  const { push } = useRouter();
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [isUserNotFound, setIsUserNotfound] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const data = await confirmUserEmail(email);
      if (data.status === "success") {
        setStep("login");
        push(
          `/login?step=login&username=${encodeURI(data.data.username)}&userId=${
            data.data.id
          }`
        );
      } else if (data.type === "USER_NOT_FOUND") setIsUserNotfound(true);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Input
        sp={{ flex: 1 }}
        name="textinput"
        labelText={"Digite o seu email"}
        error={isUserNotFound}
        onChange={(e) => {
          setIsUserNotfound(false);
          setIsInputEmpty(!e.target.value.length);
        }}
      />
      <Stack
        alignItems={"center"}
        columnGap={"4px"}
        sp={{
          marginTop: "3px",
          opacity: isUserNotFound ? 1 : 0,
          marginLeft: "2px",
        }}
      >
        <IoMdAlert color={colorsTheme.error.main} />
        <Text fontSize="small" color={colorsTheme.error.main} fontWeight={500}>
          Revise o seu e-mail.
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
          Continuar
        </ButtonContained>
        <ButtonText>Criar conta</ButtonText>
      </Stack>
    </Box>
  );
}
