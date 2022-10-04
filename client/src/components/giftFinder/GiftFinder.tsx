import React, { useEffect, useReducer, useState, useRef } from "react";
import {
  Container,
  Search,
  SearchInput,
  SearchButton,
  Navigation,
  NavigationItem,
  Wrapper,
  Item,
  Section,
  Menu,
  MenuItem,
  Img,
  AddButton,
  About,
  Title,
  Price,
} from "./GiftFinderElements";
import SearchIcon from "@mui/icons-material/Search";
import { H1 } from "../../shared/Shared";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import axios, { AxiosRequestConfig } from "axios";
import { initialUserState, userReducer } from "../../utils/userReducer";

// declare module "axios" {
//   export interface AxiosRequestConfig {
//     categories: string;
//   }
// }
declare module "axios" {
  export interface AxiosRequestConfig {
    gender: any;
  }
}
const GiftFinder = () => {
  const searchFilters = [
    {
      type: "category",
      contents: ["clothing", "food", "beauty", "toys", "books"],
    },
    {
      type: "age",
      contents: ["0-12", "12-18", "18-25", "25-45"],
    },
  ];

  const filters = [{ type: "", value: "" }];
  const [openMenu, setOpenMenu] = useState<string | boolean>();
  const [cat, setCat] = useState([{ type: "", value: "" }]);
  const [gifts, setGifts] = useState([
    { title: "", price: "", img: "", _id: "", selectedBy: [""] },
  ]);
  const [filteredGifts, setFilteredGifts] = useState(gifts);
  const input = useRef<any | null>(null);
  const [user, dispatch] = useReducer(userReducer, initialUserState);

  const selectFilter = (
    e: React.MouseEvent<HTMLDivElement>,
    type: string,
    index: number,
    value: string
  ) => {
    e.stopPropagation();
    cat[index] = { type: type, value: value };
    console.log(cat[0].type);
    setOpenMenu(false);
    getGiftIdeas();
  };
  useEffect(() => {
    async function getAllGifts() {
      try {
        const res = await axios.get(`http://localhost:8800/api/gifts`);
        if (!gifts[1]) {
          setGifts(res.data);
          setFilteredGifts(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAllGifts();
  }, []);

  const getGiftIdeas = async () => {
    let age = cat[1] ? `age=${cat[1].value}` : "";
    let category = cat[0].value.length > 1 ? `&category=${cat[0].value}` : "";
    let query = age + category;
    console.log(`http://localhost:8800/api/gifts/filtered?${query}`);
    try {
      const res = await axios.get(
        `http://localhost:8800/api/gifts/filtered?${query}`
      );
      console.log(res.data);
      setGifts(res.data);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  const searchGift = () => {
    let giftlist = [];
    if (input.current.value) {
      giftlist = gifts.filter((item: any) => {
        if (item.title.includes(input.current.value)) return item;
      });
      setFilteredGifts(giftlist);
    } else {
      setFilteredGifts(gifts);
    }
    console.log(gifts);
  };
  const createGift = async () => {
    try {
      const res = await axios.post("http://localhost:8800/api/gifts/", {
        title: "sour candy",
        price: "$3",
        img: "https://firebasestorage.googleapis.com/v0/b/images-ca2c6.appspot.com/o/food4.jpg?alt=media&token=ebbe8daa-7eb0-411b-ad17-be9e8d6f3057",
        gender: "women",
        age: "12-18",
        category: "food",
        desc: "sour candy",
        selectedBy: [""],
      });
      console.log(res);
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };
  const addToWishlist = async (
    e: React.MouseEvent<HTMLButtonElement>,
    gift: {
      title: string;
      img: string;
      price: string;
      selectedBy: string[];
    },
    id: string
  ) => {
    e.stopPropagation();
    dispatch({
      type: "add_wishes",
      payload: [
        ...user.wish_list,
        { title: gift.title, img: gift.img, price: gift.price },
      ],
    });
    try {
      const res = await axios.put(
        "http://localhost:8800/api/users/" + user._id,
        {
          wish_list: [
            ...user.wish_list,
            { title: gift.title, img: gift.img, price: gift.price },
          ],
        }
      );
      const res2 = await axios.put(`http://localhost:8800/api/gifts/` + id, {
        selectedBy: [...gift.selectedBy, user._id],
      });
      console.log(res2);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  return (
    <Container>
      <H1>Gift Finder</H1>
      <Search>
        <SearchInput
          type="text"
          placeholder="Search in gift finder"
          ref={input}
          onChange={searchGift}
        />
        <SearchButton onClick={searchGift}>
          <SearchIcon className="icon" />
        </SearchButton>
      </Search>
      <Navigation>
        {searchFilters.map((filter, index: number) => (
          <Section
            className={cat[index]?.value && "selected"}
            key={index}
            onClick={() => setOpenMenu(filter.type)}
          >
            <NavigationItem>
              {cat[index]?.type === filter.type
                ? cat[index].value
                : filter.type}
              <ArrowDropDownIcon className="icon" />
            </NavigationItem>
            {openMenu === filter.type && (
              <Menu>
                {filter.contents.map((c: string, i: number) => (
                  <MenuItem
                    onClick={(e) => selectFilter(e, filter.type, index, c)}
                    key={i}
                  >
                    {c}
                  </MenuItem>
                ))}
              </Menu>
            )}
          </Section>
        ))}
      </Navigation>
      <Wrapper>
        {filteredGifts?.map((gift, index: number) => (
          <Item key={index}>
            <Img src={gift.img} />
            <About>
              <AddButton onClick={(e) => addToWishlist(e, gift, gift._id)}>
                <FavoriteIcon
                  className="favIcon"
                  style={{
                    color: gift.selectedBy.includes(user._id)
                      ? "#6AA4FB"
                      : "lightgrey",
                  }}
                />
              </AddButton>
              <Title>{gift.title}</Title>
              <Price>{gift.price}</Price>
            </About>
          </Item>
        ))}
      </Wrapper>
    </Container>
  );
};

export default GiftFinder;
