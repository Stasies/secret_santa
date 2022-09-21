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
  color: ${({ theme }) => theme.text};
  font-size: 40px;
`;
export const H2 = styled.h2`
  color: ${({ theme }) => theme.bright};
  font-size: 40px;
`;
export const P = styled.p``;
export const NameContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;
export const Section = styled.div`
  width: 100%;
  padding: 40px 6px;
`;
export const Title = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  gap: 12px;
`;
