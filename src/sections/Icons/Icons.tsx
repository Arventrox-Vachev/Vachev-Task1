import * as S from "./elements";
import { useMediaQuery } from "hooks";
import { HTMLSectionProps } from "types";
import { IconsCardProps } from "collections";

export interface IconsProps {
  title: string;
  mobileTitle: string;
  cards: IconsCardProps[];
}

export const Icons = ({ title, mobileTitle, cards, ...props }: IconsProps & HTMLSectionProps) => {
  const [isSmallScreenDevice] = useMediaQuery({ type: "max", breakpoint: "S" });
  const sectionTitle = isSmallScreenDevice ? mobileTitle : title;

  return (
    <S.SectionContainer {...props}>
      <S.CardContainer>
        <S.Title dangerouslySetInnerHTML={{ __html: sectionTitle }} />

        <S.IconsContainer>
          {cards.map((cardProps, index) => (
            <S.IconsCard key={index} {...cardProps} />
          ))}
        </S.IconsContainer>
      </S.CardContainer>
    </S.SectionContainer>
  );
};
