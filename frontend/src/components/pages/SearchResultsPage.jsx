import { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import "./searchresultspage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import List from "../shared/List";

const SearchResultsPage = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchValue && searchValue.length === 1) {
      navigate("/search");
    }
  }, [navigate, searchValue]);

  useEffect(() => {
    const getSearchResult = async () => {
      try {
        const res = await axios.get(`/contents/title/${searchValue}`, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setSearchResult(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSearchResult();
  }, [searchValue]);

  return (
    <div className="searchResultsPage">
      <Navbar
        className="navbar"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />

      <List contentList={searchResult} listTitle={"Search Results"} />
    </div>
  );
};

export default SearchResultsPage;
