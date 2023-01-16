import React from "react";
import Genre from "./Genre";

const Genres = ({ genres }) => {
  return (
    <div>
      <p className="text-white text-center text-lg mb-4 font-bold">Genres</p>
      <div className="flex flex-wrap gap-4 ">
        {genres.map((genreObj) => {
          return <Genre name={genreObj.name} />;
        })}
      </div>
    </div>
  );
};

export default Genres;
