export function getDeviceSize(windowWidth, breakpoints) {
  if (windowWidth > breakpoints.desktop) return "desktop";
  if (windowWidth > breakpoints.laptop) return "laptop";
  if (windowWidth > breakpoints.tablet) return "tablet";
  return "mobile";
}

export default function handleResponsiveValues(
  styleWithoutResponsiveValues,
  breakpoint
) {
  const styleEntries = Object.entries(styleWithoutResponsiveValues);
  const styleEntriesWithResponsiveValues = styleEntries.map((styleEntrie) => {
    // itero o array buscando por arrays ou objetos
    if (Array.isArray(styleEntrie[1])) {
      const cssArray = styleEntrie[1];
      switch (breakpoint) {
        case "mobile":
          styleEntrie[1] = cssArray[0];
          break;
        case "tablet":
          styleEntrie[1] = cssArray[1] || cssArray[0];
          break;
        case "laptop":
          styleEntrie[1] = cssArray[2] || cssArray[1] || cssArray[0];
          break;
        case "desktop":
          styleEntrie[1] =
            cssArray[3] || cssArray[2] || cssArray[1] || cssArray[0];
      }
    }
    return styleEntrie;
  });
  return Object.fromEntries(styleEntriesWithResponsiveValues);
}
