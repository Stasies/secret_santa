import React, { useEffect, useReducer, useState } from "react";
import { initialUserState, userReducer } from "../../utils/userReducer";
import { Container, Wrapper, Item, User } from "./MenuElements";
import { P, B } from "../Shared";
import CloseIcon from "@mui/icons-material/Close";
import { menuReducer, menu } from "../../utils/openMenu";

type menuProps = {
  setOpen: React.ComponentState;
};
const Menu = ({ setOpen }: menuProps) => {
  const [user] = useReducer(userReducer, initialUserState);
  const [toggle, toggleMenu] = useReducer(menuReducer, menu);

  return (
    <Container>
      <Wrapper>
        <Item href={`/${user.groupId}/${user._id}/wishlist`}>My wish list</Item>
        <Item href={`/${user.groupId}/${user._id}/draw`}>My drawn name</Item>
        <Item href={`/${user.groupId}/${user._id}`}>My group page</Item>
        <Item>My account</Item>
        <User>
          <P>{user.email}</P>
          <P>
            <B>Sign out</B>
          </P>
        </User>
      </Wrapper>
      <CloseIcon className="icon" onClick={() => setOpen(false)} />
    </Container>
  );
};

export default Menu;
