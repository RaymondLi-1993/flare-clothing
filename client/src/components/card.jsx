import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/index";

const Card = ({ name, price, image, id }) => {
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
    <div className="bg-black grid-cols-1 shadow-lg rounded-lg overflow-hidden m-auto cursor-pointer w-full h-xl">
      <img alt={`${name}`} src={`${image}`} className="w-full h-l"></img>
      <div className="w-full h-24 flex items-center justify-center m-auto">
        <div className="text-white">
          {name}
          <div className="text-white">{`$${price}`}</div>
          <button
            id={id}
            onClick={event => {
              handleClick(event.target.id);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
