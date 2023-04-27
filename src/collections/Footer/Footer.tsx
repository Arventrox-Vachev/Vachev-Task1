import * as S from "./elements";
import type { HTMLFooterProps } from "types";
import { footerContent } from "data";

export interface FooterProps {}

export const Footer = ({ ...props }: FooterProps & HTMLFooterProps) => {
  return (
    <S.Footer {...props}>
      <S.HolderContainer>
        <S.TextContainer>
          <S.Logo />
          <S.Paragraph>{footerContent.description}</S.Paragraph>
        </S.TextContainer>

        <S.NavContainer>
          {footerContent.items.map((item, index) => (
            <S.NavSubContainer key={index}>
              <S.H3>{item.title}</S.H3>

              {item.links.map((link, index) => (
                <S.Link key={index}>{link}</S.Link>
              ))}
            </S.NavSubContainer>
          ))}
        </S.NavContainer>
      </S.HolderContainer>

      <S.Copyright dangerouslySetInnerHTML={{ __html: footerContent.copyright }} />
    </S.Footer>
  );
};
