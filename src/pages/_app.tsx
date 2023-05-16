import type { AppProps } from "next/app";
import Head from "next/head";
import { storyblokInit, apiPlugin, getStoryblokApi, ISbStoryData } from "@storyblok/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "styles";
import { Header, Footer, HeaderBlockData, FooterBlockData } from "collections";
import { FlyWheel, Hero, Icons, Mailing, Steps } from "sections";
import { Page } from "components";

interface CustomApp extends AppProps {
  props: {
    header: ISbStoryData<HeaderBlockData>;
    footer: ISbStoryData<FooterBlockData>;
  };
}

const components = {
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

const fetchStoryData = async (slug: string) => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.getStory(slug, {
    version: "draft" // or "published"
  });

  return data.story;
};

function MyApp({ Component, pageProps, props: { header, footer } }: CustomApp) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CampaignMeister</title>
        <meta name='description' content='app description goes here' />

        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalStyles />
      <Header headerProps={header.content} />
      <Component {...pageProps} />
      {<Footer footerProps={footer.content} />}
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async ctx => {
  const header = await fetchStoryData("header");
  const footer = await fetchStoryData("footer");

  return {
    props: {
      header,
      footer
    }
  };
};

export default MyApp;
