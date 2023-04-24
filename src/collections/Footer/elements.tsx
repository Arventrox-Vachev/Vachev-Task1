import styled from "styled-components";
import { FooterProps } from "./Footer";
import { Logo as _Logo } from "collections";

export const Footer = styled(({ ...props }: FooterProps) => <footer {...props} />)`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 322px;
  padding-top: 40px;

  display: flex;
`;

export const Logo = styled(props => <_Logo {...props} />)`
  padding-top: 47px;
`;
