import styled from "styled-components";
import { FooterProps } from "./Footer";
import {
  TextContainer as _TextContainer,
  Paragraph as _Paragraph,
  Link as _Link,
  HighlightedTextContainer as _HighlightedTextContainer,
  H3 as _H3
} from "components";
import { Logo as _Logo } from "collections";

export const Footer = styled(({ ...props }: FooterProps) => <footer {...props} />)`
  min-height: 322px;
  padding: 40px 0 30px 40px;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const HolderContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  gap: 141px;
`;

export const TextContainer = styled(props => <_TextContainer {...props} />)`
  display: flex;
  height: fit-content;
  align-items: center;

  div {
    padding-right: 40px;
  }
`;

export const Logo = styled(props => <_Logo {...props} />)``;

export const Paragraph = styled(props => <_Paragraph {...props} />)`
  padding: 8px 40px;
  padding-right: 0;
  border-left: 2px solid #173158;

  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

export const NavContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  gap: 40px;
`;

export const NavSubContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(({ ...props }) => <_Link {...props} />)``;

export const H3 = styled(({ ...props }) => <_H3 {...props} />)`
  margin-bottom: 30px;
`;

export const Copyright = styled(props => <_Paragraph {...props} />)`
  margin-top: auto;
`;

export const HighlightedTextContainer = styled(props => <_HighlightedTextContainer {...props} />)`
  text-decoration: underline;
`;
