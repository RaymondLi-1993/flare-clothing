import React from "react";
import { useSelector } from "react-redux";
import History from "../history";

import Items from "./items";

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  const user = useSelector(state => state.user);
  const total = useSelector(state => state.cart.total);

  if (cart.length === 0) {
    return (
      <div className="w-full h-screen">
        <div className="flex items-center justify-center w-full h-full">
          <h1 className="text-6xl font-bold">No Items in cart</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex justify-center ">
        <div className="container mt-12 flex flex-col w-9/12 h-full">
          {cart.map(item => {
            return <Items key={item.id} otherProps={{ ...item }} />;
          })}
          <div className="flex w-full items-center justify-end self-center">
            <div className="mr-6 font-bold mt-4 text-xs sm:text-sm md:text-lg">
              {total !== 0 ? `Total: $${total} USD` : null}
            </div>
            <div className="flex mt-4">
              <button
                onClick={() => History.push(`/menu`)}
                className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-1 px-2 rounded mr-2 text-xs sm:text-sm md:text-base"
              >
                Continue Shopping
              </button>
              <button
                onClick={
                  user
                    ? () => History.push(`/shipping`)
                    : () => History.push(`/login`)
                }
                className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-1 px-2 rounded text-xs sm:text-sm md:text-base"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
