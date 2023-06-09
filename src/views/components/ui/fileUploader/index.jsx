import React, { useContext } from "react";
import Box from "../../estructure/box/Box";
import { ThemeContext } from "@/contexts/ThemeProvider";
import Text from "../../estructure/text/Text";
import ReadyUrlContent from "./ui/ReadyUrlContent";
import EmptyUrlContent from "./ui/EmptyUrlContent";
import useInlineStyle from "@/hooks/useInlineStyles";

export default function FileUploader({ onChange, fileUrl, onRemove, sp }) {
  const { colors: colorsTheme } = useContext(ThemeContext);
  const styleProps = useInlineStyle(sp);

  return (
    <Box sp={styleProps}>
      <Box
        sp={{
          border: !fileUrl
            ? `2px dashed ${colorsTheme.primary.dark}`
            : `2px solid ${colorsTheme.secondary.main}`,
          borderRadius: "10px",
          transition: "all 300ms",
        }}
      >
        {!fileUrl ? (
          <EmptyUrlContent onChange={onChange} />
        ) : (
          <ReadyUrlContent fileUrl={fileUrl} onRemove={onRemove} />
        )}
      </Box>
      <Text
        sp={{ marginTop: "5px" }}
        fontSize={"small"}
        fontWeight={500}
        color={colorsTheme.primary.dark}
      >
        Formatos aceitos:
      </Text>
    </Box>
  );
}
