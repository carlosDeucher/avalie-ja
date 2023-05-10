import Divider from "@/views/components/estructure/divider/Divider";
import { FaLinkedinIn } from "react-icons/Fa";
import { MdArrowForwardIos } from "react-icons/Md";
import { FiGithub } from "react-icons/Fi";
import Box from "@/views/components/estructure/box/Box";
import Stack from "@/views/components/estructure/stack/Stack";
import { ContextTheme } from "@/contexts/ThemeProvider";
import { useContext } from "react";
import Text from "@/views/components/estructure/text/Text";

export default function Descriptions() {
  const { fontSizes: fontSizesTheme, colors: colorsTheme } =
    useContext(ContextTheme);
  return (
    <Box
      sp={{
        maxWidth: ["100%", "100%", "330px"],
        width: "100%",
        marginRight: "30px",
      }}
    >
      <Text fontSize={"large"} fontWeight={600}>
        Digite o seu{" "}
        <Text component={"span"} sp={{ whiteSpace: "nowrap" }}>
          e-mail
        </Text>{" "}
        do Avalie&nbsp;Ja
      </Text>
      <Divider sp={{ width: "65%", margin: "15px 0" }} />
      <Box sp={{ maxWidth: ["100%", "100%", "250px"] }}>
        <Text sp={{ fontWeight: 700, fontSize: fontSizesTheme.small }}>
          Powered by Carlos Henrique Deucher
        </Text>
        <Box>
          <Box
            sp={{
              padding: "0.5rem 0",
              marginTop: "0.5rem",
              display: "inline-block",
              width: "100%",
              "&:hover": {
                backgroundColor: colorsTheme.grey[1],
              },
            }}
            component="a"
            href="https://www.linkedin.com/in/carlos-henrique-deucher-7606311b2/"
            target="_blank"
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              height={"1rem"}
            >
              <Stack direction={"row"} alignItems={"end"} columnGap={"0.5rem"}>
                <FaLinkedinIn style={{ color: colorsTheme.grey[9] }} />
                <Text
                  sp={{
                    fontSize: fontSizesTheme.small,
                    color: colorsTheme.grey[7],
                  }}
                >
                  Linkedin
                </Text>
              </Stack>
              <MdArrowForwardIos style={{ color: colorsTheme.grey[6] }} />
            </Stack>
          </Box>
          <Divider />
          <Box
            sp={{
              padding: "0.5rem 0",
              display: "inline-block",
              width: "100%",
              "&:hover": {
                backgroundColor: colorsTheme.grey[1],
              },
            }}
            component="a"
            href="https://github.com/carlosDeucher"
            target={"_blank"}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              height={"1rem"}
            >
              <Stack direction={"row"} columnGap={"0.5rem"} alignItems="end">
                <FiGithub style={{ color: colorsTheme.grey[9] }} />
                <Text
                  sp={{
                    fontSize: fontSizesTheme.small,
                    color: colorsTheme.grey[7],
                  }}
                >
                  GitHub
                </Text>
              </Stack>
              <MdArrowForwardIos style={{ color: colorsTheme.grey[7] }} />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}