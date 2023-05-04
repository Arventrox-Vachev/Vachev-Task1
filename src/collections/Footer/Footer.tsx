import * as S from "./elements";
import type { HTMLFooterProps } from "types";
import { useMediaQuery } from "hooks";
import { ImageProps } from "next/image";

export interface FooterProps {
  desktopDescription: string;
  mobileDescription: string;
  logo: {
    title: string;
    image: ImageProps;
  };
  navItems: {
    title: string;
    links: string[];
  }[];
  desktopCopyright: string;
  mobileCopyright: string;
}

export const Footer = ({
  desktopDescription,
  mobileDescription,
  logo,
  navItems,
  desktopCopyright,
  mobileCopyright,
  ...props
}: FooterProps & HTMLFooterProps) => {
  const [isSmallScreenDevice] = useMediaQuery({ type: "max", breakpoint: "S" });
  const copyright = isSmallScreenDevice ? mobileCopyright : desktopCopyright;
  const description = isSmallScreenDevice ? mobileDescription : desktopDescription;

  return (
    <S.Footer {...props}>
      <S.HolderContainer>
        <S.TextContainer>
          <S.Logo {...logo} />
          <S.Text>{description}</S.Text>
        </S.TextContainer>

        <S.NavContainer>
          {navItems.map((navItem, index) => (
            <S.NavSubContainer key={index}>
              <S.Title>{navItem.title}</S.Title>

              {navItem.links.map((link, index) => (
                <S.Link key={index} dangerouslySetInnerHTML={{ __html: link }} />
              ))}
            </S.NavSubContainer>
          ))}
        </S.NavContainer>
      </S.HolderContainer>

      <S.Copyright dangerouslySetInnerHTML={{ __html: copyright }} />
    </S.Footer>
  );
};
