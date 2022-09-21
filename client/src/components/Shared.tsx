import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  width: calc(100% - 34px);
  padding: 0 18px 0 18px;
  border-radius: 6px;
  height: 48px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.grey};
  font-size: 16px;
  &:focus {
    border: 2px solid #4b92fb;
  }
  &.error {
    border: 2px solid red;
  }
`;

export const P = styled.p`
  margin: 0;
`;
export const B = styled.a`
  font-weight: 16px;
  color: ${({ theme }) => theme.bright};
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
`;
