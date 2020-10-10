import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ content, routeName }) => {
  return (
    <Link
      to={`category/${routeName}`}
      className=" w-full h-full bg-cover bg-no-repeat bg-center flex items-center justify-center transform transition duration-1000 hover:scale-125"
      style={{ backgroundImage: `url(${content})` }}
    ></Link>
  );
};

export default Slide;
