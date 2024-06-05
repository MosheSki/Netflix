import "./searchinput.scss";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ onChange }) => {
  const navigate = useNavigate();

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="What would you like to watch today?"
        onChange={onChange}
        onKeyDown={() => navigate("/search")}
      />
    </div>
  );
};

export default SearchInput;
