import React, { useReducer, useEffect, useState } from "react";
import Wishlist from "../../components/wishlist/Wishlist";
import { H2, NameContainer, Section, Title, P } from "./DrawElements";
import { H1 } from "../../shared/Shared";
import { Container, Wrapper, Main, B } from "../../shared/Shared";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { initialUserState, userReducer } from "../../utils/userReducer";
import { groupReducer, initialState } from "../../utils/groupReducer";
import axios from "axios";
import Menu from "../../components/menu/Menu";
import UserIcon from "../../components/userIcon/UserIcon";
import PageTemplate from "../PageTemplate";

const Draw = () => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [state, dispatch] = useReducer(groupReducer, initialState);
  const [randomNumber, setRandomNumber] = useState(0);
  const [filteredNames, setFilteredNames] = useState([]);
  const [open, setOpen] = useState(false);
  const randomPerson = (min: number, max: number) => {
    if (randomNumber === 0) {
      setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min);
    }
  };
  useEffect(() => {
    setFilteredNames(
      state.names.filter(
        (item: string) =>
          state.drawn.indexOf(item) === -1 && item !== userState.user_name
      )
    );
    async function selectUser() {
      console.log(filteredNames);
      if (!userState.selected_person && filteredNames) {
        randomPerson(1, filteredNames.length);
        userDispatch({
          type: "select_person",
          payload: filteredNames[randomNumber - 1],
        });
        dispatch({
          type: "draw_name",
          payload: filteredNames[randomNumber - 1],
        });
        try {
          const res = await axios.put(
            "http://localhost:8800/api/users/" + userState._id,
            { selected_person: filteredNames[randomNumber - 1] }
          );
          const res2 = await axios.put(
            "http://localhost:8800/api/groups/" + state._id,
            { drawn: [...state.drawn, filteredNames[randomNumber - 1]] }
          );
          console.log(res);
        } catch (error: any) {
          console.log(error.response.data);
        }
      }
    }
    selectUser();
    return () => {};
  }, [userState.selected_person, state.names.length]);

  console.log(userState);
  return (
    <PageTemplate>
      <H1>My drawn name</H1>
      <NameContainer>
        <H2>{userState.selected_person}</H2>
      </NameContainer>
      <Wishlist />
      <Section>
        <Title>
          {" "}
          <PermIdentityIcon className="icon" />
          Hobbies and interests
        </Title>
        <P>
          {userState.selected_person} has not added any hobbies or interests
        </P>
      </Section>
      <P>
        <B href={`/${state._id}/${userState._id}`}>Visit the group page</B>
      </P>
    </PageTemplate>
  );
};

export default Draw;
