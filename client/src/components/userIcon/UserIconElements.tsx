import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: max-content;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  .icon {
    color: ${({ theme }) => theme.bright};
    width: 48px;
    height: 48px;
  }
`;
export const Text = styled.div`
  color: grey;
  font-weight: 600;
  font-size: 17px;
`;
