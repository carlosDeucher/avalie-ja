import ThemeProvider from "@/contexts/ThemeProvider";
import "../views/styles/_reset.scss";
import GlobalStyle from "@/views/styles/globalStyle";
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
