import ThemeProvider from "@/contexts/ThemeProvider";
import "../views/styles/_reset.scss";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
