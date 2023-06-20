import { ApiUserContext } from "@/pages/user/[idUser]";
import Box from "@/views/components/estructure/box/Box";
import Modal from "@/views/components/estructure/modal/Modal";
import Stack from "@/views/components/estructure/stack/Stack";
import Text from "@/views/components/estructure/text/Text";
import ButtonContained from "@/views/components/ui/buttons/ButtonContained";
import ButtonText from "@/views/components/ui/buttons/ButtonText";
import CheckBox from "@/views/components/ui/checkbox";
import Input from "@/views/components/ui/input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  "new-password": yup
    .string()
    .required("Campo requerido")
    .min(8, "A senha precisa ter no mínimo 8 carácteres"),
  "old-password": yup.string().required("Campo requerido"),
});

export default function ModalEditarSenha({ isOpen, onClose }) {
  const { updatePassword } = useContext(ApiUserContext);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (form) => {
    const data = await updatePassword({
      newPassword: form["new-password"],
      oldPassword: form["old-password"],
    });
    if (data?.status === "success") {
      onClose();
    } else if (data?.type === "INVALID_PASSWORD") {
      setError("old-password", { message: "Senha inválida" });
    }
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
      <Text fontSize="large">Alterar senha</Text>
      <Box
        component="form"
        id={"change-password"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          labelText={"Senha antiga"}
          type={showPassword ? "text" : "password"}
          register={register("old-password", {
            required: true,
          })}
          error={errors["old-password"]?.message}
          sp={{
            marginTop: "30px",
            width: "100%",
            minWidth: "100px",
          }}
        />
        <Input
          register={register("new-password", {
            required: true,
          })}
          error={errors["new-password"]?.message}
          labelText={"Nova senha"}
          type={showPassword ? "text" : "password"}
          sp={{
            width: "100%",
            minWidth: "100px",
          }}
        />
        <CheckBox
          value={showPassword}
          onClick={() => setShowPassword((oldValue) => !oldValue)}
          labelText="Mostrar senha"
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

        <ButtonContained type={"submit"} form="change-password">
          Alterar senha
        </ButtonContained>
      </Stack>
    </Modal>
  );
}
