import React from "react";
import Modal from "../../estructure/modal/Modal";
import ButtonContained from "../buttons/ButtonContained";
import Text from "../../estructure/text/Text";

export default function PopupLogout({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} sp={{ padding: "15px" }}>
      <Text>Des-logar</Text>
      <ButtonContained onClick={onClose}>Sair</ButtonContained>
    </Modal>
  );
}
