import React from "react";
import { Container, Wrapper, Logo, Img, H2 } from "./HeaderElements";
import presentImg from "../../img/present.png";

type pageProps = {
  children: React.ReactNode;
};
const Header = ({ children }: pageProps) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={presentImg} />
          <H2>draw names</H2>
        </Logo>
        {children}
      </Wrapper>
    </Container>
  );
};

export default Header;
