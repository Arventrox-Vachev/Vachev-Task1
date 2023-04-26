import styled from "styled-components";
import { TextContainer as _TextContainer, H2 as _H2, Paragraph as _Paragraph } from "components";

export const TextContainer = styled(({ ...props }) => <_TextContainer {...props} />)`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  width: 100%;
`;

export const H2 = styled(({ ...props }) => <_H2 {...props} />)`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.yellow};

  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`;

export const Paragraph = styled(({ ...props }) => <_Paragraph {...props} />)`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
`;
