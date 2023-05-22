import styled from "styled-components";
import { Button as _Button, FormInput, Typography } from "components";

export const RegistrationContainer = styled("div")`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: 300px;
  width: 100%;
  padding: 20px;
  border-radius: 16px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 20px 24px;
  }
`;

export const SuccessContainer = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  > h2 {
    margin-bottom: 44px;
  }
`;

export const Form = styled("form")``;

export const Container = styled("div")`
  display: flex;
`;

export const Title = styled(Typography.H2)`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.yellow};

  &:last-of-type {
    text-align: center;
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
  width: fit-content;
  margin: 12px auto;
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
export const ImageWrapper = styled("div")`
  display: flex;
  align-items: center;
`;
