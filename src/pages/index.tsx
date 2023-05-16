import { GetStaticProps, NextPage } from "next";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  ISbStoriesParams,
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

  // console.log(JSON.stringify(data, null, 2));

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false
    },
    revalidate: 3600 // revalidate every hour
  };
};
