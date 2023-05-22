import * as S from "./elements";
import { useMediaQuery } from "hooks";
import { HTMLSectionProps, IconsSectionStoryblok } from "types";
import { storyblokEditable, SbBlokData } from "@storyblok/react";

export interface IconsProps extends IconsSectionStoryblok {}

export const Icons = ({ blok, ...props }: IconsProps & HTMLSectionProps) => {
  const [isSmallScreenDevice] = useMediaQuery({ type: "max", breakpoint: "S" });
  const { heading, mobileHeading, iconCards } = blok;

  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.CardContainer>
        <S.Heading
          dangerouslySetInnerHTML={{ __html: isSmallScreenDevice ? mobileHeading : heading }}
        />

        <S.IconsContainer>
          {iconCards.map((cardProps, index) => (
            <S.IconsCard key={index} {...cardProps} />
          ))}
        </S.IconsContainer>
      </S.CardContainer>
    </S.SectionContainer>
  );
};
