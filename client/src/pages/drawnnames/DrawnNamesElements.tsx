import styled from "styled-components";

export const Users = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 40px;
  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.grey};
  }
`;
export const User = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .drawn {
    color: green;
  }
  .none {
    color: tomato;
  }
`;
export const UserInfo = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
export const Name = styled.h5`
  font-weight: 500;
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;
export const Email = styled.div``;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.text};
`;
