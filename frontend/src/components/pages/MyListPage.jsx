import "./mylistpage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../shared/Navbar";

import List from "../shared/List";

const MyListPage = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const res = await axios.get("/lists/myList", {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setUserList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserList();
  }, []);

  return (
    <>
      <div className="my-list-page">
        <Navbar className="navbar" />

        <List contentList={userList} listTitle={"My List"} />
      </div>
    </>
  );
};
{
  /* <div className="list">
  <span className="listTitle">{list.title}</span>
  <div className="wrapper">
    <ArrowBackIosNewOutlinedIcon
      className="sliderArrow left"
      onClick={() => handleClick("left")}
      style={{ display: !isMoved && "none" }}
    />
    <div className="container" ref={listRef}>
      {list.content.map((item, i) => (
        <ListItem key={i} index={i} item={item} />
      ))}
    </div>
    <ArrowForwardIosOutlinedIcon
      className="sliderArrow right"
      onClick={() => handleClick("right")}
    />
  </div>
</div>; */
}

export default MyListPage;
