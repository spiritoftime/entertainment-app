import React from "react";

const Detail = ({ title, contentType = "", content }) => {
  let languageNames = new Intl.DisplayNames(["en"], { type: "language" });
  return (
    <div className="flex flex-col gap-3">
      <p className="text-gray-500 font-normal">{title}</p>
      <p className="text-white text-center font-bold">
        {contentType === "language" ? languageNames.of("en") : content}
      </p>
    </div>
  );
};

export default Detail;
