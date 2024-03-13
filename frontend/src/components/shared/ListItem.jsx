import "./listitem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player"; //fix !!!
import { toast } from "react-toastify";

const ListItem = ({ index, item }) => {
  const [isHoverd, setIsHoverd] = useState(false);
  const [content, setContent] = useState({});

  useEffect(() => {
    const getContent = async () => {
      try {
        const res = await axios.get("/contents/find/" + item, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setContent(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getContent();
  }, [item]);

  const addToMyList = async () => {
    try {
      await axios.post(
        `/lists/${item}`,
        {},
        {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        }
      );
      toast.success("added to your list");
      // Optionally handle success, update UI, etc.
    } catch (error) {
      toast.error("already in your list");
      console.log(error);
      // Handle error, display a message, etc.
    }
  };

  return (
    <div
      className="listItem"
      style={{ left: isHoverd && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      <img src={content.img} alt="" />
      {isHoverd && (
        <>
          <ReactPlayer
            className="react-player"
            url={content.trailer}
            playing={true}
            width="100%"
            height="50%"
            muted
          />

          <div className="itemInfo">
            <div className="icons">
              <Link
                className="link"
                to={{ pathname: "/watch" }}
                state={content}
              >
                <PlayArrowIcon className="icon" />
              </Link>

              <AddIcon className="icon" onClick={addToMyList} />
              {/* <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOutlinedIcon className="icon" /> */}
            </div>
            <div className="itemInfoTop">
              <span>{content.duration}</span>
              <span className="limit">{content.limit}</span>
              <span>{content.year}</span>
              <div className="genre">{content.genre}</div>
            </div>
            <div className="desc">{content.description}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
