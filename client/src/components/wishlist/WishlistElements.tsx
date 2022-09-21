import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  height: fit-content;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  margin-bottom: 28px;
`;
export const Header = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bright};
  text-align: center;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const H3 = styled.h3`
  color: white;
  font-size: 20px;
`;
export const Main = styled.div`
  color: ${({ theme }) => theme.text};
  width: 100%;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 100%;
  position: relative;
  padding: 14px;
`;
export const P = styled.p`
  line-height: 26px;
  font-size: 16px;
  width: calc(100% - 28px);
  box-sizing: border-box;
  text-align: center;
  margin: 0;
  padding: 0;
`;
export const IconContainer = styled.button`
  border-radius: 6px;
  border: 1px solid transparent;
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.bright};
  position: absolute;
  bottom: 14px;
  left: 14px;
  .icon {
    pointer-events: none;
  }
  cursor: pointer;
`;

export const Input = styled.input<{ width: string }>`
  box-sizing: border-box;
  width: ${(props) => props.width};
  padding: 0 18px 0 18px;
  border-radius: 6px;
  box-sizing: border-box;
  height: 48px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.grey};
  justify-self: start;
  align-self: start;
  font-size: 16px;
  transition: 300ms;
  &:focus {
    border: 2px solid #4b92fb;
  }
  &.error {
    border: 2px solid red;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 28px);
`;
export const Wish = styled.div`
  margin-bottom: 14px;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 14px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.bg};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  .icon {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    padding: 4px;
    width: 20px;
    height: 20px;
    font-weight: bold;
    stroke: grey;
    stroke-width: 2;
  }
`;
