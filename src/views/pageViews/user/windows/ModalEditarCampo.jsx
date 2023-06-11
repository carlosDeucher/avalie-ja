import Box from "@/views/components/estructure/box/Box";
import Modal from "@/views/components/estructure/modal/Modal";
import Stack from "@/views/components/estructure/stack/Stack";
import Text from "@/views/components/estructure/text/Text";
import ButtonContained from "@/views/components/ui/buttons/ButtonContained";
import ButtonText from "@/views/components/ui/buttons/ButtonText";
import Input from "@/views/components/ui/input/Input";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

export default function ModalEditarCampo({
  isOpen,
  onClose,
  postFunction,
  name,
  label,
}) {
  const labelRef = useRef("");
  if (label) labelRef.current = label; //mantem o label enquanto o componente se desmonta

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (form) => {
    const success = await postFunction(form);
    if (success) onClose();
  };

  useEffect(() => {
    reset();
  }, [isOpen]);

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
      <Box component="form" id="change-data" onSubmit={handleSubmit(onSubmit)}>
        <Input
          labelText={labelRef.current}
          register={name && register(name, { required: true })}
          error={errors[name] && "Campo requerido"}
          sp={{
            marginTop: "30px",
            width: "100%",
            minWidth: "100px",
          }}
        />
      </Box>
      <Stack
        justifyContent="end"
        rowGap="15px"
        columnGap={"30px"}
        sp={{ marginTop: "20px", flexDirection: ["column-reverse", "row"] }}
      >
        <ButtonText color="cancel" onClick={onClose}>
          Cancelar
        </ButtonText>

        <ButtonContained type="submit" form="change-data">
          Salvar
        </ButtonContained>
      </Stack>
    </Modal>
  );
}
