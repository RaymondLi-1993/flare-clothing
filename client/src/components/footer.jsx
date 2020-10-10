import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-16 items-center justify-center flex flex-col relative bottom-0 bg-black">
      <div className="text-white text-xs">
        All rights reserved // © 2020 Flare-Clothing by Raymond Li
      </div>
      <div className="text-white text-xs">
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </div>
      <div className="text-white text-xs">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/kiranshastry"
          title="Kiranshastry"
        >
          Kiranshastry
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
