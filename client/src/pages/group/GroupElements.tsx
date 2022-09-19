import styled from "styled-components";
export const Container = styled.div`
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
`;
export const P = styled.p``;

export const About = styled.div`
  color: #414141;
  margin-bottom: 60px;
`;
export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  .icon {
    height: 40px;
    width: 40px;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  b,
  p {
    margin: 0;
    font-size: 18px;
  }
`;
export const Section = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.hover};
  padding: 40px 6px;
`;
export const Title = styled.div`
  color: #414141;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  gap: 12px;
`;
export const B = styled.a`
  font-weight: 16px;
  color: ${({ theme }) => theme.bright};
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
`;
export const InputContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bright};
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 12px 12px 0 0;
  box-sizing: border-box;
  position: relative;
`;
export const Textarea = styled.textarea<{ height: number }>`
  border-radius: 12px;
  height: 100px;
  resize: none;
  height: ${(props) => `${props.height}px`};
  padding: 20px 20px 70px;
  line-height: 26px;
  border: none;
  outline: none;
`;
export const Button = styled.button`
  position: absolute;
  bottom: 28px;
  left: 0;
  right: 0;
  margin: auto;
  width: fit-content;
  min-width: 0;
  height: 37px;
  line-height: 35px;
  padding: 0 20px 0 20px;
  font-size: 16px;
  background: ${({ theme }) => theme.bright};
  box-shadow: 0 4px 4px rgb(0 0 0 / 17%);
  border-radius: 50px;
  color: white;
  border: none;
`;
export const MessagesContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 12px;
  overflow: hidden;
`;
export const Messages = styled.div`
  background-color: white;
  padding: 20px;
`;
export const Message = styled.div`
  p {
    margin: 0;
    font-size: 16px;
    font-family: "Open Sans", "Arial", "Droid Sans", sans-serif;
    line-height: 26px;
  }
`;
