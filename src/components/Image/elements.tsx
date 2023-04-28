import styled from "styled-components";
import Image from "next/image";

export const ImageContainer = styled(({ minWidth, ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;

  width: fit-content;
  min-width: ${({ minWidth }) => ` ${minWidth}px` || "auto"};
  margin-bottom: auto;
`;

export const NextImage = styled(Image)``;
