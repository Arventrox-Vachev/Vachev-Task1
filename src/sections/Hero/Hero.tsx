import * as S from "./elements";
import { heroSectionContent } from "data";

export interface HeroProps {}

export const Hero = ({ ...props }: HeroProps) => {
  return (
    <S.SectionContainer>
      <S.TextContainer>
        <S.H1 dangerouslySetInnerHTML={{ __html: heroSectionContent.title }} />
        {heroSectionContent.subtitle.map((subTitle, index) => (
          <S.H3 key={index}>{subTitle}</S.H3>
        ))}

        <S.JoinWaitingListForm />
      </S.TextContainer>
    </S.SectionContainer>
  );
};
