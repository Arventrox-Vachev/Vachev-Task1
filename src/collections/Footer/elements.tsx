import styled from "styled-components";
import { NextLink as _Link, Typography } from "components";
import { Logo as _Logo } from "collections/Logo";

export const Footer = styled("footer")`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Container = styled("div")`
  max-width: 1440px;
  width: 100%;
  min-height: 328px;
  padding: 40px 40px 36px;

  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 48px 40px;
  }
`;

export const HolderContainer = styled("div")`
  margin-right: auto;
  display: flex;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin-bottom: 20px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    width: 100%;
    padding: 0;
    flex-direction: column;
  }
`;

export const TextContainer = styled("div")`
  height: fit-content;
  margin-right: 144px;

  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    width: 100%;
    margin-right: 52px;
    flex-basis: 30%;
    flex-direction: column;
    align-items: center;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    margin: 0 0 40px;
    flex-basis: 100%;
    align-items: flex-start;
  }
`;

export const Logo = styled(_Logo)`
  margin-right: 44px;

  > p {
    margin-left: 12px;
    font-size: 16px;
  }

  > div {
    max-width: 52px;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin-bottom: 16px;
  }
`;

export const Text = styled(Typography.Paragraph).attrs({ variant: "xs" })`
  padding: 8px 0 8px 40px;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 16px 0;
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

  @media ${({ theme }) => theme.breakpoint.max.S} {
    flex-direction: column;
  }
`;

export const NavSubContainer = styled("div")`
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-right: 60px;
  }

  > h3 {
    margin-bottom: 28px;
  }

  > a {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    &:first-child {
      margin-right: 36px;
    }
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    &:first-child {
      margin: 0 0 32px;
    }
  }
`;

export const Title = styled(Typography.H3)``;

export const Link = styled(_Link)``;

export const Copyright = styled(Typography.Paragraph).attrs({ variant: "xs" })`
  margin: auto auto 0 0;
  display: flex;

  > span {
    color: ${({ theme }) => theme.colors.yellow};
    text-decoration: underline;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    margin-top: 44px;
    flex-direction: column;
  }
`;
