import * as S from "./elements";
import { heroSectionContent } from "data";

export interface HeroProps {}

export const Hero = ({ ...props }: HeroProps) => {
  return (
    <S.SectionContainer>
      <S.TextContainer>
        <S.Title dangerouslySetInnerHTML={{ __html: heroSectionContent.title }} />
        {heroSectionContent.subtitle.map((subTitle, index) => (
          <S.SubHeading key={index}>{subTitle}</S.SubHeading>
        ))}

        <S.JoinWaitingListForm />
      </S.TextContainer>
    </S.SectionContainer>
  );
};
