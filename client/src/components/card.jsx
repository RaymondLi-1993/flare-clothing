import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/index";

const Card = ({ name, price, image, id, menu }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.products);

  const handleClick = id => {
    const products = state.products;
    const array = products
      .map(elem => {
        return elem.items;
      })
      .flat(1);
    const item = array.filter(item => {
      if (parseInt(id) === item.id) {
        return item;
      }
    })[0];
    dispatch(addToCart(item));
  };
  return (
    <div
      className={
        menu
          ? "bg-black shadow-lg rounded-lg overflow-hidden m-auto w-full h-64 md:h-l"
          : "bg-black shadow-lg rounded-lg overflow-hidden m-auto w-full h-l md:h-xl"
      }
    >
      <div
        className="flex items-end justify-end h-l w-full bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
          height: `80%`,
          width: `auto`,
        }}
      ></div>
      <div
        className={
          menu
            ? " w-full h-12 relative flex items-center justify-center m-auto"
            : "w-full h-24  relative flex items-center justify-center m-auto"
        }
      >
        <div
          className={
            menu
              ? "text-white text-xs w-6/12 mr-8 md:w-10/12 md:text-sm md:mr-0 lg:text-sm lg:w-6/12 lg:mr-6 lg:mt-6 italic font-bold"
              : "text-white w-6/12 text-xs mr-8 mb-4 sm:text-sm sm:ml-4 md:mr-16 md:w-6/12 md:text-sm lg:text-base lg:ml-6  italic font-bold"
          }
        >
          {name}
          <div className="text-white self-center not-italic">{`$${price}`}</div>
          <button
            id={id}
            onClick={event => {
              handleClick(event.target.id);
            }}
            className={
              menu
                ? "absolute top-0 right-0 mr-3 mt-2 sm:mr-6 bg-orange-400 p-2 rounded-full text-white mx-5 hover:bg-orange-500 focus:outline-none focus:bg-orange-500"
                : "absolute top-0 right-0 ml-6 mt-3  md:mr-6 md:mt-6 bg-orange-400 p-2 rounded-full text-white mx-5 hover:bg-orange-500 focus:outline-none focus:bg-orange-500"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={
                menu
                  ? "md:h-5 md:w-5 h-3 w-3 lg:h-8 lg:w-8 pointer-events-none cursor-pointer"
                  : "h-8 w-8  md:h-8 md:w-8  pointer-events-none cursor-pointer"
              }
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
