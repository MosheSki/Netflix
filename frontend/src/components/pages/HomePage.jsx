import { useEffect, useState } from "react";
import Featured from "../shared/Featured";
import List from "../shared/List";
import Navbar from "../shared/Navbar";
import "./homepage.scss";
import axios from "axios";

const HomePage = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
          }
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="homepage">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list, index) => (
        <List key={index} list={list} />
      ))}
    </div>
  );
};

export default HomePage;
