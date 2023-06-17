import Stack from "@/views/components/estructure/stack/Stack";
import ContainerLogin from "@/views/components/estructure/container/ContainerLogin";
import { createContext, useEffect, useState } from "react";
import Form from "./sections/form";
import Descriptions from "./sections/descriptions";

export const ViewLoginContext = createContext();
export default function LoginView() {
  const [step, setStep] = useState("confirmEmail");
  const [userPublicInfos, setUserPublicInfos] = useState();

  useEffect(() => {
    const userPublicInfo = JSON.parse(
      localStorage.getItem("user_public_infos")
    );
    setUserPublicInfos(userPublicInfo);
    if (userPublicInfo) setStep("login");
    else setStep("confirmEmail");
  }, []);

  return (
    <ViewLoginContext.Provider
      value={{ step, setStep, userPublicInfos, setUserPublicInfos }}
    >
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
