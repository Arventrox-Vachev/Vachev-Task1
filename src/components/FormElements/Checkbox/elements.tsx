import styled from "styled-components";

export const Checkbox = styled("input")`
  height: 20px;
  width: 20px;
  margin: 0;

  appearance: none;
  border: 2px solid ${({ theme }) => theme.colors.link};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.yellow};
  }

  &:checked {
    border: none;
    background-image: url(./imgs/active_button-image.png);
    background-size: contain;

    @media ${({ theme }) => theme.breakpoint.max.S} {
      min-width: 32px;
      min-height: 32px;
      background-image: url(./imgs/mobile_active_button-image.png);
    }
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    height: 32px;
    width: 32px;
    padding: 14px;
  }
`;
