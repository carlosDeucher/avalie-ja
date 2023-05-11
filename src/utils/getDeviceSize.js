export default function getDeviceSize(windowWidth, breakpoints) {
    if (windowWidth > breakpoints.desktop) return "desktop";
    if (windowWidth > breakpoints.laptop) return "laptop";
    if (windowWidth > breakpoints.tablet) return "tablet";
    return "mobile";
  }