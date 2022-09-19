import axios from "axios";
import { useReducer, useEffect, useState, useRef } from "react";
import { Container, Wrapper, H1, P, B } from "../../shared/Shared";
import { Users, User, UserInfo, Name, Email, H3 } from "./DrawnNamesElements";
import { groupReducer, initialState } from "../../utils/groupReducer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { initialUserState, userReducer } from "../../utils/userReducer";

const DrawnNames = () => {
  const [state, dispatch] = useReducer(groupReducer, initialState);
  const [user] = useReducer(userReducer, initialUserState);
  const [registeredUsers, setRegisteredUsers] = useState<any | null>([]);

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
        if (registeredUsers.length < 1) {
          setRegisteredUsers(array);
        }
      } catch (error: any) {
        console.log(error.response.data);
      }
    }
    getUserInfo();
  }, [registeredUsers.length, state._id]);
  return (
    <Container>
      <Wrapper>
        <H1>View list of drawn names</H1>
        <Users>
          <H3>Confirmed users</H3>
          {registeredUsers.map((user: any, index: number) => (
            <User key={index}>
              <UserInfo>
                <Name>{user.user_name}</Name>
                <Email>{user.email}</Email>
              </UserInfo>
              {user.selected_person ? (
                <CheckCircleIcon className="drawn" />
              ) : (
                <CancelIcon className="none" />
              )}
            </User>
          ))}
        </Users>
        <Users>
          <H3>Not confirmed</H3>
          {state.names.map((name: string, index: number) => (
            <>
              {!registeredUsers.some(
                (user: any) => user.user_name === name
              ) && (
                <User key={index}>
                  <Name>{name}</Name>
                </User>
              )}
            </>
          ))}
        </Users>
        <P>
          <B href={`/${state._id}/${user._id}`}>Visit the group page</B>
        </P>
      </Wrapper>
    </Container>
  );
};

export default DrawnNames;
