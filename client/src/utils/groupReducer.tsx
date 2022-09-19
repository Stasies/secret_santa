import { useReducer } from "react";

const group = {
  user_name: "",
  names: [""],
  drawn: [""],
  group_name: "",
  date: Date,
  budget: 0,
  currency: "",
  email: "",
  messages: [
    {
      sender: "",
      text: "",
    },
  ],
};

const jsonGroup = localStorage.getItem("group");
export const initialState = jsonGroup !== null ? JSON.parse(jsonGroup) : group;

type ACTIONTYPE =
  | { type: "fill_form"; payload: any }
  | { type: "add_members"; payload: any }
  | { type: "draw_name"; payload: any }
  | { type: "add_message"; payload: any };

export const groupReducer = (
  state: typeof initialState,
  action: ACTIONTYPE
) => {
  switch (action.type) {
    case "fill_form":
      return { ...state, [action.payload.name]: action.payload.value };
      break;
    case "add_members":
      return { ...state, names: action.payload };
      break;
    case "add_message":
      return { ...state, messages: action.payload };
      break;
    case "draw_name":
      return { ...state, drawn: [...state.drawn, action.payload] };
      break;
    default:
      throw new Error();
  }
};
