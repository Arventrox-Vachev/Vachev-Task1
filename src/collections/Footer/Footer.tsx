import * as S from "./elements";
import type { HTMLFooterProps } from "types";
import { useMediaQuery } from "hooks";
import { ImageProps } from "next/image";
import { LogoProps } from "collections/Logo";

export interface FooterProps {
  desktopDescription: string;
  mobileDescription: string;
  logo: LogoProps;
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

  return (
    <S.Footer {...props}>
      <S.Container>
        <S.HolderContainer>
          <S.TextContainer>
            <S.Logo {...logo} />
            <S.Text>{isSmallScreenDevice ? mobileDescription : desktopDescription}</S.Text>
          </S.TextContainer>

          <S.NavContainer>
            {navItems.map((navItem, index) => (
              <S.NavSubContainer key={index}>
                <S.Title>{navItem.title}</S.Title>

                {navItem.links.map((link, index) => (
                  <S.Link href='/' key={index}>
                    {link}
                  </S.Link>
                ))}
              </S.NavSubContainer>
            ))}
          </S.NavContainer>
        </S.HolderContainer>

        <S.Copyright
          dangerouslySetInnerHTML={{
            __html: isSmallScreenDevice ? mobileCopyright : desktopCopyright
          }}
        />
      </S.Container>
    </S.Footer>
  );
};
