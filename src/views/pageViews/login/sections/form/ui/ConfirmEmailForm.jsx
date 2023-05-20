import { ThemeContext } from "@/contexts/ThemeProvider";
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

export default function ConfirmEmailForm() {
  const { confirmUserEmail } = useContext(ApiLoginContext);
  const { push } = useRouter();
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [isUserNotFound, setIsUserNotfound] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const data = await confirmUserEmail(email);
    if (data.status === "success") {
      push(
        `/login?step=login&username=${encodeURI(data.data.username)}&userId=${
          data.data.id
        }`
      );
    } else if (data.type === "USER_NOT_FOUND") setIsUserNotfound(true);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Box component="section">
        <Input
          name="textinput"
          labelText={"Digite o seu email"}
          autoComplete="email"
          error={isUserNotFound && "Revise o seu e-mail."}
          onChange={(e) => {
            setIsUserNotfound(false);
            setIsInputEmpty(!e.target.value.length);
          }}
        />

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
          <LinkNext
            href="/user_register"
            sp={{ display: "flex", flexDirection: ["column", "row"] }}
          >
            <ButtonText>Criar conta</ButtonText>
          </LinkNext>
        </Stack>
      </Box>
    </Box>
  );
}
