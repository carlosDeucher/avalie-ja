import Card from "@/views/components/estructure/card/Card";
import Container from "@/views/components/estructure/container/Container";
import CreateProduct from "./sections/CreateProduct";
import { useState } from "react";
import MessageProductCreated from "./sections/MessageProductCreated";
import Text from "@/views/components/estructure/text/Text";

export default function AddProductView() {
  const [step, setStep] = useState("create");
  return (
    <>
      <Container component="main" maxWidth="tablet">
        <Card sp={{ padding: "25px", marginTop: "40px" }}>
          <Text component="h1" fontSize="large" fontWeight={500}>
            Cadastrar produto
          </Text>
          {step === "create" && <CreateProduct setStep={setStep} />}
          {step === "success" && <MessageProductCreated />}
        </Card>
      </Container>
    </>
  );
}
