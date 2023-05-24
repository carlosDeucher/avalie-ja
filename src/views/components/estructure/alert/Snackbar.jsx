import React, { useEffect, useRef, useState } from "react";
import Box from "../box/Box";
import Text from "../text/Text";
import { keyframes } from "@emotion/react";

const unMountAnimation = keyframes`from {
    transform:translateY(100%)
}
to{
    transform:translateY(0)
}`;

const mountAnimation = keyframes`from {
    transform:translateY(0)
}
to{
    transform:translateY(100%)
}`;

export default function Snackbar({
  children,
  isOpen,
  timeout = 5000,
  onClose,
}) {
  const [isMount, setIsMount] = useState(false);
  const messageRef = useRef();
  if (children) messageRef.current = children;

  function handleHover() {
    const snackbarRef = document.getElementById("snackbar");
    let timeoutCloseSnackbar;
    const startTimeOut = () =>
      (timeoutCloseSnackbar = setTimeout(onClose, timeout));

    startTimeOut();
    snackbarRef.addEventListener("mouseenter", () => {
      clearTimeout(timeoutCloseSnackbar);
      handleHoverLeave();
    });
    const handleHoverLeave = () => {
      //cria um novo timeout quando o mouse sair do componente
      snackbarRef.addEventListener("mouseleave", startTimeOut, { once: true });
    };
  }

  const animationDelay = 400;

  useEffect(() => {
    if (isOpen) {
      handleHover();
      setIsMount(true);
    } else {
      setTimeout(() => {
        setIsMount(false);
      }, animationDelay);
    }
  }, [isOpen]);

  return (
    <>
      {(isOpen || isMount) && (
        <Box
          sp={{
            position: "fixed",
            bottom: 0,
            left: 0,
            padding: "25px 30px",
            animation: `${
              isOpen ? unMountAnimation : mountAnimation
            } ${animationDelay}ms forwards`,
          }}
        >
          <Box
            id="snackbar"
            sp={(theme) => ({
              padding: "15px 20px",
              borderRadius: "5px",
              boxShadow: theme.shadows.xlarge,
              backgroundColor: theme.colors.error.main,
            })}
          >
            <Text
              fontSize="xmedium"
              fontWeight={700}
              sp={(theme) => ({ color: theme.colors.white.main })}
            >
              {messageRef.current}
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
}
