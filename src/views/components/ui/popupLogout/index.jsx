import React from "react";
import Modal from "../../estructure/modal/Modal";
import ButtonContained from "../buttons/ButtonContained";
import Text from "../../estructure/text/Text";
import Stack from "../../estructure/stack/Stack";
import ButtonText from "../buttons/ButtonText";
import Divider from "../../estructure/divider/Divider";
import Box from "../../estructure/box/Box";

export default function PopupLogout({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} sp={{ width: "500px" }}>
      <Box sp={{ padding: "20px", paddingTop: "25px" }}>
        <Text component="h3" fontSize="large">
          Até logo!
        </Text>
        <Text sp={{ marginTop: "10px" }}>Tem certeza que deseja sair?</Text>
      </Box>
      <Divider sp={{ marginTop: "10px" }} />
      <Stack
        justifyContent="end"
        rowGap="15px"
        columnGap={"30px"}
        sp={{ flexDirection: ["column-reverse", "row"], padding: "15px" }}
      >
        <ButtonText color="cancel" onClick={onClose}>
          Cancelar
        </ButtonText>
        <ButtonContained color="error" onClick={onClose}>
          Sair
        </ButtonContained>
      </Stack>
    </Modal>
  );
}
