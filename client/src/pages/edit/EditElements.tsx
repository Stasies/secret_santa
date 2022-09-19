import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #faf9f9;
  height: fit-content;
`;
export const Wrapper = styled.div`
  height: fit-content;
  padding: 120px;
  max-width: 365px;
`;
export const H1 = styled.h1`
  color: #414141;
  font-size: 40px;
  margin: 10px 0;
`;

export const Form = styled.div`
  height: 100%;
  max-width: 400px;
  padding-bottom: 40px;
`;

export const InputContainer = styled.div`
  margin: 36px 0;
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
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
export const Button = styled.button`
  width: fit-content;
  border: none;
  min-width: 0;
  padding: 0 30px 0 30px;
  font-size: 20px;
  background: ${({ theme }) => theme.bright};
  box-shadow: 0 4px 4px rgb(0 0 0 / 17%);
  border-radius: 50px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  height: 57px;
  line-height: 55px;
  min-width: 200px;
  cursor: pointer;
  &:visited {
    color: white;
  }
`;

export const H5 = styled.h5`
  font-size: 18px;
  line-height: 6px;
  font-weight: 600;
  color: #414141;
  margin: 18px 0;
`;
export const P = styled.p`
  color: #414141;
  font-size: 17px;
  line-height: 26px;
  margin: 0 0 32px;
`;

export const B = styled.a`
  font-weight: 16px;
  color: ${({ theme }) => theme.bright};
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
`;
