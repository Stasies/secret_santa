import axios from "axios";
import React, { FC, useRef, useReducer } from "react";
import { groupReducer, initialState } from "../../../../utils/groupReducer";
import {
  Form,
  H1,
  InputContainer,
  Input,
  Button,
  H5,
  P,
} from "../../EditElements";

const AddPerson: FC = () => {
  const name = useRef<HTMLInputElement>(null);
  const [state, dispatch] = useReducer(groupReducer, initialState);
  const newMember = async () => {
    dispatch({
      type: "add_members",
      payload: [...state.names, (name.current as HTMLInputElement).value],
    });
    try {
      const res = axios.put("http://localhost:8800/api/groups/" + state._id, {
        names: [...state.names, (name.current as HTMLInputElement).value],
      });
      console.log(res);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  return (
    <Form>
      <H1>Add a person</H1>
      <P>Who do you want to add to the group?</P>
      <P>
        A name will be drawn for this group member and they can make a wish
        list.
      </P>
      <InputContainer>
        <H5>Name</H5>
        <Input type="text" placeholder="Enter a name" ref={name} />
      </InputContainer>
      <Button onClick={newMember}>Add new member</Button>
    </Form>
  );
};

export default AddPerson;
