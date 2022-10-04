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
  Img,
  Title,
} from "./WishlistElements";
import CreateIcon from "@mui/icons-material/Create";
import { clickOptions } from "@testing-library/user-event/dist/click";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const Wishlist = ({
  wishlist,
  setWishlist,
  deleteItemFromList,
  sendData,
}: any) => {
  const [user, userDispatch] = useReducer(userReducer, initialUserState);
  const [selectedPerson, setSelectedPerson] = useState<any>({});
  const input = useRef<HTMLInputElement>(null);
  const [inputWidth, setInputWidth] = useState("48px");
  const uid = window.location.pathname.split("/").slice(-2)[0].toString();
  const category = window.location.pathname.split("/").slice(-1).toString();
  const icon = useRef<HTMLButtonElement>(null);
  const showInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setInputWidth("100%");
    (e.target as HTMLButtonElement).style.display = "none";
  };

  useEffect(() => {
    async function getWishlist() {
      if (category === "draw") {
        try {
          const res = await axios.get(
            "http://localhost:8800/api/users/" + user.selected_person
          );
          console.log(res.data.wish_list);
          setSelectedPerson(res.data);
        } catch (error: any) {
          console.log(error.response.data);
        }
      } else if (category === "wishlist") {
        setWishlist(user.wish_list);
        console.log(user.wish_list);
      }
    }
    getWishlist();
  }, [user, category]);

  const createWish = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      userDispatch({
        type: "add_wishes",
        payload: [...user.wish_list, { title: input.current?.value }],
      });
      let gift = { title: input.current?.value };
      sendData(gift);
      (input.current as HTMLInputElement).value = "";
      setInputWidth("48px");
      setTimeout(() => {
        (icon.current as HTMLButtonElement).style.display = "initial";
      }, 300);
    }
  };

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
        {/* {category == "wishlist" && wishlist?.length < 2 && (
          <P>Currently no wishlist</P>
        )} */}
        {category == "wishlist" && (
          <List>
            {wishlist.map((wish: any, index: number) => (
              <Wish key={index}>
                {wish.img?.length > 1 && <Img src={wish.img} />}
                <Title>{wish.title}</Title>
                <CloseIcon
                  className="icon"
                  onClick={() => deleteItemFromList(index)}
                />
              </Wish>
            ))}
          </List>
        )}
        {/* {category === "draw" && !selectedPerson?.wish_list && (
          <P>Currently no wishlist</P>
        )} */}
        {category === "draw" && (
          <List>
            {selectedPerson.wish_list?.map((wish: any, index: number) => (
              <Wish key={index}>
                {wish.img?.length > 1 && <Img src={wish.img} />}
                <Title>{wish.title}</Title>
              </Wish>
            ))}
          </List>
        )}
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
