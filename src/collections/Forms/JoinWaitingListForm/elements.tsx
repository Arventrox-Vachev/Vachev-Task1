import styled from "styled-components";
import { Button as _Button, FormInput, FormCheckbox, Typography } from "components";

export const JoinWaitingContainer = styled("div")`
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: 500px;
  min-height: 204px;
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

export const ImageWrapper = styled("div")`
  display: flex;
  align-items: center;
`;

export const Form = styled("form")``;

export const Title = styled(Typography.H2)`
  margin-bottom: 16px;

  > span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Container = styled("div")`
  display: flex;
  width: 100%;
`;

export const Checkbox = styled(FormCheckbox)`
  margin-right: 8px;

  &:last-child {
    margin-top: 8px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    margin-right: 16px;
    margin-bottom: 4px;
  }
` as typeof FormCheckbox;

export const InputField = styled(FormInput)`
  margin-bottom: 16px;
  margin-right: 20px;
` as typeof FormInput;

export const Button = styled(_Button).attrs({ variant: "secondary" })``;
