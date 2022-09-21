import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #faf9f9;
  height: fit-content;
`;
export const Wrapper = styled.div`
  height: fit-content;
  padding: 60px 170px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
`;
export const Main = styled.div`
  width: fit-content;
  max-width: 400px;
  min-width: 365px;
`;
export const H1 = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.text};
  margin-top: 0;
`;
export const P = styled.p`
  color: ${({ theme }) => theme.text};
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
