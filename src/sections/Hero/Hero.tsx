import * as S from "./elements";
import Image from "next/image";
import { HTMLSectionProps } from "types";
import { storyblokEditable, SbBlokData } from "@storyblok/react";
import { JoinWaitingListFormProps } from "collections";

export interface HeroProps {
  blok: HeroBlokData;
}

interface HeroBlokData extends SbBlokData {
  heading: string;
  subheading: string;
  subheading2: string;
  heroImage: { alt: string; filename: string };
  joinWaitingListForm: JoinWaitingListFormProps;
}

export const Hero = ({ blok, ...props }: HeroProps & HTMLSectionProps) => {
  const { heroImage, heading, subheading, subheading2, joinWaitingListForm } = blok;

  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.ItemsContainer>
        <S.Heading dangerouslySetInnerHTML={{ __html: heading }} />
        <S.SubHeading>{subheading}</S.SubHeading>
        <S.SubHeading>{subheading2}</S.SubHeading>
        <S.JoinWaitingListForm {...joinWaitingListForm[0]} />
      </S.ItemsContainer>

      <S.ImageWrapper>
        <Image src={heroImage.filename} alt={heroImage.alt} width={740} height={500} />
      </S.ImageWrapper>
    </S.SectionContainer>
  );
};
