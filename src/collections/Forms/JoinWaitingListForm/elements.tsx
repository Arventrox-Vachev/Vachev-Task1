import styled from "styled-components";
import {
  H2 as _H2,
  Label as _Label,
  Button as _Button,
  Checkbox as _Checkbox,
  InputField as _InputField
} from "components";

export const FormContainer = styled(({ padding, maxWidth, ...props }) => <form {...props} />)`
  max-width: ${({ maxWidth }) => maxWidth || "501px"};
  width: 100%;
  padding: 20px 22px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: ${({ padding }) => padding || "20px 22px"};
  }
`;

export const InputWrapper = styled("div")`
  display: flex;

  &:first-of-type {
    padding: 16px 0 13px;
    gap: 20px;
  }

  & + & {
    align-items: center;
  }

  &:last-child {
    margin-top: 10px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    &:last-child {
      margin-top: 6px;
    }
  }
`;

export const H2 = styled(({ ...props }) => <_H2 {...props} />)`
  > span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Checkbox = styled(_Checkbox)``;

export const InputField = styled(_InputField)``;

export const Label = styled(({ ...props }) => <_Label {...props} />)`
  margin-left: 8px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    margin-left: 18px;
  }
`;

export const Button = styled(({ ...props }) => <_Button variant='secondary' {...props} />)``;
