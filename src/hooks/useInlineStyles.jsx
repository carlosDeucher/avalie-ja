import handleResponsiveValues from "@/utils/handleResponsiveValues";
import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import useWindowSize from "./useWindowSize";

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

export default function useInlineStyle(styleFn, props) {
  const windowWidth = useWindowSize().width;
  const ref = useRef(null);
  const [styleState, dispatch] = useReducer(styleReducer, initialState);
  const setStyle = useCallback(
    (type, value) => dispatch({ type, value }),
    [dispatch]
  );

  const style = useMemo(() => {
    const styleWithoutResponsiveValues = styleFn(styleState, props);
    return handleResponsiveValues(styleWithoutResponsiveValues, windowWidth);
  }, [styleFn, styleState, props, windowWidth]);

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
