import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../actions/index";

const Items = ({ otherProps }) => {
  const { name, imageUrl, count, price, id } = otherProps;
  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="w-full h-32 flex flex-col border-t-4 border-solid border-gray-200">
      <div className="w-full h-full overflow-hidden flex items-center">
        <img
          className="object-cover w-24 h-24 "
          alt={`${name}`}
          src={`${imageUrl}`}
        ></img>
        <div className="w-full h-full flex items-center">
          <div className="ml-32 w-3/12">{name}</div>
          <div className="ml-32 w-3/12">{`$${price}`}</div>
          <div className="ml-32 w-3/12">{`Quantity:   ${count}`}</div>
          <button
            id={id}
            onClick={event => handleClick(event.target.id)}
            className="ml-32 w-3/12 shadow-none"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
