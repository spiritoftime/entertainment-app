import React from "react";

const Genre = ({ name }) => {
  return (
    <div>
      <p className="border-2 text-xs font-normal rounded-lg w-fit p-2">
        {name}
      </p>
    </div>
  );
};

export default Genre;
