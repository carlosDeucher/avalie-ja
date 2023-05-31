import ThemeProvider from "@/contexts/ThemeProvider";
import UserProvider from "@/contexts/UserContext";
import PageWrapper from "@/views/components/ui/pageWrapper";
import GlobalStyle from "@/views/styles/globalStyle";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Avalie Já</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider>
        <GlobalStyle />
        <UserProvider>
          <PageWrapper>
            <Component {...pageProps} />
          </PageWrapper>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}
