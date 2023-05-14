import handleResponsiveValues from "@/utils/handleResponsiveValues";
import {
  useContext,
  useMemo,
} from "react";
import useBreakpoint from "./useBreakpoint";
import isObject from "@/utils/isObject";
import { ThemeContext } from "@/contexts/ThemeProvider";


export default function useInlineStyle(sp, props) {
  const breakpoint = useBreakpoint();
  const theme = useContext(ThemeContext);

  const style = useMemo(() => {
    if (!sp) return {};
    if (typeof sp !== "function" && !isObject(sp)) {
      //se sp não for uma funcao ou objeto
      throw new Error("sp não é do tipo esperado!");
    }
    const styleWithoutResponsiveValues =
      typeof sp === "function" ? sp( theme, props) : sp;
    //setta os valores em array para strings de acordo com os breakpoints Ex.:["none","flex", "block"] mobile=none tablet=flex desktop=block
    return handleResponsiveValues(styleWithoutResponsiveValues, breakpoint);
  }, [sp, props, breakpoint]);

  return style;
}
