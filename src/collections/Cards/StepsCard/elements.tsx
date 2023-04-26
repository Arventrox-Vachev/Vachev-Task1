import styled from "styled-components";
import {
  Image as _Image,
  TextContainer as _TextContainer,
  H2 as _H2,
  Paragraph as _Paragraph
} from "components";

export const CardContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  flex-basis: 33.333%;
  border-right: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 60px;
  padding-bottom: 40px;

  &:last-child {
    border: none;
  }
`;

export const Image = styled(({ ...props }) => <_Image {...props} />)`
  justify-content: center;
`;

export const TextContainer = styled(({ ...props }) => <_TextContainer {...props} />)`
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 20px;
  }
`;

export const NumberWrapper = styled(({ ...props }) => <div {...props} />)`
  max-width: 30px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.yellow};
  border-radius: 50%;

  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
`;

export const H2 = styled(({ ...props }) => <_H2 {...props} />)`
  color: ${({ theme }) => theme.colors.yellow};

  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`;

export const HighlightedParagraph = styled(({ ...props }) => <_Paragraph {...props} />)`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
`;

export const Paragraph = styled(({ ...props }) => <_Paragraph {...props} />)`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
`;
