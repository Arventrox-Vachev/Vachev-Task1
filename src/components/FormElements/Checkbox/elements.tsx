import styled from "styled-components";

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
