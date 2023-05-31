import * as S from "./elements";
import type { FooterStoryblok, HTMLFooterProps } from "types";
import { useMediaQuery } from "hooks";
import { storyblokEditable } from "@storyblok/react";

export interface FooterProps {
  blok: FooterStoryblok;
}

export const Footer: React.FC<FooterProps> = ({
  blok,
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
  } = blok;

  return (
    <S.Footer {...props} {...storyblokEditable(blok)} key={blok._uid}>
      <S.Container>
        <S.HolderContainer>
          <S.TextContainer>
            <S.Logo blok={logo[0]} {...logo[0]} />
            <S.Text>{isSmallScreenDevice ? mobileDescription : desktopDescription}</S.Text>
          </S.TextContainer>

          <S.NavContainer>
            {navItems.map(navItem => (
              <S.NavSubContainer key={navItem._uid} {...storyblokEditable(navItem)}>
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
