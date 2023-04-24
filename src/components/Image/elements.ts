import styled from "styled-components";
import Image from "next/image";
import { NextImageProps } from ".";

export const NextImage = styled(Image)<NextImageProps>`
  width: 100%;
  height: auto;
`;
