// import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./searchinput.scss";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ onChange }) => {
  // const [search, setSearch] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (search && search.length === 1) {
  //     navigate("/search");
  //   }
  // }, [navigate, search]);

  // const onHandleChange = (e) => {
  //   onChange(e);
  //   if (e.target.length === 1) {
  //     navigate("/search");
  //   }
  // };

  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={() => navigate("/search")}
      />
    </div>
  );
};

export default SearchInput;
