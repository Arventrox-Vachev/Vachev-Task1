import styled from "styled-components";
import { FooterProps } from "./Footer";
import {
  TextContainer as _TextContainer,
  Paragraph as _Paragraph,
  Link as _Link,
  H3 as _H3
} from "components";
import { Logo as _Logo } from "collections";

export const Footer = styled("footer")`
  min-height: 322px;
  padding: 40px 0 28px 40px;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const HolderContainer = styled("div")`
  display: flex;
  gap: 10vw;
  padding-right: 137px;
  margin-left: auto;
  margin-right: auto;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    flex-direction: column;
  }
`;

export const TextContainer = styled(props => <_TextContainer {...props} />)`
  display: flex;
  height: fit-content;
  align-items: center;

  > div {
    padding-right: 40px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    flex-direction: column;
    width: 100%;
  }
`;

export const Logo = styled(props => <_Logo variant='sm' {...props} />)`
  padding-right: 6px;

  > div {
    padding: 0;
  }

  > p {
    padding-top: 4px;
    padding-left: 6px;
  }
`;

export const Paragraph = styled(props => <_Paragraph variant='xs' {...props} />)`
  padding: 8px 40px;
  padding-right: 0;
  border-left: 2px solid #173158;
`;

export const NavContainer = styled("div")`
  display: flex;
  gap: 62px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    flex-direction: column;
  }
`;

export const NavSubContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(({ ...props }) => <_Link {...props} />)`
  margin-bottom: 15px;
`;

export const H3 = styled(({ ...props }) => <_H3 {...props} />)`
  margin-bottom: 30px;
`;

export const Copyright = styled(props => <_Paragraph variant='xs' {...props} />)`
  margin-top: auto;

  > span {
    color: ${({ theme }) => theme.colors.yellow};
    text-decoration: underline;
  }
`;
