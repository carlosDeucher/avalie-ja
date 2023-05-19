import isObject from "./isObject";

export default function handleResponsiveValues(
  styleWithoutResponsiveValues,
  breakpoint
) {
  function iterateAllKeysToHandleResponsiveValues(objectToHandle) {
    const objectToHandleClone = { ...objectToHandle };
    for (let chave in objectToHandleClone) {
      if (isObject(objectToHandleClone[chave])) {
        objectToHandleClone[chave] = iterateAllKeysToHandleResponsiveValues(
          objectToHandleClone[chave]
        );
      } else {
        objectToHandleClone[chave] = convertResponsiveValues(
          objectToHandleClone[chave]
        );
      }
    }
    const objectHandled = objectToHandleClone;

    return objectHandled;
  }
  function convertResponsiveValues(value) {
    if (Array.isArray(value)) {
      const cssArray = value.map((value) => String(value));
      switch (breakpoint) {
        case "mobile":
          value = cssArray[0];
          break;
        case "tablet":
          value = cssArray[1] || cssArray[0];
          break;
        case "laptop":
          value = cssArray[2] || cssArray[1] || cssArray[0];
          break;
        case "desktop":
          value = cssArray[3] || cssArray[2] || cssArray[1] || cssArray[0];
      }
    }

    return value;

    // const styleEntries = Object.entries(styleWithoutResponsiveValues);
    // const styleEntriesWithResponsiveValues = styleEntries.map((styleEntrie) => {
    //   // itero o array buscando por arrays ou objetos

    //   return styleEntrie;
    // });
    // return Object.fromEntries(styleEntriesWithResponsiveValues);
  }
  return iterateAllKeysToHandleResponsiveValues(styleWithoutResponsiveValues);
}
