import React from "react";

const Genre = ({ name }) => {
  return (
    <div className="w-16 border-2 p-2  border-slate-600 rounded-md bg-sky-700 justify-self-center">
      <p className="text-center	text-white  text-[9px] font-normal">{name}</p>
    </div>
  );
};

export default Genre;
