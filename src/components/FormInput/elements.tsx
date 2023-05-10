import styled, { css } from "styled-components";
import { Typography } from "components/Typography";

export const Container = styled("div")`
  width: 100%;
`;

export const InputWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  display: inline-block;
`;

export const Label = styled("label")``;

export const ErrorText = styled(Typography.Paragraph).attrs({ variant: "sm" })`
  color: ${({ theme }) => theme.colors.vividRed};
`;

export const InputField = styled("input")<{ hasError: boolean; isSubmitted: boolean }>`
  height: 50px;
  width: 100%;
  padding: 0 44px 0 16px;

  border-color: transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.link};

  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  border: 2px solid
    ${({ theme, hasError, isSubmitted }) =>
      isSubmitted && (hasError ? theme.colors.vividRed : theme.colors.green)};

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
`;

export const ImageWrapper = styled("div")`
  display: flex;
  align-items: center;

  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  border: none;
  background: none;
`;
