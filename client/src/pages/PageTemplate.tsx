import React, { useState } from "react";
import Menu from "../components/menu/Menu";
import UserIcon from "../components/userIcon/UserIcon";
import { Container, Wrapper, Main } from "../shared/Shared";

type pageProps = {
  children: React.ReactNode;
};
const PageTemplate = ({ children }: pageProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      {open && <Menu setOpen={setOpen} />}
      <Wrapper>
        <Main>{children}</Main>
        <UserIcon setOpen={setOpen} />
      </Wrapper>
    </Container>
  );
};

export default PageTemplate;
