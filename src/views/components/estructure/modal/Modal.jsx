import useInlineStyle from "@/hooks/useInlineStyles";
import Box from "../box/Box";
import Stack from "../stack/Stack";
import { useEffect, useState } from "react";

export default function Modal({ isOpen, onClose, children, sp }) {
  const styleProps = useInlineStyle(sp);
  const [showComponent, setShowComponent] = useState(false);

  const transitionDuration = 200;
  const transition = `opacity ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`;
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setShowComponent(false), transitionDuration);
    } else {
      setShowComponent(true);
    }
  }, [isOpen]);
  return (
    <>
      <Box
        sp={{
          position: "fixed",
          zIndex: 500,
          inset: 0,
          display: isOpen || showComponent ? "block" : "none",
        }}
      >
        <Box
          sp={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
            backgroundColor: `rgba(0, 0, 0, 0.3)`,
            opacity: isOpen && showComponent ? 1 : 0,
            transition,
          }}
        />
        <Stack
          justifyContent="center"
          alignItems="center"
          sp={(theme) => ({
            opacity: isOpen && showComponent ? 1 : 0,
            height: "100%",
            width: "100%",
            transition,
          })}
          onClick={onClose}
        >
          <Box
            onClick={(event) => {
              event.stopPropagation();
            }}
            sp={({ colors }) => ({
              width: "fit-content",
              borderRadius: "5px",
              backgroundColor: colors.white.main,
              position: "absolute",
              zIndex: 100,
              transform: "translateY(-100px)",
              margin: "32px",
              maxHeight: "calc(100% - 64px)",
              ...styleProps,
            })}
          >
            {children}
          </Box>
        </Stack>
      </Box>
    </>
  );
}
