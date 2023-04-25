import styled from "styled-components";

export const HighlightedTextContainer = styled(({ ...props }) => <span {...props} />)`
  color: ${({ theme }) => theme.colors.yellow};
`;
