import * as S from "./elements";
import { stepsContent } from "data";

export interface StepsProps {}

export const Steps = ({ ...props }: StepsProps) => {
  return (
    <S.SectionContainer>
      <S.H1 dangerouslySetInnerHTML={{ __html: stepsContent.title }} />

      <S.StepsCardsWrapper>
        {stepsContent.cards.map((card, index) => (
          <S.StepsCard key={index} card={card} />
        ))}
      </S.StepsCardsWrapper>
    </S.SectionContainer>
  );
};
