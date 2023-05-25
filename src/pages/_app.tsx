import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "styles";
import { Header, Footer } from "collections";
import { headerProps, footerProps } from "data";
import TagManager from "react-gtm-module";
import { QueryClient, QueryClientProvider } from "react-query";

const tagManagerArgs = {
  gtmId: "GTM-XXXXXXX"
};

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  useEffect(() => {
    // TagManager.initialize(tagManagerArgs);
  }, []);

  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CampaignMeister</title>
        <meta name='description' content='app description goes here' />

        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Header {...headerProps} />
        <Component {...pageProps} />
        <Footer {...footerProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
