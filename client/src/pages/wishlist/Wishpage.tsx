import { useReducer, useState, useEffect } from "react";
import { initialUserState, userReducer } from "../../utils/userReducer";
import Wishlist from "../../components/wishlist/Wishlist";
import { groupReducer, initialState } from "../../utils/groupReducer";
import { H1, P, B } from "../../shared/Shared";
import WishPageTemplate from "../WishpageTemplate";
import GiftFinder from "../../components/giftFinder/GiftFinder";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import UserIcon from "../../components/userIcon/UserIcon";
import { Container, Wrapper, Main } from "../../shared/Shared";
import axios from "axios";

const Wishpage = () => {
  const [user, dispatch] = useReducer(userReducer, initialUserState);
  const [state] = useReducer(groupReducer, initialState);
  const [open, setOpen] = useState(false);
  const [wishlist, setWishlist] = useState(user.wish_list);
  const uid = window.location.pathname.split("/").slice(-2)[0].toString();
  // useEffect(() => {
  //   setWishlist(user.wish_list);
  // }, [user.wish_list]);

  const addToWishlist = (
    e: React.MouseEvent<HTMLButtonElement>,
    gift: {
      title: string;
      img: string;
      price: string;
      selectedBy: string[];
    },
    id: string
  ) => {
    let newList = [
      ...user.wish_list,
      { title: gift.title, img: gift.img, price: gift.price },
    ];
    dispatch({
      type: "add_wishes",
      payload: newList,
    });

    sendData({ title: gift.title, img: gift.img, price: gift.price });

    async function addSelectedByUser() {
      try {
        const res = await axios.put(`http://localhost:8800/api/gifts/` + id, {
          selectedBy: gift.selectedBy,
        });
      } catch (error) {}
    }
    addSelectedByUser();
  };

  const deleteItemFromList = (index: number) => {
    user.wish_list.splice(index, 1);
    dispatch({ type: "add_wishes", payload: user.wish_list });
    async function deleteFromDb() {
      try {
        const res = await axios.put(
          "http://localhost:8800/api/users/" + user._id,
          {
            wish_list: user.wish_list,
          }
        );
      } catch (error: any) {
        console.log(error.response.data);
      }
    }
    deleteFromDb();
  };

  const sendData = async (gift: object) => {
    try {
      const res = await axios.put(
        "http://localhost:8800/api/users/" + user._id,
        {
          wish_list: [...user.wish_list, gift],
        }
      );
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <Container>
      {open && <Menu setOpen={setOpen} />}
      <Header>
        <UserIcon setOpen={setOpen} />
      </Header>
      <Wrapper>
        <Main>
          <H1>Wishlist</H1>
          <Wishlist
            wishlist={wishlist}
            setWishlist={setWishlist}
            deleteItemFromList={deleteItemFromList}
            sendData={sendData}
          />
          <P>
            <B href={`/${state._id}/${user._id}`}>Visit the group page</B>
          </P>
        </Main>
        <GiftFinder addToWishlist={addToWishlist} />
      </Wrapper>
    </Container>
  );
};

export default Wishpage;
