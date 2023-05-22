import * as S from "./elements";
import { HTMLSectionProps, StepsSectionStoryblok } from "types";
import { storyblokEditable } from "@storyblok/react";

export interface StepsProps extends StepsSectionStoryblok {}

export const Steps = ({ blok, ...props }: StepsProps & HTMLSectionProps) => {
  const { heading, stepsCards } = blok;

  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.CardContainer>
        <S.Heading dangerouslySetInnerHTML={{ __html: heading }} />

        <S.StepsCardsWrapper>
          {stepsCards.map(cardProps => (
            <S.StepsCard key={cardProps._uid} {...cardProps} />
          ))}
        </S.StepsCardsWrapper>
      </S.CardContainer>
    </S.SectionContainer>
  );
};
4;
