import styled from "styled-components";
import {
  TextContainer as _TextContainer,
  H2 as _H2,
  Paragraph as _Paragraph,
  Image as _Image
} from "components";

export const TextContainer = styled(_TextContainer)`
  flex-direction: column;
  max-width: 280px;
  width: 100%;
`;

export const H2 = styled(_H2)`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.yellow};

  @media ${({ theme }) => theme.breakpoint.max.S} {
    margin: 21px 0;
  }
`;

export const Paragraph = styled(({ ...props }) => <_Paragraph variant='sm' {...props} />)``;

export const Image = styled(_Image)``;
