import styled from "styled-components";
import { TextContainerProps } from "./TextContainer";

export const TextContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  align-items: flex-start;
`;
