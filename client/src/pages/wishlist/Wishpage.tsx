import { useReducer } from "react";
import { initialUserState, userReducer } from "../../utils/userReducer";
import Wishlist from "../../components/wishlist/Wishlist";
import { Container, Wrapper, H1, P, B } from "../../shared/Shared";
import { groupReducer, initialState } from "../../utils/groupReducer";

const Wishpage = () => {
  const [user] = useReducer(userReducer, initialUserState);
  const [state] = useReducer(groupReducer, initialState);
  const uid = window.location.pathname.split("/").slice(-2)[0].toString();
  return (
    <Container>
      <Wrapper>
        <H1>Gift finder</H1>
        <Wishlist />
        <P>
          <B href={`/${state._id}/${user._id}`}>Visit the group page</B>
        </P>
      </Wrapper>
    </Container>
  );
};

export default Wishpage;
