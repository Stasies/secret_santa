import React from "react";
import { Container, Wrapper, Logo } from "./HeaderElements";

type pageProps = {
  children: React.ReactNode;
};
const Header = ({ children }: pageProps) => {
  return (
    <Container>
      <Wrapper>
        <Logo>sadsad</Logo>
        {children}
      </Wrapper>
    </Container>
  );
};

export default Header;
