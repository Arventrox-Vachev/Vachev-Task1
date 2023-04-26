import styled from "styled-components";
import {
  SectionContainer as _SectionContainer,
  H1 as _H1,
  HighlightedTextContainer as _HighlightedTextContainer,
  TextContainer as _TextContainer,
  Paragraph as _Paragraph,
  Image as _Image
} from "components";
import { FlywheelCard as _FlywheelCard } from "collections";

export const SectionContainer = styled(({ ...props }) => <_SectionContainer {...props} />)`
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
`;

export const H1 = styled(({ ...props }) => <_H1 {...props} />)`
  width: 100%;
  padding: 80px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};

  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  text-align: center;

  > span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const TextContainer = styled(({ ...props }) => <_TextContainer {...props} />)`
  flex-direction: column;
  padding: 40px 233px;
`;

export const Paragraph = styled(({ ...props }) => <_Paragraph {...props} />)`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;

  &:first-child {
    margin-bottom: 20px;
  }
`;

export const FlywheelWrapper = styled(({ ...props }) => <div {...props} />)`
  padding: 40px 116px 80px 116px;

  display: grid;
`;

export const FlywheelCardWrapper = styled(({ ...props }) => <div {...props} />)`
  margin-top: auto;
  margin-bottom: 20px;

  &:first-child {
    grid-column: 1/4;
    padding-left: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const FlywheelCard = styled(({ ...props }) => <_FlywheelCard {...props} />)``;

export const ImageWrapper = styled(({ ...props }) => <div {...props} />)`
  grid-column: 2 / 3;
  grid-row: 2;
`;

export const Image = styled(({ ...props }) => <_Image {...props} />)``;

// export const HighlightedTextContainer = styled(({ ...props }) => (
//   <_HighlightedTextContainer {...props} />
// ))``;
