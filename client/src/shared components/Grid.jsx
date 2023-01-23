import React from "react";

const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-2  lg:grid-cols-4  gap-3.5 lg:gap-10 p-4 md:grid-cols-3">
      {children}
    </div>
  );
};

export default Grid;
