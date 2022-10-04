import { useReducer } from "react";

export const user = {
  user_name: "",
  email: "",
  groupId: "",
  group_name: "",
  selected_person: "",
  wish_list: [],
};
const jsonUser = localStorage.getItem("user");
export const initialUserState = jsonUser !== null ? JSON.parse(jsonUser) : user;

type ACTIONTYPE =
  | { type: "add_user"; payload: any }
  | { type: "select_person"; payload: any }
  | { type: "add_wishes"; payload: any };

export const userReducer = (
  userState: typeof initialUserState,
  action: ACTIONTYPE
) => {
  switch (action.type) {
    case "add_user":
      return { ...userState, [action.payload.name]: action.payload.value };
      break;
    case "select_person":
      return { ...userState, selected_person: action.payload };
      break;
    case "add_wishes":
      return {
        ...userState,
        wish_list: action.payload,
      };
      break;
    default:
      throw new Error();
  }
};
