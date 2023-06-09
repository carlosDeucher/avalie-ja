import Modal from "@/views/components/estructure/modal/Modal";
import Stack from "@/views/components/estructure/stack/Stack";
import Text from "@/views/components/estructure/text/Text";
import React, { useEffect, useRef, useState } from "react";
import { ReactCrop, centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/src/ReactCrop.scss";
import ButtonContained from "../../buttons/ButtonContained";
import { useRouter } from "next/router";
import { canvasPreview } from "./ui/canvasPreview";
import Box from "@/views/components/estructure/box/Box";
import ButtonText from "../../buttons/ButtonText";

function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}
const initialCrop = {
  unit: "%", // Can be 'px' or '%'
  x: 20,
  y: 20,
  width: 20,
  height: 20,
};
export default function PopupEditImage({ isOpen, onClose, imageSrc, onSave }) {
  const [crop, setCrop] = useState(initialCrop);
  const [completedCrop, setCompletedCrop] = useState(initialCrop);
  const imgElementRef = useRef();
  const canvasPreviewRef = useRef();
  const imgSrcRef = useRef();
  if (imageSrc) imgSrcRef.current = imageSrc; // enquanto a animacao de desmontar popup executa a imagem nao desaparece
  const aspect = 1;

  const onLoadImage = (e) => {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, aspect));
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Box sp={{ padding: "30px" }}>
        <Text fontSize="large" sp={{ marginBottom: "30px" }}>
          Cortar imagem
        </Text>
        {!!imgSrcRef.current && (
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={aspect}
          >
            {" "}
            <img
              alt="Crop me"
              ref={imgElementRef}
              src={imgSrcRef.current}
              onLoad={onLoadImage}
              style={{
                transform: `scale(${1}) rotate(${0}deg)`,
                width: "600px",
              }}
            />
          </ReactCrop>
        )}
        <Stack
          sp={{
            flexDirection: ["column", "row"],
            justifyContent: "end",
            marginTop: "45px",
            columnGap: "30px",
            rowGap: "10px",
          }}
        >
          <ButtonText onClick={onClose} color="cancel">
            Cancelar
          </ButtonText>
          <ButtonContained
            onClick={() => {
              canvasPreview(
                imgElementRef.current,
                canvasPreviewRef.current,
                completedCrop
              );
              canvasPreviewRef.current.toBlob((fileBlob) => onSave(fileBlob));
            }}
          >
            Salvar
          </ButtonContained>
        </Stack>
      </Box>
      <canvas ref={canvasPreviewRef} style={{ display: "none" }}></canvas>
    </Modal>
  );
}
