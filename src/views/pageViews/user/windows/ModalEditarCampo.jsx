import Modal from "@/views/components/estructure/modal/Modal";
import Stack from "@/views/components/estructure/stack/Stack";
import Text from "@/views/components/estructure/text/Text";
import ButtonContained from "@/views/components/ui/buttons/ButtonContained";
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
      sp={{ padding: "25px", paddingTop: "30px", width:"550px" }}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Text fontSize="large">Alterar campo</Text>
      <Input labelText={label} sp={{marginTop:"30px"}}  />
      <Stack justifyContent="end" columnGap={"10px"} sp={{marginTop:"20px"}}>
        <ButtonContained onClick={() => onClose}>Salvar</ButtonContained>
      </Stack>
    </Modal>
  );
}
