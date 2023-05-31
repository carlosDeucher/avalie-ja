import Stack from "@/views/components/estructure/stack/Stack";
import ContainerLogin from "@/views/components/estructure/container/ContainerLogin";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Form from "./sections/form";
import Descriptions from "./sections/descriptions";

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
