import { flywheelContent } from "data";
import * as S from "./elements";

export const FlyWheel = () => {
  return (
    <S.SectionContainer>
      <S.H1 dangerouslySetInnerHTML={{ __html: flywheelContent.title }} />

      <S.TextContainer>
        {flywheelContent.description.map((desc, index) => (
          <S.Paragraph key={index}>{desc}</S.Paragraph>
        ))}
      </S.TextContainer>

      <S.FlywheelWrapper>
        {flywheelContent.cards.map((card, index) => (
          <S.FlywheelCardWrapper key={index}>
            <S.FlywheelCard card={card} />
          </S.FlywheelCardWrapper>
        ))}

        <S.ImageWrapper>
          <S.Image
            src={flywheelContent.flywheelImg.src}
            alt={flywheelContent.flywheelImg.alt}
            width={flywheelContent.flywheelImg.width}
            height={flywheelContent.flywheelImg.height}
          />
        </S.ImageWrapper>
      </S.FlywheelWrapper>
    </S.SectionContainer>
  );
};
