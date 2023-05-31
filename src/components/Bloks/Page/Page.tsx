import { SbBlokData, StoryblokComponent } from "@storyblok/react";

export interface PageComponentProps extends SbBlokData {
  body: SbBlokData[];
}

export const Page: React.FC<{ blok: PageComponentProps }> = ({ blok }) => {
  return (
    <>
      {blok.body.map(nestedBlok => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </>
  );
};
