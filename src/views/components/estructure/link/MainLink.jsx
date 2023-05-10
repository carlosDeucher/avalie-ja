import Link from "next/link";
import Text from "../text/Text";
import { useContext } from "react";
import { ContextTheme } from "@/contexts/ThemeProvider";

export default function MainLink({ children, href, sp, component }) {
  const { colors } = useContext(ContextTheme);
  return (
    <Link href={href} style={{ color: colors.secondary.dark }}>
      <Text component={component} sp={sp}>
        {children}
      </Text>
    </Link>
  );
}
