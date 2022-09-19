import React, { FC, useReducer } from "react";
import { groupReducer, initialState } from "../../utils/groupReducer";
import { initialUserState, userReducer } from "../../utils/userReducer";
import AddPerson from "./components/addPerson/AddPerson";
import Budget from "./components/budget/Budget";
import EditDate from "./components/date/EditDate";
import { Container, Wrapper, B, P } from "./EditElements";

const Edit: FC = (props) => {
  const path = window.location.pathname.split("/").slice(-1).toString();
  const [state, dispatch] = useReducer(groupReducer, initialState);
  const [user] = useReducer(userReducer, initialUserState);
  console.log(user._id);
  return (
    <Container>
      <Wrapper>
        {path === "budget" && <Budget />}
        {path === "add" && <AddPerson />}
        {path === "date" && <EditDate />}
        <P>
          <B href={`/${state._id}/${user._id}`}>Visit the group page</B>
        </P>
      </Wrapper>
    </Container>
  );
};

export default Edit;
