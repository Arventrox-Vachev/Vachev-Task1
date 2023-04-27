import styled from "styled-components";
import {
  SectionContainer as _SectionContainer,
  H1 as _H1,
  HighlightedTextContainer as _HighlightedTextContainer
} from "components";

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
  text-align: center;
`;

export const IconsWrapper = styled(({ ...props }) => <div {...props} />)`
  margin: 80px 60px 102px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 120px;
  row-gap: 81px;
`;

export const HighlightedTextContainer = styled(({ ...props }) => (
  <_HighlightedTextContainer {...props} />
))``;
