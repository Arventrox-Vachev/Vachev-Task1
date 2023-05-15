import * as S from "./elements";
import { useMediaQuery } from "hooks";
import { HTMLSectionProps } from "types";
import { storyblokEditable, SbBlokData } from "@storyblok/react";
import { IconsCardProps } from "collections";

export interface IconsProps {
  blok: IconsBlokData;
}

interface IconsBlokData extends SbBlokData {
  title: string;
  mobileTitle: string;
  icon_cards: IconsCardProps[];
}

export const Icons = ({ blok, ...props }: IconsProps & HTMLSectionProps) => {
  const [isSmallScreenDevice] = useMediaQuery({ type: "max", breakpoint: "S" });
  const { title, mobileTitle, icon_cards } = blok;

  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.CardContainer>
        <S.Title dangerouslySetInnerHTML={{ __html: isSmallScreenDevice ? mobileTitle : title }} />

        <S.IconsContainer>
          {icon_cards.map((cardProps, index) => (
            <S.IconsCard key={index} {...cardProps} />
          ))}
        </S.IconsContainer>
      </S.CardContainer>
    </S.SectionContainer>
  );
};
