import { useReducer, useState } from "react";
import { initialUserState, userReducer } from "../../utils/userReducer";
import Wishlist from "../../components/wishlist/Wishlist";
import { groupReducer, initialState } from "../../utils/groupReducer";
import { Container, Wrapper, Main, H1, P, B } from "../../shared/Shared";
import Menu from "../../components/menu/Menu";
import UserIcon from "../../components/userIcon/UserIcon";
import PageTemplate from "../PageTemplate";

const Wishpage = () => {
  const [user] = useReducer(userReducer, initialUserState);
  const [state] = useReducer(groupReducer, initialState);
  const [open, setOpen] = useState(false);
  const uid = window.location.pathname.split("/").slice(-2)[0].toString();
  return (
    <PageTemplate>
      <H1>Gift finder</H1>
      <Wishlist />
      <P>
        <B href={`/${state._id}/${user._id}`}>Visit the group page</B>
      </P>
    </PageTemplate>
  );
};

export default Wishpage;
