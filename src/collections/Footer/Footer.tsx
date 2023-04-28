import * as S from "./elements";
import type { HTMLFooterProps } from "types";
import { footerContent } from "data";
import { useMediaQuery } from "hooks";

export interface FooterProps {}

export const Footer = ({ ...props }: FooterProps & HTMLFooterProps) => {
  const [isSmallScreenDevice] = useMediaQuery({ type: "max", breakpoint: "S" });

  return (
    <S.Footer {...props}>
      <S.HolderContainer>
        <S.TextContainer>
          <S.Logo />
          {!isSmallScreenDevice && <S.Paragraph>{footerContent.description}</S.Paragraph>}
          {isSmallScreenDevice && <S.Paragraph>{footerContent.mobileText}</S.Paragraph>}
        </S.TextContainer>

        <S.NavContainer>
          {footerContent.items.map((item, index) => (
            <S.NavSubContainer key={index}>
              <S.H3>{item.title}</S.H3>

              {item.links.map((link, index) => (
                <S.Link key={index} dangerouslySetInnerHTML={{ __html: link }} />
              ))}
            </S.NavSubContainer>
          ))}
        </S.NavContainer>
      </S.HolderContainer>

      <S.Copyright dangerouslySetInnerHTML={{ __html: footerContent.copyright }} />
    </S.Footer>
  );
};
