import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createOrder, clearCart } from "../actions/index";

import Items from "./items";

const Cart = () => {
  const [hidden, setHidden] = useState(false);
  const [email, setEmail] = useState(``);
  const [name, setName] = useState(``);
  const [address, setAddress] = useState(``);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const user = useSelector(state => state.user);

  let total = 0;
  const renderTotal = () => {
    for (let elem of cart) {
      total += parseInt(elem.price) * parseInt(elem.count);
    }
  };
  renderTotal();

  const renderForm = () => {
    if (!user) {
      alert(`Please Log In To Proceed!`);
    } else {
      setHidden(!hidden);
    }
  };

  const handleSubmit = (event, email, name, address, total, cart) => {
    event.preventDefault();
    dispatch(createOrder({ email, name, address, total, cart }));
    dispatch(clearCart([]));
    setAddress(``);
    setEmail(``);
    setName(``);
    setHidden(false);
  };

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
                onClick={() => renderForm()}
                className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-1 px-2 rounded"
              >
                Proceed
              </button>
            </div>
          </div>
          <div
            className="flex w-6/12 justify-center self-center container mt-12 h-xl"
            style={hidden ? null : { display: `none` }}
          >
            <form
              className="w-full max-w-lg mb-12"
              onSubmit={event =>
                handleSubmit(event, email, name, address, total, cart)
              }
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    value={address}
                    onChange={event => setAddress(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button
                    className="w-full shadow bg-yellow-500 hover:bg-yellow-700 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
