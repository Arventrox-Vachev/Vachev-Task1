import * as S from "./elements";
import Image from "next/image";
import { HTMLSectionProps, HeroSectionStoryblok } from "types";
import { storyblokEditable } from "@storyblok/react";
import axios from "axios";
import { fieldPluginData } from "data";

export interface HeroProps {
  blok: HeroSectionStoryblok;
}

export const Hero = ({ blok, ...props }: HeroProps & HTMLSectionProps) => {
  const { heroImage, heading, subheading, subheading2, joinWaitingListForm } = blok;

  const sendSbDataHandler = async () => {
    try {
      await axios.post("/api/sb-field-plugin", fieldPluginData);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.ItemsContainer>
        <S.Heading dangerouslySetInnerHTML={{ __html: heading }} />
        <S.SubHeading>{subheading}</S.SubHeading>
        <S.SubHeading>{subheading2}</S.SubHeading>
        <button onClick={sendSbDataHandler}>test</button>
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
