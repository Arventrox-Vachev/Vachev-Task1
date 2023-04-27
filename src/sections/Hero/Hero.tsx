import * as S from "./elements";
import { JoinWaitingListForm } from "collections";
import { heroSectionContent } from "data";

export const Hero = () => {
  return (
    <S.SectionContainer>
      <S.TextContainer>
        <S.H1 dangerouslySetInnerHTML={{ __html: heroSectionContent.title }} />
        {heroSectionContent.subtitle.map((subTitle, index) => (
          <S.H3 key={index}>{subTitle}</S.H3>
        ))}

        <JoinWaitingListForm />
      </S.TextContainer>

      {/* <S.Image
        src={heroSectionContent.heroImage}
        alt={heroSectionContent.heroImage.alt}
        width={heroSectionContent.heroImage.width}
        height={heroSectionContent.heroImage.height}
      ></S.Image> */}
    </S.SectionContainer>
  );
};
