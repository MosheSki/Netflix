import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/contents/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxMDU4NzFjYjFmNjVjMDYwNTQwMzgiLCJ1c2VybmFtZSI6Im1vc2hlIiwiZW1haWwiOiJtb3NoZUBtb3NoZS5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MDkyOTI1NzcsImV4cCI6MTcwOTg5NzM3N30.r61Wfq331R0HFyhO9-SX6il0nYJ8x1bgNLVWfmhnWTM",
            // JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          {/* <span>{type === "movies" ? "Movies" : "Series"}</span> */}
          {/* <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="fantasy">Fantasy</option>
            <option value="detective">Detective</option>
            <option value="horror">Horror</option>
            <option value="animation">Animation</option>
          </select> */}
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.description}</span>
        <div className="buttons">
          <Link className="link" to={{ pathname: "/watch" }} state={content}>
            <button className="play">
              <PlayArrowIcon />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
