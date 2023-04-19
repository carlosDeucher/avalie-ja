import { ContextTheme } from "@/contexts/ThemeProvider";
import { useContext } from "react";

export default function Container({ children }) {
  const { breakpoints } = useContext(ContextTheme);
  return (
    <>
      <div
        style={{
          maxWidth: breakpoints.tablet,
          margin: "auto",
          padding: "15px 20px",
        }}
      >
        {children}
      </div>
    </>
  );
}
