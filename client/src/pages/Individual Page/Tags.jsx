import React from "react";
import Tag from "./Tag";

const Tags = ({ detail, categoryName }) => {
  if (categoryName === "Genres")
    return (
      <div>
        <p className="text-white text-center text-lg mb-4 font-bold">
          {categoryName}
        </p>
        <div className="flex flex-wrap gap-4 ">
          {detail.map((genreObj) => {
            return <Tag bgClass="bg-sky-700" name={genreObj.name} />;
          })}
        </div>
      </div>
    );
  else if (categoryName === "Casts")
    return (
      <div>
        <p className="text-white text-center text-lg mb-4 font-bold">
          {categoryName}
        </p>
        <div className="flex flex-wrap gap-2 ">
          {detail.map((castObj) => {
            return (
              <Tag type="cast" bgClass="bg-gray-700" name={castObj.name} />
            );
          })}
        </div>
      </div>
    );
};

export default Tags;
