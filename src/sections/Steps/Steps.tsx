import { StepsCard } from "collections";
import * as S from "./elements";
import { stepsContent } from "data";

export interface StepsProps {}

export const Steps = () => {
  return (
    <S.SectionContainer>
      <S.H1>
        {stepsContent.title.firstPart}
        <S.HighlightedTextContainer>{stepsContent.title.highlighted}</S.HighlightedTextContainer>
      </S.H1>

      <S.StepsCardsWrapper>
        {stepsContent.cards.map((card, index) => (
          <StepsCard key={index} card={card} />
        ))}
      </S.StepsCardsWrapper>
    </S.SectionContainer>
  );
};
