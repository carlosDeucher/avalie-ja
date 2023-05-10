import { IoMdAlert } from "react-icons/Io";
import Text from "@/views/components/estructure/text/Text";
import ButtonContained from "@/views/components/ui/buttons/ButtonContained";
import Card from "@/views/components/estructure/card/Card";
import Input from "@/views/components/ui/input/Input";
import Box from "@/views/components/estructure/box/Box";
import Stack from "@/views/components/estructure/stack/Stack";
import ButtonText from "@/views/components/ui/buttons/ButtonText";
import { useContext, useState } from "react";
import { ContextTheme } from "@/contexts/ThemeProvider";
import { ApiLoginContext } from "@/pages/login";

export default function Form() {
  const { colors: colorsTheme } = useContext(ContextTheme);
  const { confirmUserEmail } = useContext(ApiLoginContext);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [isUserNotFound, setIsUserNotfound] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const data = await confirmUserEmail(email);
    if (data) {
      if (data.status === "success") console.log("logou");
      else if (data.type === "USER_NOT_FOUND") setIsUserNotfound(true);
    }
  };

  return (
    <Box sp={{ minWidth: ["100%", "100%", "490px"] }}>
      <Card
        component="form"
        onSubmit={handleSubmit}
        sp={{
          padding: ["30px", "30px", "40px"],
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
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
          <Text
            fontSize="small"
            color={colorsTheme.error.main}
            fontWeight={500}
          >
            Revise o seu e-mail.
          </Text>
        </Stack>

        <Stack
          columnGap={"20px"}
          rowGap={"0.5rem"}
          sp={{
            marginTop: "15px",
            flexDirection: ["column", "column", "row"],
          }}
        >
          <ButtonContained type="submit" disabled={isInputEmpty}>
            Continuar
          </ButtonContained>
          <ButtonText>Criar conta</ButtonText>
        </Stack>
      </Card>
    </Box>
  );
}
