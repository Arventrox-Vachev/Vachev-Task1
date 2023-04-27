import styled from "styled-components";
import {
  SectionContainer as _SectionContainer,
  H1 as _H1,
  TextContainer as _TextContainer,
  Paragraph as _Paragraph,
  Image as _Image
} from "components";
import { FlywheelCard as _FlywheelCard } from "collections";

export const SectionContainer = styled(_SectionContainer)`
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
`;

export const Title = styled(_H1)`
  width: 100%;
  padding: 80px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

export const TextContainer = styled(_TextContainer)`
  flex-direction: column;
  padding: 40px 233px;
`;

export const Paragraph = styled(_Paragraph)`
  padding-right: 60px;

  &:first-child {
    margin-bottom: 28px;
  }
`;

export const FlywheelWrapper = styled("div")`
  width: 100%;
  padding: 14px 116px 80px 116px;

  display: grid;
  row-gap: 40px;
`;

export const FlywheelCardWrapper = styled("div")`
  margin-top: auto;

  &:first-child {
    grid-column: 1/4;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const FlywheelCard = styled(({ ...props }) => <_FlywheelCard {...props} />)``;

export const ImageWrapper = styled("div")`
  grid-column: 2 / 3;
  grid-row: 2;
`;

export const Image = styled(_Image)``;
