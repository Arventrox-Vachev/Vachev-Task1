import styled from "styled-components";
import { Button as _Button, FormInput, Typography } from "components";

export const Form = styled("form")`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: 300px;
  width: 100%;
  padding: 20px;
  border-radius: 16px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 20px 24px;
  }
`;

export const Container = styled("div")`
  display: flex;
`;

export const Title = styled(Typography.H2)`
  margin-bottom: 16px;

  > span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const InputField = styled(FormInput)`
  margin-bottom: 16px;
  margin-right: 20px;

  > div > div {
    top: 70%;
  }
` as typeof FormInput;

export const Button = styled(_Button).attrs({ variant: "secondary" })`
  margin: 12px auto;
  & + & {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    justify-content: space-between;
    padding: 12px 48px;

    &:hover {
      color: ${({ theme }) => theme.colors.black};
      border-color: transparent;
    }
  }
`;
export const CloseButton = styled("button")`
  height: min-content;
  width: fit-content;
  padding: 0;
  appearance: none;
  border: none;
  margin-left: auto;
  background-color: transparent;
  cursor: pointer;
`;
