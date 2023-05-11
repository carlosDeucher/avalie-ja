import Stack from "@/views/components/estructure/stack/Stack";
import Header from "@/views/components/ui/header/Header";
import ContainerLogin from "@/views/components/estructure/container/ContainerLogin";
import Descriptions from "./sections/Descriptions";
import Form from "./sections/Form";

export default function ConfirmEmailView() {
  return (
    <>
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
    </>
  );
}
