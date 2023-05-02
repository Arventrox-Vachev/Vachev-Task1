import styled from "styled-components";
import {
  TextContainer as _TextContainer,
  Typography,
  ImageWrapper as _ImageWrapper
} from "components";

export const CardWrapper = styled("div")`
  max-width: 280px;
  width: 100%;
`;

export const Title = styled(Typography.H2)`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.yellow};

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin: 21px 0;
  }
`;

export const Text = styled(Typography.Paragraph).attrs({ variant: "sm" })``;

export const ImageWrapper = styled(_ImageWrapper)`
  min-width: 102px;
  justify-content: flex-start;
`;
