/** @jsxImportSource @emotion/react */

import Link from "next/link";
import Text from "../text/Text";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeProvider";

export default function MainLink({ children, href, sp, component, fontSize }) {
  const { colors } = useContext(ThemeContext);
  return (
    <Link href={href} css={{ color: colors.secondary.dark }}>
      <Text fontSize={fontSize} component={component} sp={sp}>
        {children}
      </Text>
    </Link>
  );
}
