import ThemeProvider from "@/contexts/ThemeProvider";
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
