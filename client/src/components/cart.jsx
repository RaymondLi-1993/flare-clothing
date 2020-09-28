import React from "react";
import { useSelector } from "react-redux";

import Items from "./items";

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  let total = 0;
  const renderTotal = () => {
    for (let elem of cart) {
      total += parseInt(elem.price) * parseInt(elem.count);
    }
  };
  renderTotal();

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="container  mt-12 flex flex-col w-9/12 h-full">
        {cart.map(item => {
          return <Items key={item.id} otherProps={{ ...item }} />;
        })}
        <div className="flex w-10/12 justify-end">
          <div className="justify-end">
            {total !== 0 ? `Total: $${total}` : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
