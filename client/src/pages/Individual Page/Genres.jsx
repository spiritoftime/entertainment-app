import React from "react";
import Genre from "./Genre";

const Genres = ({ genres }) => {
  return (
    <div>
      <p className="text-white text-center text-lg font-bold">Genres</p>
      <div className="grid">
        {genres.map((genreObj) => {
          return <Genre name={genreObj.name} />;
        })}
      </div>
    </div>
  );
};

export default Genres;
