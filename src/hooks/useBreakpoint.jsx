import { ContextTheme } from "@/contexts/ThemeProvider";
import  getDeviceSize  from "@/utils/getDeviceSize.js";
import { useContext, useEffect, useState } from "react";

export default function useBreakpoint() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [currentBreakpoint, setCurrentBreakpoint] = useState(null);
  const { breakpoints } = useContext(ContextTheme);

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setCurrentBreakpoint(getDeviceSize(window.innerWidth, breakpoints));
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return currentBreakpoint;
}
