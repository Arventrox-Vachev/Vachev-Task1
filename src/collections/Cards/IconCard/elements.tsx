import styled from "styled-components";
import {
  Paragraph as _Paragraph,
  TextContainer as _TextContainer,
  Image as _Image
} from "components";

export const IconWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  max-width: 560px;
  width: 100%;
  gap: 20px;
`;

export const Image = styled(({ ...props }) => <_Image {...props} />)`
  margin-bottom: auto;
`;

export const TextContainer = styled(({ ...props }) => <_TextContainer {...props} />)`
  display: flex;
  flex-direction: column;
  max-width: 451px;
  width: 100%;
`;

export const IconTitle = styled(({ ...props }) => <_Paragraph {...props} />)`
  margin-bottom: 20px;

  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const IconParagraph = styled(({ ...props }) => <_Paragraph {...props} />)`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
`;
