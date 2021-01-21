import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../actions/index";

import { FlareLogo, Hamburger, ShoppingCart } from "../icons/icons";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const state = useSelector(state => state.products);
  const totalCount = useSelector(state => state.cart.totalCount);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const renderButton = () => {
    switch (user) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <li>
            <a href="api/logout">Log out</a>
          </li>
        );
    }
  };

  if (state !== null) {
    return (
      <>
        <nav className="relative flex items-center justify-between px-2 py-3 bg-gray-800">
          <div className="container flex flex-col items-center justify-between m-auto md:flex-row">
            <div className="w-full relative flex justify-between md:w-1/3 md:justify-start">
              <Link to="/" className="flex items-center justify-center lg:px-4">
                <FlareLogo />
                <h1 className="text-red-500 text-2xl font-bold font-nunito italic md:text-xl lg:text-3xl">
                  Flare-Clothing
                </h1>
              </Link>
              <button
                className="cursor-pointer px-3 py-1 text-white md:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setOpen(!open)}
              >
                <Hamburger />
              </button>
            </div>
            <div
              className={
                "md:flex md:w-2/3 items-center" + (open ? " flex" : " hidden")
              }
            >
              <ul className="w-full my-2 mx-6 flex flex-col items-center md:flex-row md:justify-evenly md:h-16 lg:justify-end">
                <Link
                  to="/menu"
                  className="mx-1 text-xl text-white cursor-pointer font-openSans hover:text-red-500 md:text-base lg:text-lg lg:mx-4"
                >
                  Browse
                </Link>
                {state.products.map(elem => {
                  return (
                    <Link
                      to={`/category/${elem.routeName}`}
                      className="mx-1 text-xl text-white font-openSans cursor-pointer hover:text-red-500 md:text-base lg:text-lg lg:mx-4"
                    >
                      {elem.title}
                    </Link>
                  );
                })}
                <ul className="mx-1 text-xl text-white font-openSans cursor-pointer hover:text-red-500 md:text-base lg:text-lg lg:mx-4">
                  {renderButton()}
                </ul>
                <div className="flex justify-center h-12 w-12 m-0 p-0 md:block relative lg:h-14 lg:w-14">
                  <Link
                    to="/cart"
                    className="relative text-gray-700 hover:text-gray-600"
                  >
                    <ShoppingCart />
                    <span
                      className={
                        totalCount === 0
                          ? `hidden`
                          : "text-white absolute top-1/2 ml-8 md:ml-8 md:mt-8 text-xl"
                      }
                    >
                      {totalCount}
                    </span>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  return <div></div>;
};

export default Header;
