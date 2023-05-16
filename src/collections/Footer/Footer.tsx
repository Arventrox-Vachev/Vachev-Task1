import * as S from "./elements";
import type { HTMLFooterProps } from "types";
import { useMediaQuery } from "hooks";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { LogoProps } from "collections/Logo";

export interface FooterProps {
  footerProps: FooterBlockData;
}
interface FooterBlockData extends SbBlokData {
  navItems: {
    _uid: string;
    heading: string;
    linkItems: {
      _uid: string;
      linkHeading: string;
      link: { id: string; url: string };
    }[];
  }[];
  logo: LogoProps;
  mobileDescription: string;
  desktopDescription: string;
  desktopCopyright: string;
  mobileCopyright: string;
}

export const Footer: React.FC<FooterProps> = ({
  footerProps,
  ...props
}: FooterProps & HTMLFooterProps) => {
  const [isSmallScreenDevice] = useMediaQuery({ type: "max", breakpoint: "S" });
  const {
    logo,
    mobileDescription,
    desktopDescription,
    desktopCopyright,
    mobileCopyright,
    navItems
  } = footerProps;

  return (
    <S.Footer {...props} {...storyblokEditable(footerProps)}>
      <S.Container>
        <S.HolderContainer>
          <S.TextContainer>
            <S.Logo {...logo[0]} />
            <S.Text>{isSmallScreenDevice ? mobileDescription : desktopDescription}</S.Text>
          </S.TextContainer>

          <S.NavContainer>
            {navItems.map(navItem => (
              <S.NavSubContainer key={navItem._uid}>
                <S.Title>{navItem.heading}</S.Title>

                {navItem.linkItems.map(({ link, _uid, linkHeading }) => (
                  <S.Link href={link.url} key={_uid}>
                    {linkHeading}
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
