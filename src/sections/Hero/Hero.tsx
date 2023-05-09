import * as S from "./elements";
import Image, { ImageProps } from "next/image";
import { HTMLSectionProps } from "types";
import { JoinWaitingListFormProps } from "collections";

export interface HeroProps {
  title: string;
  subtitles: string[];
  image: ImageProps;
  joinWaitingListFormProps: JoinWaitingListFormProps;
}

export const Hero = ({
  title,
  subtitles,
  image,
  joinWaitingListFormProps,
  ...props
}: HeroProps & HTMLSectionProps) => {
  return (
    <S.SectionContainer {...props}>
      <S.ItemsContainer>
        <S.Title dangerouslySetInnerHTML={{ __html: title }} />
        {subtitles.map((subtitle, index) => (
          <S.SubHeading key={index}>{subtitle}</S.SubHeading>
        ))}

        <S.JoinWaitingListForm {...joinWaitingListFormProps} />
      </S.ItemsContainer>

      <S.ImageWrapper>
        <Image {...image} />
      </S.ImageWrapper>
    </S.SectionContainer>
  );
};
