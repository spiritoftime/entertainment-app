import React from "react";

const Label = ({ category, type }) => {
  // category is popular, type is movie
  return (
    <div className="px-4 pt-4 items-center flex justify-between">
      <div className="flex gap-2 md:gap-4 lg:gap-6 justify-between">
        <p className="text-white font-bold">{category}</p>
        <div className="flex items-center border-2 px-3 rounded-lg border-solid">
          <p className=" text-xs text-white font-bold  border-[white] ">
            {type}
          </p>
        </div>
      </div>
      <p className="text-xs text-navTint">SEE MORE</p>
    </div>
  );
};

export default Label;