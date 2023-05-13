import Card from "@/views/components/estructure/card/Card";
import Box from "@/views/components/estructure/box/Box";
import { useContext } from "react";
import ConfirmEmailForm from "./ui/ConfirmEmailForm";
import LoginForm from "./ui/LoginForm";
import { ViewLoginContext } from "../..";

export default function Form() {
  const { step } = useContext(ViewLoginContext);

  return (
    <Box
      sp={{
        minWidth: ["100%", "350px", "470px"],
        width: "100%",
        maxWidth: "490px",
        flex: 1,
      }}
    >
      <Card
        sp={{
          padding: ["30px", "30px", "40px"],
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {step === "confirmEmail" && <ConfirmEmailForm />}
        {step === "login" && <LoginForm />}
      </Card>
    </Box>
  );
}
