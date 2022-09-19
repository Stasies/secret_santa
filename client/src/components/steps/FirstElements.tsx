import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  max-width: 365px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Message = styled.div`
  width: 100%;
`;
export const P = styled.p`
  margin-top: 8px;
  line-height: 26px;
`;
export const B = styled.b`
  margin-bottom: 8px;
`;

export const Button = styled.a`
  width: fit-content;
  border: none;
  min-width: 0;
  height: 57px;
  line-height: 55px;
  margin-top: 8px;
  margin-left: 8px;
  padding: 0 30px 0 30px;
  font-size: 20px;
  background: ${({ theme }) => theme.bright};
  box-shadow: 0 4px 4px rgb(0 0 0 / 17%);
  border-radius: 50px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  &:visited {
    color: white;
  }
`;

export const InputContainer = styled.div`
  margin: 12px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  position: relative;
  .icon {
    color: ${({ theme }) => theme.grey};
    width: 18px;
  }
`;
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

export const Select = styled.div`
  position: absolute;
  width: calc(100% - 34px);
  top: 50px;
  background-color: white;
  z-index: 2;
`;
export const User = styled.div`
  width: inherit;
  padding: 18px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.hover};
  }
`;
