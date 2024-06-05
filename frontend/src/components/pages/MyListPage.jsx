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

export default MyListPage;
