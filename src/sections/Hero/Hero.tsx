import * as S from "./elements";
import Image from "next/image";
import { HTMLSectionProps, HeroSectionStoryblok } from "types";
import { storyblokEditable } from "@storyblok/react";

export interface HeroProps {
  blok: HeroSectionStoryblok;
}

export const Hero = ({ blok, ...props }: HeroProps & HTMLSectionProps) => {
  const { heroImage, heading, subheading, subheading2, joinWaitingListForm } = blok;

  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.ItemsContainer>
        <S.Heading dangerouslySetInnerHTML={{ __html: heading }} />
        <S.SubHeading>{subheading}</S.SubHeading>
        <S.SubHeading>{subheading2}</S.SubHeading>
        {joinWaitingListForm.map(props => (
          <S.JoinWaitingListForm key={props._uid} blok={props} {...props} />
        ))}
      </S.ItemsContainer>

      <S.ImageWrapper>
        <Image src={heroImage.filename} alt={heroImage.alt} width={740} height={500} />
      </S.ImageWrapper>
    </S.SectionContainer>
  );
};
