import { GetStaticProps } from "next";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  ISbStoryData
} from "@storyblok/react";

const Home = ({ story }: { story: ISbStoryData }) => {
  story = useStoryblokState(story);

  return (
    <main>
      <StoryblokComponent blok={story.content} />
    </main>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{ story: ISbStoryData }> = async () => {
  let slug = "home";

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, { version: "draft" });

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false
    },
    revalidate: 3600 // revalidate every hour
  };
};
