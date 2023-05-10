import styled from "styled-components";
import { Typography } from "components/Typography";

export const Container = styled("div")``;

export const InputWrapper = styled("div")`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Label = styled("label")`
  font-family: "Barlow", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 140%;

  > a {
    color: ${({ theme }) => theme.colors.yellow};
    text-decoration: underline;
  }
`;

export const ErrorText = styled(Typography.Paragraph).attrs({ variant: "xs" })`
  width: fit-content;
  color: ${({ theme }) => theme.colors.vividRed};
  font-weight: 300;
`;

export const Checkbox = styled("input")<{ hasError: boolean; isSubmitted: boolean }>`
  height: 20px;
  width: 20px;
  margin: 0;

  appearance: none;
  border-radius: 4px;
  cursor: pointer;

  border: 2px solid
    ${({ theme, hasError, isSubmitted }) =>
      isSubmitted ? (hasError ? theme.colors.vividRed : theme.colors.link) : theme.colors.link};

  &:hover {
    border-color: ${({ theme }) => theme.colors.yellow};
  }

  &:checked {
    border: none;
    background-image: url(./imgs/active_button-image.png);
    background-size: contain;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    height: 32px;
    width: 32px;
    padding: 14px;

    &:checked {
      background-image: url(./imgs/mobile_active_button-image.png);
    }
  }
`;
