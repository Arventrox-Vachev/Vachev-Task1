import styled from "styled-components";
import {
  Label as _Label,
  Button as _Button,
  Checkbox as _Checkbox,
  InputField as _InputField,
  Typography
} from "components";

export const FormContainer = styled("form")`
  max-width: 500px;
  width: 100%;
  padding: 20px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 20px 24px;
  }
`;

export const InputWrapper = styled("div")`
  margin-bottom: 16px;
  display: flex;

  & + & {
    margin-bottom: 8px;
    align-items: center;
  }

  &:last-child {
    margin-bottom: 0px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    &:last-child {
      margin-top: 4px;
    }
  }
`;

export const Title = styled(Typography.H2)`
  margin-bottom: 16px;

  > span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Checkbox = styled(_Checkbox)`
  margin-right: 8px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    margin-right: 16px;
  }
`;

export const InputField = styled(_InputField)`
  margin-right: 20px;
`;

export const Label = styled(_Label)``;

export const Button = styled(_Button).attrs({ variant: "secondary" })``;
