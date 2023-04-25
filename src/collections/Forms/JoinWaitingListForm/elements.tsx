import styled from "styled-components";
import {
  H2 as _H2,
  HighlightedTextContainer as _HighlightedTextContainer,
  Label as _Label,
  Button as _Button
} from "components";

export const FormContainer = styled(({ ...props }) => <form {...props} />)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  border-radius: 16px;
`;

export const InputWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;

  &:first-of-type {
    padding: 16px 0;
    gap: 20px;
  }

  & + & {
    align-items: center;
  }

  &:last-child {
    margin-top: 10px;
  }
`;

export const H2 = styled(({ ...props }) => <_H2 {...props} />)`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`;

export const Checkbox = styled(({ ...props }) => <input {...props} />)`
  appearance: none;
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border: 2px solid ${({ theme }) => theme.colors.link};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.yellow};
  }

  &:checked {
    background-image: url(./imgs/active-button.png);
    background-size: contain;
    border: none;
  }
`;

export const InputField = styled(({ ...props }) => <input {...props} />)`
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.link};
  border-radius: 4px;
`;

export const Label = styled(({ ...props }) => <_Label {...props} />)``;

export const Button = styled(({ ...props }) => <_Button variant='secondary' {...props} />)``;

export const HighlightedTextContainer = styled(({ ...props }) => (
  <_HighlightedTextContainer {...props} />
))`
  &.underlined {
    text-decoration: underline;
  }
`;
