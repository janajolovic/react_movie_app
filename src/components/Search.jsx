import React, { useState, useContext } from "react";
import MovieContext from "../MovieContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  const [value, setValue] = useState("");
  const { fetchPopular, fetchSearch } = useContext(MovieContext);

  const onKeyUp = (event) => {
    if (event.key === "Enter" && value !== "") {
        const query = value.trim();
        if (query === "") {
          fetchPopular();
        } else {
          fetchSearch(query);
        }
        setValue("");
      }
  };

  return (
    <div className="search-movies">
      <label htmlFor="search">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" onClick={() => navigate("/")}/>
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search for movies"
        onKeyDown={(e) => onKeyUp(e)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Search;