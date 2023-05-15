import * as S from "./elements";
import { HTMLSectionProps } from "types";
import { storyblokEditable, SbBlokData } from "@storyblok/react";

export interface StepsProps {
  blok: SbBlokData | any;
}

export const Steps = ({ blok, ...props }: StepsProps & HTMLSectionProps) => {
  const { title, steps_cards } = blok;

  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.CardContainer>
        <S.Title dangerouslySetInnerHTML={{ __html: title }} />

        <S.StepsCardsWrapper>
          {steps_cards.map(cardProps => (
            <S.StepsCard key={cardProps._uid} {...cardProps} />
          ))}
        </S.StepsCardsWrapper>
      </S.CardContainer>
    </S.SectionContainer>
  );
};
