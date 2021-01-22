import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  console.log(date);

  return (
    <div className="w-full h-16 items-center justify-center flex flex-col relative bottom-0 bg-black">
      <div className="text-white text-xs">
        {`All rights reserved // © ${date} Flare-Clothing by Raymond Li`}
      </div>
    </div>
  );
};

export default Footer;
