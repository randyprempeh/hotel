import React from "react";

import "./style.css";

const SearchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-search"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const SearchBar = props => {
  let sendSearchTerm = searchString => {
    props.searchFunction(this.inputSearch.value);
  };
  return (
    <div className="search">
      <div className="search-bar">
        <input
          onChange={sendSearchTerm}
          type="text"
          placeholder={props.placeholder}
          ref={inputSearch => (this.inputSearch = inputSearch)}
        />
        <div className="Search-icon">{SearchIcon} </div>{" "}
        {/* change one step back */}
      </div>
    </div>
  );
};
