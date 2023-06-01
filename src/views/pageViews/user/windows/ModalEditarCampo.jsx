import Box from "@/views/components/estructure/box/Box";
import Modal from "@/views/components/estructure/modal/Modal";
import Stack from "@/views/components/estructure/stack/Stack";
import Text from "@/views/components/estructure/text/Text";
import ButtonContained from "@/views/components/ui/buttons/ButtonContained";
import ButtonText from "@/views/components/ui/buttons/ButtonText";
import Input from "@/views/components/ui/input/Input";
import React from "react";

export default function ModalEditarCampo({
  isOpen,
  onClose,
  postFunction,
  name,
  format,
  label,
}) {
  return (
    <Modal
      sp={{
        padding: "25px",
        paddingTop: "30px",
        width: "500px",
      }}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Text fontSize="large">Alterar campo</Text>
      <Input
        labelText={label}
        sp={{
          marginTop: "30px",
          width: "100%",
          minWidth: "100px",
        }}
      />
      <Stack
        justifyContent="end"
        rowGap="15px"
        columnGap={"30px"}
        sp={{ marginTop: "20px", flexDirection: ["column-reverse", "row"] }}
      >
        <ButtonText color="cancel" onClick={onClose}>
          Cancelar
        </ButtonText>

        <ButtonContained onClick={onClose}>Salvar</ButtonContained>
      </Stack>
    </Modal>
  );
}
