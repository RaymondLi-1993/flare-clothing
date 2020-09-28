import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ content, routeName, title }) => {
  return (
    <Link
      to={`category/${routeName}`}
      className=" w-full h-full bg-cover bg-no-repeat bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${content})` }}
    >
      <span>{title}</span>
    </Link>
  );
};

export default Slide;
