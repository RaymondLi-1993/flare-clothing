import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Payments from "./payment";

const Header = () => {
  const user = useSelector(state => state.user);

  const renderButtons = () => {
    switch (user) {
      case null:
        return;
      case false:
        return (
          <li>
            <a
              className="text-white w-2/12 h-16 mr-6 p-6 cursor-pointer transform hover:scale-125"
              href="/auth/google"
            >
              Login with Google
            </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li
            key="2"
            className="text-white w-2/12 h-16 mr-6 p-6 cursor-pointer transform hover:scale-125"
          >
            credits: {user.credits}
          </li>,
          <li key="3">
            <a
              className="text-white w-2/12 h-16 mr-6 p-6 cursor-pointer transform hover:scale-125"
              href="api/logout"
            >
              Log out
            </a>
          </li>,
        ];
    }
  };

  return (
    <>
      <div className="bg-black h-20 w-full flex  flex-row justify-around">
        <div className="w-1/12 h-16 overflow-hidden">
          <Link to="/">
            <svg
              className="w-full h-16 m-2 p-2 cursor-pointer"
              viewBox="-80 0 512 512.001"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M284.906 132.957a15.006 15.006 0 00-16.867-6.691 15.005 15.005 0 00-10.973 14.449c0 18.308-14.894 33.2-33.199 33.2-18.304 0-33.199-14.892-33.199-33.2V15a14.997 14.997 0 00-9.262-13.855 14.984 14.984 0 00-16.343 3.25c-1.688 1.683-41.684 41.918-82.208 102.703-23.898 35.843-42.968 71.398-56.68 105.675C8.81 256.2 0 297.77 0 336.336 0 433.196 78.805 512 175.668 512c96.86 0 175.664-78.805 175.664-175.664.004-62.004-22.348-130.43-66.426-203.379zm0 0"
                fill="#ff9f00"
              />
              <path
                d="M284.906 132.957a15.006 15.006 0 00-16.867-6.691 15.005 15.005 0 00-10.973 14.449c0 18.308-14.894 33.2-33.199 33.2-18.304 0-33.199-14.892-33.199-33.2V15a14.997 14.997 0 00-9.262-13.855 14.883 14.883 0 00-5.738-1.137V512c96.863 0 175.668-78.805 175.668-175.668 0-62-22.352-130.426-66.43-203.375zm0 0"
                fill="#ff641a"
              />
            </svg>
          </Link>
        </div>
        <div className="w-8/12 h-20 m-0 p-0">
          <ul className="flex justify-end items-center flex-row w-full">
            {renderButtons()}
            <Link
              to="/menu"
              className="text-white w-2/12 h-16 mr-6 p-6 cursor-pointer transform hover:scale-125"
            >
              Browse
            </Link>
            <Link
              to="/contact"
              className="text-white h-16 mr-6 p-6 cursor-pointer transform hover:scale-125"
            >
              Contact
            </Link>
          </ul>
        </div>
        <div className="w-1/12 h-16 mr-32 overflow-hidden relative">
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-full h-16 m-2 p-2 cursor-pointer"
            >
              <path
                d="M461 512h-90.004a7.5 7.5 0 01-7.5-7.5V127.504a7.5 7.5 0 017.5-7.5H461a7.5 7.5 0 017.5 7.5V504.5a7.5 7.5 0 01-7.5 7.5z"
                fill="#bf2e4a"
              />
              <path
                d="M423.498 120.004h-50.002a7.5 7.5 0 00-7.5 7.5V504.5a7.5 7.5 0 007.5 7.5h50.002V120.004z"
                fill="#ce3a50"
              />
              <path
                d="M461 512a7.474 7.474 0 005.316-2.211l-37.515-37.517a7.472 7.472 0 00-2.251-1.541c-.076-.034-.152-.075-.23-.107a7.486 7.486 0 00-1.814-.473 7.549 7.549 0 00-1.008-.076c-.064 0-.131.008-.195.009a7.553 7.553 0 00-1.236.128c-.053.01-.104.027-.156.038a7.433 7.433 0 00-1.899.683c-.067.035-.13.079-.196.116a7.45 7.45 0 00-1.619 1.222L378.469 512H461z"
                fill="#a82645"
              />
              <path
                d="M51 120.004a7.5 7.5 0 00-7.5 7.5V504.5A7.5 7.5 0 0051 512h327.496V120.004H51z"
                fill="#ed5565"
              />
              <path
                d="M238.506 120.004V67.501c0-28.949 23.553-52.501 52.502-52.501 28.939 0 52.486 23.538 52.5 52.475l-.002.026v52.503h15V67.54l.002-.039c0-37.22-30.28-67.501-67.5-67.501-37.221 0-67.502 30.281-67.502 67.501v52.503h15z"
                fill="#ccd1d9"
              />
              <path
                d="M278.5 67.501C278.5 30.281 248.22 0 211 0c-37.221 0-67.502 30.281-67.502 67.501v110.003a7.5 7.5 0 0015 0V67.501C158.498 38.552 182.051 15 211 15c28.939 0 52.486 23.538 52.5 52.475l-.002.026v110.003a7.5 7.5 0 0015 0V67.54l.002-.039z"
                fill="#e6e9ed"
              />
              <path fill="#da4453" d="M348.5 120h29.999v392H348.5z" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;

//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
