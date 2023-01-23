import React from "react";

const SearchBar = () => {
  return (
    <div className="items-center w-full flex gap-2 pt-4 px-4">
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="white"
      >
        <circle cx="24" cy="24" r="16" />
        <line x1="56" y1="56" x2="35.31" y2="35.31" />
      </svg>
      <input
        className="text-white w-full focus:outline-none focus:bg-darkBlue bg-darkBlue"
        placeholder="Search"
      />
      <button className="bg-rose-600 p-2 rounded-md">Search</button>
    </div>
  );
};

export default SearchBar;
