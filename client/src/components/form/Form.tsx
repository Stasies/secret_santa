import React, {
  ChangeEvent,
  FC,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { groupReducer, initialState } from "../../utils/groupReducer";
import CloseIcon from "@mui/icons-material/Close";
import {
  Container,
  Form,
  Button,
  Section,
  SectionHeader,
  Number,
  Title,
  FormSection,
  Label,
  InputContainer,
  Input,
  Message,
  Textarea,
} from "./FormElements";
import axios from "axios";
import { ButtonBaseActions } from "@mui/material";
import { userReducer, initialUserState } from "../../utils/userReducer";
import { useNavigate } from "react-router-dom";

const FormComponent: FC = () => {
  const [state, dispatch] = useReducer(groupReducer, initialState);
  const navigate = useNavigate();
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [height, setHeight] = useState(80);
  const [openCategory, setOpenCategory] = useState("names");
  const [errorMessage, setErrorMessage] = useState("");
  const [members, setMembers] = useState([
    "Enter member 1",
    "Enter member 2",
    "Enter member 3",
  ]);
  const textarea = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (members.length >= 3 && state.user_name.length > 1) {
      setErrorMessage("");
    }
  }, [members.length]);

  const changeHeight = (e: ChangeEvent) => {
    const text = (e.target as HTMLTextAreaElement).value;
    const lines = text.split("\n");
    const count = lines.length;
    console.log(count);
    if (count > 3 && count < 15) {
      setHeight(count * 20 + 20);
    }
    dispatch({
      type: "fill_form",
      payload: { sender: members[0], text: text },
    });
    console.log(state);
  };
  const fillForm = (e: ChangeEvent) => {
    let input = (e.target as HTMLInputElement).value.trim();
    dispatch({
      type: "fill_form",
      payload: { name: (e.target as HTMLInputElement).name, value: input },
    });
    console.log(state);
    setErrorMessage("");
  };
  const addMembers = (e: ChangeEvent, index: number) => {
    let input = (e.target as HTMLInputElement).value.trim();
    if (index === members.length - 1) {
      setMembers((prevState) => [...prevState, ``]);
    }
  };
  const newName = (e: ChangeEvent, index: number) => {
    let input = (e.target as HTMLInputElement).value.trim();
    members[0] = state.user_name;
    members[index] = input;
    let names = [...members];
    names.pop();
    dispatch({
      type: "add_members",
      payload: names,
    });
    if (members.length > 3) {
      setErrorMessage("");
    }
    console.log(names);
  };
  const nextStep = () => {
    if (members.length > 3 && state.user_name) {
      setOpenCategory("details");
    } else if (members.length <= 3) {
      setErrorMessage("members");
    } else if (!state.user_name) {
      setErrorMessage("user");
    }
  };
  const submitGroup = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(state);
    if (!state.group_name) {
      setErrorMessage("group");
    } else if (!state.email || state.email.indexOf("@") === -1) {
      setErrorMessage("email");
    } else {
      try {
        const res = await axios.post("http://localhost:8800/api/groups", state);
        if (res) {
          submitUser(res.data._id);
        }
      } catch (error: any) {
        console.log(error);
        console.log(error.response.data);
      }
    }
  };
  const submitUser = async (id: string) => {
    console.log(id);
    try {
      const user = await axios.post("http://localhost:8800/api/auth/register", {
        user_name: state.user_name,
        email: state.email,
        groupId: id,
      });
      userDispatch({
        type: "add_user",
        payload: user.data,
      });
      navigate(`/${user.data.groupId}/${user.data._id}`);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  return (
    <Container>
      <Section>
        <SectionHeader onClick={() => setOpenCategory("names")}>
          <Number className={openCategory === "names" ? "active" : ""}>
            1
          </Number>
          <Title className={openCategory === "names" ? "active" : ""}>
            Enter names
          </Title>
        </SectionHeader>
        {openCategory === "names" && (
          <Form className="active">
            <FormSection>
              <Label>Your name</Label>
              <InputContainer>
                <Input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  onChange={(e) => fillForm(e)}
                  className={errorMessage == "user" ? "error" : ""}
                />
              </InputContainer>
              {errorMessage === "user" && <Message>Fill in your name.</Message>}
            </FormSection>
            <FormSection>
              <Label>Draw names with</Label>

              {members.map((member, index) => (
                <>
                  <InputContainer key={index}>
                    <Input
                      disabled={index == 0}
                      type="text"
                      name="names"
                      placeholder={
                        index == 0
                          ? state.user_name || `Enter member 1`
                          : `Enter member ${index + 1}`
                      }
                      onFocus={(e) => addMembers(e, index)}
                      onBlur={(e) => newName(e, index)}
                      className={
                        index === members.length - 1 &&
                        errorMessage == "members"
                          ? "error"
                          : ""
                      }
                    />
                    <CloseIcon className="icon" />
                  </InputContainer>
                  {errorMessage === "members" &&
                    index === members.length - 1 && (
                      <Message key={index}>
                        There should be at least 3 members in the group to draw
                        names.
                      </Message>
                    )}
                </>
              ))}
            </FormSection>
            <Button onClick={nextStep}>Next step</Button>
          </Form>
        )}
      </Section>
      <Section>
        <SectionHeader onClick={nextStep}>
          <Number className={openCategory === "details" ? "active" : ""}>
            2
          </Number>
          <Title className={openCategory === "details" ? "active" : ""}>
            Set up gift exchange details
          </Title>
        </SectionHeader>
        {openCategory === "details" && (
          <Form>
            <FormSection>
              <Label>Group name</Label>
              <InputContainer>
                <Input
                  type="text"
                  name="group_name"
                  placeholder="Enter a title for the gift exchange"
                  onChange={(e) => fillForm(e)}
                />
              </InputContainer>
              {errorMessage === "group" && (
                <Message>Enter a group name for the gift exchange.</Message>
              )}
            </FormSection>
            <FormSection>
              <Label>Date of gift exchange</Label>
              <InputContainer>
                <Input
                  placeholder="Select date"
                  name="date"
                  type="date"
                  onChange={(e) => fillForm(e)}
                />
              </InputContainer>
            </FormSection>
            <FormSection>
              <Label>Budget</Label>
              <InputContainer>
                <Input
                  name="budget"
                  type="number"
                  placeholder="Select budget"
                  onChange={(e) => fillForm(e)}
                />
              </InputContainer>
            </FormSection>
            <FormSection>
              <Label>Your email</Label>
              <InputContainer>
                <Input
                  name="email"
                  type="email"
                  placeholder="Fill in your email address"
                  onChange={(e) => fillForm(e)}
                ></Input>
              </InputContainer>
              {errorMessage === "email" && (
                <Message>Enter a correct email.</Message>
              )}
            </FormSection>
            <FormSection>
              <Label>Invitation message</Label>
              <InputContainer>
                <Textarea
                  onChange={(e: ChangeEvent) => changeHeight(e)}
                  ref={textarea}
                  height={height}
                />
              </InputContainer>
            </FormSection>
            <Button onClick={(e: any) => submitGroup(e)}>Confirm</Button>
          </Form>
        )}
      </Section>
    </Container>
  );
};

export default FormComponent;
