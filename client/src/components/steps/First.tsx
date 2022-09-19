import React, { useReducer } from "react";
import { Container, P, B, Message, Button } from "./FirstElements";
import { groupReducer, initialState } from "../../utils/groupReducer";
import { useNavigate } from "react-router-dom";

const First = () => {
  const [state, dispatch] = useReducer(groupReducer, initialState);
  const navigate = useNavigate();
  return (
    <Container>
      <P>
        <b>{state.user_name}</b> invites you to draw names for{" "}
        <b>{state.group_name}</b> with{" "}
        {state.names.map((name: string, index: number) => (
          <b>
            <span key={index}>{name}, </span>{" "}
          </b>
        ))}
      </P>
      <P>Budget: ${state.budget}</P>
      {state.messages[0].text && (
        <Message>
          <B>Message from user</B>
          <P>
            <i>{state.messages[0].text}</i>
          </P>
        </Message>
      )}
      <Button href={`/${state._id}/step:2`}>Join the group</Button>
    </Container>
  );
};

export default First;
