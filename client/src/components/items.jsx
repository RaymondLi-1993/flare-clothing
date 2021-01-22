import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addToCart, removeQuantity } from "../actions/index";

import { LeftArrow, RightArrow } from "../icons/icons";

const Items = ({ otherProps }) => {
  const { name, imageUrl, count, price, id } = otherProps;
  const state = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(removeFromCart(id));
  };

  const addCart = id => {
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

  const removeQty = id => {
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
    dispatch(removeQuantity(item));
  };

  return (
    <div className="w-full flex flex-col border-t-4 border-solid border-gray-200">
      <div className="w-full h-32 flex flex-row overflow-hidden items-center">
        <div className="w-2/12 h-24">
          <img
            className="object-cover w-24 h-24"
            alt={`${name}`}
            src={`${imageUrl}`}
          ></img>
        </div>
        <div className="w-10/12 h-full flex-grow flex flex-row justify-evenly items-center md:px-6">
          <div className="text-xs sm:text-sm lg:text-base w-4/12 text-center">
            {name}
          </div>
          <div className="text-xs sm:text-sm lg:text-base w-2/12 text-center">{`$${price}`}</div>
          <div className="w-4/12 flex justify-evenly">
            <button
              disabled={count === 1}
              id={id}
              onClick={event => {
                removeQty(event.target.id);
              }}
              style={{ outline: `none` }}
            >
              <LeftArrow count={count} />
            </button>
            <div className="text-xs text-center sm:text-sm lg:text-base">{`Qty: ${count}`}</div>
            <button
              id={id}
              onClick={event => {
                addCart(event.target.id);
              }}
              style={{ outline: `none` }}
            >
              <RightArrow />
            </button>
          </div>
          <button
            id={id}
            onClick={event => handleClick(event.target.id)}
            style={{ outline: `none` }}
            className="text-xs w-2/12 shadow-none font-bold sm:text-sm lg:text-base "
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
