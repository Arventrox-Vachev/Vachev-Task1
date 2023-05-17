import styled from "styled-components";
import { Button as _Button, FormInput, Typography } from "components";

export const Form = styled("form")`
  margin: 100px auto;
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: 500px;
  width: 100%;
  padding: 20px;
  border-radius: 16px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 20px 24px;
  }
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

export const Button = styled(_Button).attrs({ variant: "secondary" })``;
