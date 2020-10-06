import React from "react";
import { useSelector } from "react-redux";
import History from "../history";

import Items from "./items";

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  const user = useSelector(state => state.user);
  const total = useSelector(state => state.cart.total);

  return (
    <>
      <div className="w-screen h-screen flex justify-center">
        <div className="container  mt-12 flex flex-col w-9/12 h-full">
          {cart.map(item => {
            return <Items key={item.id} otherProps={{ ...item }} />;
          })}
          <div className="flex w-full justify-end self-center">
            <div className="mr-6">
              {total !== 0 ? `Total: $${total}` : null}
            </div>
            <div>
              <button
                onClick={
                  user
                    ? () => History.push(`/shipping`)
                    : () => History.push(`/login`)
                }
                className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-1 px-2 rounded"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
