import * as S from "./elements";
import Image from "next/image";
import { HTMLSectionProps } from "types";
import { storyblokEditable, SbBlokData } from "@storyblok/react";
import { JoinWaitingListFormProps } from "collections";

export interface HeroProps {
  blok: HeroBlokData;
}

interface HeroBlokData extends SbBlokData {
  title: string;
  subtitle: string;
  subtitle2: string;
  image: { alt: string; filename: string };
  joinWaitingListForm: JoinWaitingListFormProps;
}

export const Hero = ({ blok, ...props }: HeroProps & HTMLSectionProps) => {
  const { image, title, subtitle, subtitle2, joinWaitingListForm } = blok;

  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.ItemsContainer>
        <S.Title dangerouslySetInnerHTML={{ __html: title }} />
        <S.SubHeading>{subtitle}</S.SubHeading>
        <S.SubHeading>{subtitle2}</S.SubHeading>
        <S.JoinWaitingListForm {...joinWaitingListForm[0]} />
      </S.ItemsContainer>

      <S.ImageWrapper>
        <Image src={image.filename} alt={image.alt} width={740} height={500} />
      </S.ImageWrapper>
    </S.SectionContainer>
  );
};
