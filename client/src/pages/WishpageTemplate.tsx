import React, { useState } from "react";
import GiftFinder from "../components/giftFinder/GiftFinder";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import UserIcon from "../components/userIcon/UserIcon";
import { Container, Wrapper, Main } from "../shared/Shared";

type pageProps = {
  children: React.ReactNode;
};
const WishPageTemplate = ({ children }: pageProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      {open && <Menu setOpen={setOpen} />}
      <Header>
        <UserIcon setOpen={setOpen} />
      </Header>
      <Wrapper>
        <Main>{children}</Main>
        <GiftFinder />
      </Wrapper>
    </Container>
  );
};

export default WishPageTemplate;
