import styled from "styled-components";
export const Container = styled.div`
  height: 100%;
  max-width: 365px;
  min-height: 500px;
`;
export const Wrapper = styled.div``;
export const Form = styled.div`
  height: 0;
  width: 100%;
  padding: 10px 0 0 54px;
  position: relative;
  animation: roll 3s;
  animation-fill-mode: forwards;
  @keyframes roll {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }
  &.active {
    &::after {
      content: "";
      width: 10px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 20px;
      border-left: 2px solid ${({ theme }) => theme.bright};
    }
  }
`;
export const Button = styled.div`
  width: fit-content;
  min-width: 0;
  height: 37px;
  line-height: 35px;
  margin-top: 8px;
  margin-left: 8px;
  padding: 0 20px 0 20px;
  font-size: 16px;
  background: ${({ theme }) => theme.bright};
  box-shadow: 0 4px 4px rgb(0 0 0 / 17%);
  border-radius: 50px;
  color: white;
`;
export const Section = styled.div`
  /* &:first-of-type {
    border-left: 1px solid grey;
  } */
`;
export const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;
export const Number = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.grey};
  color: ${({ theme }) => theme.white};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    background-color: ${({ theme }) => theme.bright};
  }
`;
export const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  &.active {
    color: ${({ theme }) => theme.bright};
  }
`;

export const FormSection = styled.fieldset`
  border: 0 none;
  outline: 0;
  width: 100%;
  padding: 0;
  margin-bottom: 24px;
`;
export const Label = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text};
`;
export const InputContainer = styled.div`
  margin-bottom: 12px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  .icon {
    color: ${({ theme }) => theme.grey};
    width: 18px;
  }
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: calc(100% - 34px);
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
export const Message = styled.div`
  color: red;
  width: calc(100% - 34px);
  font-size: 17px;
  line-height: 26px;
`;
export const Textarea = styled.textarea<{ height: number }>`
  box-sizing: border-box;
  resize: none;
  width: calc(100% - 34px);
  padding: 12px 18px;
  border-radius: 6px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.grey};
  font-size: 16px;
  height: ${(props) => `${props.height}px`};
  &:focus {
    border: 2px solid #4b92fb;
  }
`;
