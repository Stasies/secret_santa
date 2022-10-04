import React, {
  ChangeEvent,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import {
  About,
  User,
  UserInfo,
  Section,
  Title,
  P,
  B,
  InputContainer,
  Textarea,
  Button,
  MessagesContainer,
  Messages,
  Message,
} from "./GroupElements";
import { H1 } from "../../shared/Shared";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import ChatIcon from "@mui/icons-material/Chat";
import axios from "axios";
import { groupReducer, initialState } from "../../utils/groupReducer";
import { initialUserState, userReducer } from "../../utils/userReducer";
import PageTemplate from "../PageTemplate";

const Group = () => {
  const [height, setHeight] = useState(104);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const groupId = window.location.pathname.split("/").slice(-2)[0];
  const userId = window.location.pathname.split("/").slice(-2)[1];
  console.log(groupId);
  const [state, dispatch] = useReducer(groupReducer, initialState);
  const [user, userDispatch] = useReducer(userReducer, initialUserState);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const [eventDate, setEventDate] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/groups/find/" + groupId
        );
        const user = await axios.get(
          "http://localhost:8800/api/users/find/" + userId
        );
        localStorage.setItem("group", JSON.stringify(res.data));
        localStorage.setItem("user", JSON.stringify(user.data));
      } catch (error: any) {
        console.log(error);
        console.log(error.response.data);
      }
    }
    getData();
    if (!eventDate) {
      formatDate();
    }
  }, [groupId]);
  function formatDate() {
    let d = new Date(state.date);
    setEventDate(
      d.toLocaleDateString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
    console.log(eventDate);
  }

  const changeHeight = (e: ChangeEvent) => {
    const text = (e.target as HTMLTextAreaElement).value;
    const lines = text.split("\n");
    const count = lines.length;
    console.log(count);
    if (count > 3 && count < 15) {
      setHeight(count * 26 + 26);
    }
  };

  const sendMessage = async () => {
    let messages = { sender: user.user_name, text: textarea.current?.value };
    dispatch({ type: "add_message", payload: [...state.messages, messages] });
    try {
      const res = await axios.put(
        "http://localhost:8800/api/groups/" + groupId,
        { messages: [...state.messages, messages] }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const generateLink = () => {
    navigator.clipboard.writeText(`http://localhost:3000/${groupId}/step:1`);
    alert("link copied");
  };
  return (
    <PageTemplate>
      <H1>{state.group_name}</H1>
      <About>
        <User>
          <PermIdentityIcon className="icon" />
          <UserInfo>
            <b>{state.user_name}</b>
            <p>organizer</p>
          </UserInfo>
        </User>
        <P>
          <B href={`/${state._id}/${user._id}/wishlist`}>Make a wish list</B>
        </P>
        <P>
          {user.selected_person ? (
            <B href={`/${state._id}/${user._id}/draw`}>My drawn name</B>
          ) : (
            <B href={`/${state._id}/${user._id}/draw`}>Draw a name</B>
          )}
        </P>
        <P>
          <B href={`/${state._id}/edit/add`}>Add a member</B>
        </P>
        <P>
          <B onClick={generateLink}>Send an invitation link</B>
        </P>
        <P>
          <B href={`/${state._id}/drawn`}>View list of drawn names</B>
        </P>
      </About>
      <Section>
        <Title>
          <CardGiftcardIcon />
          Members
        </Title>
        {state.names.map((u: string, index: number) => (
          <P key={index}>
            <B>{u}</B>
          </P>
        ))}
      </Section>
      <Section>
        <Title>
          <CalendarMonthIcon />
          Date of the gift exchange
        </Title>
        <P>{eventDate}</P>
        <B href={`/${state._id}/edit/date`}>Change the event date</B>
      </Section>
      <Section>
        <Title>
          <PaidIcon />
          Budget
        </Title>
        <P>${state.budget}</P>
        <B href={`/${state._id}/edit/budget`}>Change the budget</B>
      </Section>
      <Section>
        <Title>
          <ChatIcon />
          Send a message to the group
        </Title>
        <MessagesContainer>
          <InputContainer>
            <Textarea
              ref={textarea}
              height={height}
              onChange={(e: ChangeEvent) => changeHeight(e)}
              placeholder="Write a message. Your name will be added to the message so everyone will know it's from you"
            />
            <Button onClick={sendMessage}>Send mail</Button>
          </InputContainer>
          {state.messages && (
            <Messages>
              {state.messages.map((message: any, index: number) => (
                <Message key={index}>
                  <P>
                    <B>{message.sender}</B>
                  </P>
                  <P>{message.text}</P>
                </Message>
              ))}
            </Messages>
          )}
        </MessagesContainer>
      </Section>
    </PageTemplate>
  );
};

export default Group;
