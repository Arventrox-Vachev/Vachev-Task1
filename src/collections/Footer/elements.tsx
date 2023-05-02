import styled from "styled-components";
import { TextContainer as _TextContainer, Link as _Link, Typography } from "components";
import { Logo as _Logo } from "collections";

export const Footer = styled("footer")`
  min-height: 322px;
  padding: 40px 0 28px 40px;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  overflow-x: hidden;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-top: 37px;
    margin-top: 47px;
  }
`;

export const HolderContainer = styled("div")`
  padding-right: min(10vw, 137px);
  margin-left: auto;
  margin-right: auto;

  display: flex;
  gap: 10vw;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-right: min(24vw, 137px);
    flex-direction: column;
    gap: 42px;
  }
`;

export const TextContainer = styled(_TextContainer)`
  display: flex;

  > div {
    padding-right: 21px;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled(props => <_Logo {...props} />).attrs({ variant: "sm" })`
  padding-right: 6px;

  > div {
    padding: 0;
  }

  > p {
    padding-top: 4px;
    padding-left: 6px;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding-bottom: 9px;
  }
`;

export const Text = styled(Typography.Paragraph).attrs({ variant: "xs" })`
  padding: 8px 40px;
  padding-right: 0;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.breakpoint.max.M} {
    width: 100%;
    padding: 15px 0;
    border: none;
    border-top: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const NavContainer = styled("div")`
  display: flex;
  gap: 62px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    flex-direction: column;
    gap: 30px;
  }
`;

export const NavSubContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(_Link)`
  margin-bottom: 15px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    > span {
      display: none;
    }
  }
`;

export const Title = styled(Typography.H3)`
  margin-bottom: 30px;
`;

export const Copyright = styled(Typography.Paragraph).attrs({ variant: "xs" })`
  margin-top: auto;
  display: flex;

  > span {
    color: ${({ theme }) => theme.colors.yellow};
    text-decoration: underline;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    display: flex;
    flex-direction: column;
    padding-right: 10px;
    margin-top: 45px;

    > span {
      margin-bottom: 14px;
    }
  }
`;
