import Box from "@/views/components/estructure/box/Box";
import Stack from "@/views/components/estructure/stack/Stack";
import Text from "@/views/components/estructure/text/Text";
import React from "react";
import Dropzone from "react-dropzone";
import { MdFileUpload } from "react-icons/Md";

export default function EmptyUrlContent({onChange}) {
  return (
    <Dropzone
      onDrop={(acceptedFiles) => {
        const reader = new FileReader();
        reader.addEventListener("load", () =>
          onChange(reader.result?.toString() || "")
        );
        reader.readAsDataURL(acceptedFiles[0]);
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <Box component="section">
          <Box sp={{ height: "150px", cursor: "pointer" }} {...getRootProps()}>
            <input {...getInputProps()} />
            <Stack
              direction="column"
              sp={{ height: "100%" }}
              justifyContent="center"
              alignItems="center"
            >
              <Box
                sp={({ colors }) => ({
                  width: "50px",
                  height: "50px",
                  fontSize: "50px",
                  color: colors.primary.dark,
                })}
              >
                <MdFileUpload />
              </Box>
              <Text sp={{ marginTop: "10px" }} fontSize="xmedium">
                Arraste ou solte aqui
              </Text>
            </Stack>
          </Box>
        </Box>
      )}
    </Dropzone>
  );
}
