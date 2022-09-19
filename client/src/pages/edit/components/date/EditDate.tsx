import React, { useReducer, useRef } from "react";
import {
  Form,
  H1,
  InputContainer,
  Input,
  Button,
  H5,
} from "../../EditElements";
import axios from "axios";
import { groupReducer, initialState } from "../../../../utils/groupReducer";

const EditDate = () => {
  const [state, dispatch] = useReducer(groupReducer, initialState);
  const eventDate = useRef<HTMLInputElement>(null);
  const changeDate = async () => {
    try {
      const res = await axios.put(
        "http://localhost:8800/api/groups/" + state._id,
        { date: (eventDate.current as HTMLInputElement).value }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const addDate = () => {
    dispatch({
      type: "fill_form",
      payload: {
        name: "date",
        value: (eventDate.current as HTMLInputElement).value,
      },
    });
    console.log(state.date);
  };
  return (
    <Form>
      <H1>Change the event date</H1>
      <InputContainer>
        <H5>Date of the gift exchange</H5>
        <Input
          onChange={addDate}
          ref={eventDate}
          type="date"
          placeholder="select date"
        />
      </InputContainer>
      <Button onClick={changeDate}>Save</Button>
    </Form>
  );
};

export default EditDate;
