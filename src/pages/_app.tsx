import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { storyblokInit, apiPlugin, getStoryblokApi, ISbStoryData } from "@storyblok/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "styles";
import { Header, Footer } from "collections";
import { FlyWheel, Hero, Icons, Mailing, Steps } from "sections";
import { Page } from "components";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-XXXXXXX"
};

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

const fetchStoryData = async (
  slug: string,
  setData: React.Dispatch<React.SetStateAction<ISbStoryData | null>>
) => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.getStory(slug, {
    version: "draft" // or "published"
  });
  setData(data.story);
};

function MyApp({ Component, pageProps }: AppProps) {
  const [headerData, setHeaderData] = useState<ISbStoryData<any> | null>(null);
  const [footerData, setFooterData] = useState<ISbStoryData<any> | null>(null);

  useEffect(() => {
    // TagManager.initialize(tagManagerArgs);
  }, []);

  useEffect(() => {
    fetchStoryData("header", setHeaderData);
    fetchStoryData("footer", setFooterData);
  }, []);

  if (!headerData || !footerData) return null;

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CampaignMeister</title>
        <meta name='description' content='app description goes here' />

        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalStyles />
      <Header headerProps={headerData.content} />
      <Component {...pageProps} />
      {<Footer footerProps={footerData.content} />}
    </ThemeProvider>
  );
}

export default MyApp;
