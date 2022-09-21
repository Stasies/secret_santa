import React, { useReducer, useRef } from "react";
import { groupReducer, initialState } from "../../../../utils/groupReducer";
import { Form, InputContainer, Input, Button, P } from "../../EditElements";
import { H1 } from "../../../../shared/Shared";
import axios from "axios";

const Budget = () => {
  const [state, dispatch] = useReducer(groupReducer, initialState);
  const budget = useRef<HTMLInputElement>(null);
  const changeBudget = async () => {
    try {
      const res = await axios.put(
        "http://localhost:8800/api/groups/" + state._id,
        { budget: (budget.current as HTMLInputElement).value }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const setBudget = () => {
    dispatch({
      type: "fill_form",
      payload: {
        name: "budget",
        value: (budget.current as HTMLInputElement).value,
      },
    });
    console.log(state.budget);
  };
  return (
    <Form>
      <H1>Change the budget</H1>
      <P>You can change the budget for the group here.</P>

      <InputContainer>
        <Input
          onChange={setBudget}
          name="budget"
          type="text"
          placeholder={state.budget}
          ref={budget}
        />
      </InputContainer>
      <Button onClick={changeBudget}>Save</Button>
    </Form>
  );
};

export default Budget;
