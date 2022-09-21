import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  position: fixed;
  z-index: 100;
  background-color: white;
  .icon {
    position: absolute;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    color: grey;
    stroke: grey;
    stroke-width: 2;
    cursor: pointer;
  }
`;
export const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 100px 0;
`;
export const Item = styled.a`
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:visited {
    color: ${({ theme }) => theme.text};
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 20px;
`;
