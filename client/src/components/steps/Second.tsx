import React, { useRef, useState, useReducer, useEffect } from "react";
import {
  Container,
  P,
  B,
  Button,
  Message,
  InputContainer,
  Input,
  Select,
  User,
} from "./FirstElements";
import { groupReducer, initialState } from "../../utils/groupReducer";
import { useNavigate } from "react-router-dom";
import { initialUserState, userReducer } from "../../utils/userReducer";
import axios from "axios";

const Second = () => {
  const [state, dispatch] = useReducer(groupReducer, initialState);
  const [openSelect, setOpenSelect] = useState(false);
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const name = useRef<any | null>(null);
  const email = useRef<any | null>(null);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(name.current?.value);
  const [notRegisteredList, setNotRegisteredList] = useState([""]);
  const [filteredNames, setFilteredNames] = useState(state.names);
  const selectUser = (u: string) => {
    setCurrentUser(u);
    setOpenSelect(false);
  };

  useEffect(() => {
    async function getUserInfo() {
      let array: any = [];
      try {
        const res = await axios.get(
          "http://localhost:8800/api/groups/group/" + state._id
        );
        res.data.map((d: any) => {
          array.push(d);
          console.log(d);
        });
        let newnames: string[] = [];
        state.names.map((name: string) => {
          if (!array.some((user: any) => user.user_name === name)) {
            newnames.push(name);
          }
        });
        if (notRegisteredList.length < 2) {
          setNotRegisteredList([...newnames]);
          console.log(notRegisteredList);
        }
      } catch (error: any) {
        console.log(error.response.data);
      }
    }
    getUserInfo();
  }, [state.names, state._id]);
  const filter = () => {
    setFilteredNames(
      notRegisteredList.filter((user: string) =>
        user.includes(name.current?.value)
      )
    );
    for (let i = 0; i < state.names.length; i++) {}
  };
  const register = async () => {
    try {
      const user = await axios.post("http://localhost:8800/api/auth/register", {
        user_name: currentUser,
        email: email.current?.value,
        groupId: state._id,
      });
      userDispatch({
        type: "add_user",
        payload: user.data,
      });
      console.log(user.data);
      localStorage.setItem("user", JSON.stringify(user.data));
      window.location.replace(`/${user.data.groupId}/step:3`);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <Container>
      <P>To draw a name, select your name</P>
      <Message>
        <B>Your name</B>
        <InputContainer>
          <Input
            onFocus={() => setOpenSelect(true)}
            // onBlur={() => setOpenSelect(false)}
            type="text"
            name="user_name"
            placeholder={currentUser || "Select your name"}
            ref={name}
            onChange={filter}
          />
          {openSelect && (
            <Select onMouseOver={() => setOpenSelect(true)}>
              {filteredNames.map((u: string, index: number) => (
                <User key={index} onClick={() => selectUser(u)}>
                  {u}
                </User>
              ))}
            </Select>
          )}
        </InputContainer>
      </Message>
      <Message>
        <B>Your email</B>
        <InputContainer>
          <Input
            ref={email}
            type="email"
            name="user_name"
            placeholder="Enter your email"
          />
        </InputContainer>
      </Message>

      <Button type="button" onClick={register}>
        Join the group
      </Button>
    </Container>
  );
};

export default Second;
