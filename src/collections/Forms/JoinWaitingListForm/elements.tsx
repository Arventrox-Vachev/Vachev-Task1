import styled from "styled-components";
import { H2 as _H2, Label as _Label, Button as _Button } from "components";

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
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;

  > span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Checkbox = styled(({ ...props }) => <input {...props} />)`
  margin: 0;

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

  @media ${({ theme }) => theme.breakpoint.max.S} {
    height: auto;
    width: auto;
    padding: 14px;
  }
`;

export const InputField = styled(({ ...props }) => <input {...props} />)`
  width: 100%;
  padding-left: 16px;

  border-color: transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.link};

  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.link};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  &:not(:placeholder-shown) {
    background-color: #ffffff;
    color: ${({ theme }) => theme.colors.black};
  }

  //For later
  /* &:valid {
    border: 2px solid #3be100;
  } */
`;

export const Label = styled(({ ...props }) => <_Label {...props} />)`
  margin-left: 8px;

  font-family: "Barlow";
  font-style: normal;
  font-weight: 100;
  font-size: 12px;
  line-height: 140%;

  > span {
    color: ${({ theme }) => theme.colors.yellow};
    text-decoration: underline;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    margin-left: 18px;
  }
`;

export const Button = styled(({ ...props }) => <_Button variant='secondary' {...props} />)``;
