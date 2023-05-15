import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "styles";
import { Header, Footer } from "collections";
import { headerProps, footerProps } from "data";
import TagManager from "react-gtm-module";
import { FlyWheel, Hero, Icons, Mailing, Steps } from "sections";
import { Page } from "components/Bloks/Page";

const tagManagerArgs = {
  gtmId: "GTM-XXXXXXX"
};

const components = {
  header: Header,
  hero_section: Hero,
  flywheel_section: FlyWheel,
  icons_section: Icons,
  steps_section: Steps,
  mailing_section: Mailing,
  page: Page
};

storyblokInit({
  accessToken: "cyNOB5pN3qubri1JgerMvgtt",
  use: [apiPlugin],
  components
});

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  useEffect(() => {
    // TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CampaignMeister</title>
        <meta name='description' content='app description goes here' />

        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalStyles />
      <Header {...headerProps} />
      <Component {...pageProps} />
      <Footer {...footerProps} />
    </ThemeProvider>
  );
}

export default MyApp;
