import styled from "styled-components";
import {
  Paragraph as _Paragraph,
  TextContainer as _TextContainer,
  Image as _Image
} from "components";

export const IconWrapper = styled("div")`
  display: flex;
  max-width: 560px;
  width: 100%;
  gap: 20px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    margin-bottom: 79px;

    &:last-child {
      margin-bottom: 19px;
    }
  }
`;

export const Image = styled(({ ...props }) => <_Image minWidth={80} {...props} />)``;

export const TextContainer = styled(_TextContainer)`
  display: flex;
  flex-direction: column;
  max-width: 451px;
  width: 100%;
`;

export const IconTitle = styled(({ ...props }) => <_Paragraph variant='sm' {...props} />)`
  margin-bottom: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const IconParagraph = styled(({ ...props }) => <_Paragraph variant='sm' {...props} />)``;
