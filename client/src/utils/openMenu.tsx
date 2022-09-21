import { useReducer } from "react";

export const menu = { open: true };

type ACTIONTYPE = { type: "toggle_menu"; payload: any };

export const menuReducer = (state: typeof menu, action: ACTIONTYPE) => {
  if (action.type === "toggle_menu") {
    return { open: action.payload };
  }
  return state;
};
