import { useReducer, useState, useRef, useEffect } from "react";
import { initialUserState, userReducer } from "../../utils/userReducer";
import {
  Container,
  Header,
  H3,
  Main,
  P,
  List,
  Wish,
  IconContainer,
  Input,
} from "./WishlistElements";
import CreateIcon from "@mui/icons-material/Create";
import { clickOptions } from "@testing-library/user-event/dist/click";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
// declare module "axios" {
//   export interface AxiosRequestConfig {
//     categories: string;
//     user_name: string;
//     group: any;
//   }
// }

const Wishlist = () => {
  const [user, userDispatch] = useReducer(userReducer, initialUserState);
  const [selectedPerson, setSelectedPerson] = useState<any>({});
  const input = useRef<HTMLInputElement>(null);
  const [inputWidth, setInputWidth] = useState("48px");
  const uid = window.location.pathname.split("/").slice(-2)[0].toString();
  const category = window.location.pathname.split("/").slice(-1).toString();
  const icon = useRef<HTMLButtonElement>(null);
  const showInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setInputWidth("calc(100% - 28px)");
    (e.target as HTMLButtonElement).style.display = "none";
  };
  useEffect(() => {
    async function fetchUser() {
      if (category === "draw") {
        try {
          const res = await axios.get(
            "http://localhost:8800/api/users/" + user.selected_person
          );
          console.log(res);
          if (!selectedPerson) {
            setSelectedPerson(res.data);
          }
        } catch (error: any) {
          console.log(error.response.data);
        }
      }
    }
    fetchUser();
  }, [user._id, category, user.selected_person, selectedPerson]);

  const createWish = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      userDispatch({
        type: "add_wishes",
        payload: [...user.wish_list, input.current?.value],
      });
      sendData();
      setInputWidth("48px");
      setTimeout(() => {
        (icon.current as HTMLButtonElement).style.display = "initial";
      }, 300);
    }
  };
  const sendData = async () => {
    try {
      const res = await axios.put(
        "http://localhost:8800/api/users/" + user._id,
        {
          wish_list: [...user.wish_list, input.current?.value],
        }
      );
      (input.current as HTMLInputElement).value = "";
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  console.log(user);

  return (
    <Container>
      <Header>
        {category === "wishlist" ? (
          <H3>Your wishlist</H3>
        ) : (
          <H3>Wish list for {user.selected_person}</H3>
        )}
      </Header>
      <Main>
        {category == "wishlist" && user.wish_list.length < 1 && (
          <P>Currently no wishlist</P>
        )}
        <List>
          {category == "wishlist" &&
            user.wish_list.map((wish: string, index: number) => (
              <Wish key={index}>
                {wish}
                <CloseIcon className="icon" />
              </Wish>
            ))}
        </List>
        {category === "draw" && !selectedPerson.wish_list && (
          <P>Currently no wishlist</P>
        )}
        <List>
          {category === "draw" &&
            selectedPerson.wish_list?.map((wish: string, index: number) => (
              <Wish key={index}>
                {wish}
                <CloseIcon className="icon" />
              </Wish>
            ))}
        </List>
        {category === "wishlist" && (
          <>
            <IconContainer
              ref={icon}
              type="button"
              onClick={(e) => showInput(e)}
            >
              <CreateIcon className="icon" />
            </IconContainer>
            <Input
              ref={input}
              onKeyDown={(e) => createWish(e)}
              width={inputWidth}
            />
          </>
        )}
      </Main>
    </Container>
  );
};

export default Wishlist;
