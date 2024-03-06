import "./watchpage.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ReactPlayer from "react-player";
import { Link, useLocation } from "react-router-dom";

const WatchPage = () => {
  const location = useLocation();
  const content = location.state;

  return (
    <div className="watchpage">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlinedIcon />
          Home
        </div>
      </Link>
      <div className="video">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          url={content.movie}
        ></ReactPlayer>
      </div>
    </div>
  );
};

export default WatchPage;
