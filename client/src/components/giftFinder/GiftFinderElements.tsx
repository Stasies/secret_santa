import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-left: 54px;
`;
export const H1 = styled.h1``;
export const Search = styled.div`
  display: flex;
  flex-direction: row;
  height: 53px;
`;
export const SearchButton = styled.button`
  height: 100%;
  background-color: ${({ theme }) => theme.bright};
  border: 2px solid ${({ theme }) => theme.bright};
  cursor: pointer;
  width: 45px;
  border-radius: 0 10px 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    color: white;
    width: 36px;
    height: 36px;
  }
`;
export const SearchInput = styled.input`
  height: 100%;
  background-color: ${({ theme }) => theme.disabled};
  height: 53px;
  outline: 2px solid ${({ theme }) => theme.disabled};
  outline-offset: -2px;
  border: none;
  width: calc(100% - 45px);
  padding: 0 12px;
  margin-top: 0;
  z-index: 1;
  border-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.bright};
  }
`;
export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 12px;
  margin: 16px 0;
`;
export const NavigationItem = styled.div`
  background-color: ${({ theme }) => theme.disabled};
  padding: 10px 14px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  .icon {
    color: ${({ theme }) => theme.text};
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: calc((100% - (166px * 4)) / 3);
  flex-wrap: wrap;
`;

export const Section = styled.div`
  position: relative;
  border-radius: 10px;
  &.selected {
    outline: 2px solid ${({ theme }) => theme.bright};
    background-color: rgba(106, 164, 251, 0.3);
    color: ${({ theme }) => theme.bright};
    .icon {
      color: ${({ theme }) => theme.bright};
    }
  }
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.disabled};
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  padding: 8px 0;
  transform: translateY(-8px);
  position: absolute;
  width: 100%;
  z-index: 20;
`;
export const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export const Item = styled.div`
  width: 166px;
  height: 222px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.disabled};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

export const Img = styled.img`
  max-height: 154px;
  height: 154px;
  width: 166px;
  object-fit: cover;
  background-color: white;
`;
export const AddButton = styled.button`
  border: none;
  border-radius: 50%;
  width: fit-content;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  transform: translateY(-50%);
  right: 10px;
  cursor: pointer;
  .favIcon {
    color: lightgrey;
  }
`;
export const About = styled.div`
  position: relative;
  padding: 12px;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Title = styled.p`
  margin: 0;
  padding: 0;
  text-overflow: ellipsis;
  width: 60%;
  height: 25px;
  white-space: nowrap;
  overflow: hidden;
`;
export const Price = styled.div`
  font-weight: 600;
`;
