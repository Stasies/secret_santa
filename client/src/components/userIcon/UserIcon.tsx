import React, { useReducer } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Container, Text } from "./UserIconElements";
import { menuReducer, menu } from "../../utils/openMenu";

type menuProps = {
  setOpen: React.ComponentState;
};
const UserIcon = ({ setOpen }: menuProps) => {
  const [toggle, dispatch] = useReducer(menuReducer, menu);
  console.log(toggle.open);
  return (
    <Container onClick={() => setOpen(true)}>
      <Text>Signed in</Text>
      <AccountCircleIcon className="icon" />
    </Container>
  );
};

export default UserIcon;
