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
          {!isSmallScreenDevice && <S.Text>{footerContent.description}</S.Text>}
          {isSmallScreenDevice && <S.Text>{footerContent.mobileText}</S.Text>}
        </S.TextContainer>

        <S.NavContainer>
          {footerContent.items.map((item, index) => (
            <S.NavSubContainer key={index}>
              <S.Title>{item.title}</S.Title>

              {item.links.map((link, index) => (
                <S.Link key={index} dangerouslySetInnerHTML={{ __html: link }} />
              ))}
            </S.NavSubContainer>
          ))}
        </S.NavContainer>
      </S.HolderContainer>

      {!isSmallScreenDevice && (
        <S.Copyright dangerouslySetInnerHTML={{ __html: footerContent.copyright }} />
      )}
      {isSmallScreenDevice && (
        <S.Copyright dangerouslySetInnerHTML={{ __html: footerContent.mobileCopyright }} />
      )}
    </S.Footer>
  );
};
