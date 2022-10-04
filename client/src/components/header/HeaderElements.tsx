import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Wrapper = styled.div`
  width: 100%;
  padding: 60px 170px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  cursor: default;
`;
export const H2 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: min-content;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;
export const Img = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
`;
