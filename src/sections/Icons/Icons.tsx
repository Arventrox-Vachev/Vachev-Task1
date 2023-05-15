import * as S from "./elements";
import { useMediaQuery } from "hooks";
import { HTMLSectionProps } from "types";
import { storyblokEditable, SbBlokData } from "@storyblok/react";

export interface IconsProps {
  blok: SbBlokData | any;
}

export const Icons = ({ blok, ...props }: IconsProps & HTMLSectionProps) => {
  const [isSmallScreenDevice] = useMediaQuery({ type: "max", breakpoint: "S" });
  const { title, mobileTitle, icon_cards } = blok;
  const sectionTitle = isSmallScreenDevice ? mobileTitle : title;

  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.CardContainer>
        <S.Title dangerouslySetInnerHTML={{ __html: sectionTitle }} />

        <S.IconsContainer>
          {icon_cards.map((cardProps, index) => (
            <S.IconsCard key={index} {...cardProps} />
          ))}
        </S.IconsContainer>
      </S.CardContainer>
    </S.SectionContainer>
  );
};
