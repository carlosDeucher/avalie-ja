import Stack from "@/views/components/estructure/stack/Stack";
import Header from "@/views/components/ui/header/Header";
import ContainerLogin from "@/views/components/estructure/container/ContainerLogin";
import Descriptions from "./sections/Descriptions";
import Form from "./sections/Form";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const ViewLoginContext = createContext();
export default function LoginView() {
  const [step, setStep] = useState("confirmEmail");
  const router = useRouter();

  useEffect(() => {
    if (router.query.step === "confirmEmail") setStep("confirmEmail");
    if (router.query.step === "login") setStep("login");
  }, [router.query]);

  return (
    <ViewLoginContext.Provider value={{ step, setStep }}>
      <Header></Header>
      <ContainerLogin maxWidth="laptop">
        <Stack
          justifyContent={"center"}
          rowGap={"0.8rem"}
          sp={{
            marginTop: "30px",
            flexDirection: ["column", "row"],
            minWidth: ["100%", "100%", "none"],
          }}
        >
          <Descriptions />
          <Form />
        </Stack>
      </ContainerLogin>
    </ViewLoginContext.Provider>
  );
}
