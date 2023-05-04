import * as S from "./elements";
import Image, { ImageProps } from "next/image";
import { HTMLSectionProps } from "types";

export interface HeroProps {
  title: string;
  subtitles: string[];
  image: ImageProps;
}

export const Hero = ({ title, subtitles, image, ...props }: HeroProps & HTMLSectionProps) => {
  return (
    <S.SectionContainer {...props}>
      <S.ItemsContainer>
        <S.Title dangerouslySetInnerHTML={{ __html: title }} />
        {subtitles.map((subtitle, index) => (
          <S.SubHeading key={index}>{subtitle}</S.SubHeading>
        ))}

        <S.JoinWaitingListForm />
      </S.ItemsContainer>

      <S.ImageWrapper>
        <Image {...image} />
      </S.ImageWrapper>
    </S.SectionContainer>
  );
};
