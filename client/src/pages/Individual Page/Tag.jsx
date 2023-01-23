import React from "react";

const Tag = ({ name, bgClass, type }) => {
  if (type === "cast")
    return (
      <div
        className={`max(64px,_fit-content) border-2 p-1  border-slate-600 rounded-md ${bgClass} flex self-center justify-self-center`}
      >
        <p className="text-center	text-white whitespace-nowrap text-[7px] lg:text-sm font-bold">
          {name}
        </p>
      </div>
    );
  return (
    <div
      className={`max(64px,_fit-content) border-2 p-2  border-slate-600 rounded-md ${bgClass} flex self-center justify-self-center`}
    >
      <p className="text-center	text-white whitespace-nowrap text-[9px] font-normal">
        {name}
      </p>
    </div>
  );
};

export default Tag;
