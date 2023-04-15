function getDeviceSize(windowWidth) {
  console.log(windowWidth);
  if (windowWidth > 1200) return "desktop";
  if (windowWidth > 900) return "laptop";
  if (windowWidth > 600) return "tablet";
  return "mobile";
}

export default function handleResponsiveValues(
  styleWithoutResponsiveValues,
  windowWidth
) {
  const deviceSize = getDeviceSize(windowWidth);
  const styleEntries = Object.entries(styleWithoutResponsiveValues); 

  const styleEntriesWithResponsiveValues = styleEntries.map((styleEntrie) => {
    // itero o array buscando por arrays ou objetos
    if (typeof styleEntrie[1] === "object") {
      const cssArray = styleEntrie[1];
      switch (deviceSize) {
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
