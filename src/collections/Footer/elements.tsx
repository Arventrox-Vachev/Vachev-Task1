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
    padding: 40px;
    margin-top: 45px;
  }
`;

export const HolderContainer = styled("div")`
  padding-right: min(10vw, 137px);
  margin-left: auto;
  margin-right: auto;

  display: flex;
  column-gap: min(10vw, 145px);

  @media ${({ theme }) => theme.breakpoint.max.S} {
    width: 100%;
    padding: 0;
    flex-direction: column;
    gap: 42px;
  }
`;

export const TextContainer = styled(_TextContainer)`
  display: flex;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    width: 100%;
    flex-direction: column;
    align-items: center;
    flex-basis: 30%;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    flex-basis: 100%;
    align-items: flex-start;
  }
`;

// doesn't work if its just styled(_Logo)
export const Logo = styled(props => <_Logo {...props} />).attrs({ variant: "sm" })`
  font-size: 16px;
  padding-right: 41px;

  > p {
    padding: 4px 0 0 6px;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding-bottom: 15px;
  }
`;

export const Text = styled(Typography.Paragraph).attrs({ variant: "xs" })`
  padding: 8px 0 8px 40px;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 15px 0;
    border: none;
    border-top: 2px solid ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    width: 100%;
    max-width: 280px;
  }
`;

export const NavContainer = styled("div")`
  display: flex;
  column-gap: 62px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    flex-direction: column;
    row-gap: 30px;
  }
`;

export const NavSubContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(_Link)`
  margin-bottom: 15px;

  //removes the last element because it doesn't figure in the design
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
    flex-direction: column;
    margin-top: 45px;

    > span {
      margin-bottom: 14px;
    }
  }
`;
