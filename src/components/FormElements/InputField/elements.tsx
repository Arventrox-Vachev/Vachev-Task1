import styled from "styled-components";

export const InputField = styled("input")`
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
