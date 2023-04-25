import handleResponsiveValues from "@/utils/handleResponsiveValues";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import useWindowSize from "./useWindowSize";
import useBreakpoint from "./useBreakpoint";
import isObject from "@/utils/isObject";
import { ContextTheme } from "@/contexts/ThemeProvider";

const initialState = {
  hover: false,
  active: false,
  focus: false,
};

function styleReducer(state, action) {
  switch (action.type) {
    case "hover":
      return { ...state, hover: action.value };
    case "focus":
      return { ...state, focus: action.value };
    case "active":
      return { ...state, active: action.value };
    default:
      return state;
  }
}

export default function useInlineStyle(sp, props) {
  const breakpoint = useBreakpoint();
  const theme = useContext(ContextTheme);
  const ref = useRef(null);
  const [styleState, dispatch] = useReducer(styleReducer, initialState);
  const setStyle = useCallback(
    (type, value) => dispatch({ type, value }),
    [dispatch]
  );

  const style = useMemo(() => {
    if (!sp) return {};
    if (typeof sp !== "function" && !isObject(sp)) {
      //se sp não for uma funcao ou objeto
      throw new Error("sp não é do tipo esperado!");
    }

    //caso seja uma funcao é passado styleState com os valores: hover, focus... e todas as props recebidas
    const styleWithoutResponsiveValues =
      typeof sp === "function" ? sp(styleState, theme, props) : sp;

    //setta os valores em array para strings de acordo com os breakpoints Ex.:["none","flex", "block"] mobile=none tablet=flex desktop=block
    return handleResponsiveValues(styleWithoutResponsiveValues, breakpoint);
  }, [sp, styleState, props, breakpoint]);

  useEffect(() => {
    let el;
    const pointerOver = () => setStyle("hover", true);
    const pointerOut = () => setStyle("hover", false);
    const focus = () => setStyle("focus", true);
    const blur = () => setStyle("focus", false);
    const pointerDown = () => setStyle("active", true);
    const pointerUp = () => setStyle("active", false);

    if (ref.current) {
      el = ref.current;
      el.addEventListener("pointerover", pointerOver);
      el.addEventListener("pointerout", pointerOut);
      el.addEventListener("focus", focus);
      el.addEventListener("blur", blur);
      el.addEventListener("pointerdown", pointerDown);
      el.addEventListener("pointerup", pointerUp);
    }
    return () => {
      el.removeEventListener("pointerover", pointerOver);
      el.removeEventListener("pointerout", pointerOut);
      el.removeEventListener("focus", focus);
      el.removeEventListener("blur", blur);
      el.removeEventListener("pointerdown", pointerDown);
      el.removeEventListener("pointerup", pointerUp);
    };
  }, [ref, setStyle]);

  return [ref, style];
}
