import { ContextTheme } from "@/contexts/ThemeProvider";
import { useContext } from "react";

export default function Container({ maxWidth, children }) {
  const { breakpoints } = useContext(ContextTheme);
  return (
    <>
      <div
        style={{
          maxWidth: breakpoints[maxWidth],
          margin: "auto",
          padding: "15px 20px",
        }}
      >
        {children}
      </div>
    </>
  );
}
