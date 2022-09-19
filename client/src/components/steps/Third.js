import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { initialUserState, userReducer } from "../../utils/userReducer";
import { Container, P, Button } from "./FirstElements";
const Third = () => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);

  return (
    <Container>
      <P>You are now the member of the group</P>
      <Button href={`/${userState.groupId}/${userState._id}`}>
        Go to group page
      </Button>
    </Container>
  );
};

export default Third;
