import "./watchpage.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ReactPlayer from "react-player";

const WatchPage = () => {
  return (
    <div className="watchpage">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <div className="video">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          url="https://youtu.be/YoHD9XEInc0"
        ></ReactPlayer>
      </div>
    </div>
  );
};

export default WatchPage;
