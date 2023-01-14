import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(faStar);
const Stars = ({ vote }) => {
  let stars = [];
  for (let i = 0; i < vote; i++)
    stars.push(
      <FontAwesomeIcon style={{ color: "yellow" }} icon="fa-solid fa-star" />
    );
  for (let i = 0; i < 5 - vote; i++)
    stars.push(
      <FontAwesomeIcon style={{ color: "#FFF" }} icon="fa-solid fa-star" />
    );
  return <div className="flex justify-center">{stars.map((star) => star)}</div>;
};

export default Stars;
