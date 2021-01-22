import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { clearCart, order, clearOrder, clearShipping } from "../actions/index";
import History from "../history";
import Modal from "react-modal";
import Items from "./items";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const Order = () => {
  Modal.setAppElement("#root");
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cart);
  const total = useSelector(state => state.cart.total);
  const shippingDetails = useSelector(state => state.shipping);
  const purchaseInfo = useSelector(state => state.order);
  const [state, setState] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setDisabled(!disabled);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      dispatch(order({ id, amount: total * 100, cart, shippingDetails }));
      try {
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleClick = () => {
    dispatch(clearCart());
    dispatch(clearOrder());
    dispatch(clearShipping());
    setDisabled(!disabled);
    History.push(`/`);
  };

  return (
    <div>
      <div className="py-6 w-full mb-12">
        <div className="flex bg-gray-300 overflow-hidden mx-auto w-10/12">
          <div className="w-full p-8 lg:w-1/2">
            <div className=" bg-gray-200 rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
              <h1 className="text-m font-semibold text-gray-700 text-left m-6">
                {`Email Address:  ${shippingDetails.email}`}
              </h1>
              <h1 className="text-m font-semibold text-gray-700 text-left m-6">
                {`Name: ${shippingDetails.name}`}
              </h1>
              <h1 className="text-m font-semibold text-gray-700 text-left m-6">
                {`Address: ${shippingDetails.address}`}
              </h1>{" "}
              <h1 className="text-m font-semibold text-gray-700 text-left m-6">
                {`State: ${shippingDetails.state}`}
              </h1>{" "}
              <h1 className="text-m font-semibold text-gray-700 text-left m-6">
                {`Zip: ${shippingDetails.zip}`}
              </h1>
            </div>
            <div className="mt-8 bg-gray-200  h-6 shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
              <form>
                <CardElement options={CARD_ELEMENT_OPTIONS} disabled={stripe} />
              </form>
            </div>
            <div className="mt-4 flex items-center justify-between"></div>
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => History.push(`/shipping`)}
                className="bg-gray-700 text-white font-bold py-2 px-4 w-1/2 m-2 rounded hover:bg-gray-500"
              >
                Back
              </button>
              <div className="bg-yellow-500 text-black font-bold py-2 px-4 w-1/2 m-2 rounded hover:bg-yellow-700 text-center cursor-pointer">
                {disabled === false ? (
                  <button
                    className="text-white font-bold text-none"
                    onClick={handleSubmit}
                    style={{ outline: `none` }}
                  >
                    Submit
                  </button>
                ) : (
                  <div className="flex flex-row justify-center items-center w-full ">
                    <svg
                      className="animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                    >
                      <path
                        fill="#444"
                        d="M15 8c0 3.9-3.1 7-7 7s-7-3-7-7H0c0 4 3.6 8 8 8s8-3.6 8-8h-1z"
                      />
                    </svg>
                    <span className="font-bold px-2 text-white">
                      Processing
                    </span>
                  </div>
                )}
              </div>
            </div>
            <h1 className="mt-12 text-l text-red-600">
              *Use credit card number 4242424242424242 10/22 and any CVC/ZIP*
            </h1>
          </div>
          <div className="hidden lg:block lg:w-1/2 bg-cover">
            <div className="container mt-2 ml-12 flex flex-col justify-items-end w-9/12 h-full">
              <h1 className="font-bold">Total-${total} USD</h1>
              {cart.map(item => {
                return <Items key={item.id} otherProps={{ ...item }} />;
              })}
            </div>
          </div>
        </div>
      </div>
      {purchaseInfo && (
        <Modal isOpen={state}>
          <div className="w-full h-full container">
            <div className="w-full h-48 flex justify-center">
              <div className="alert flex flex-col items-center p-5 rounded mt-8">
                <div className="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                  <span className="text-green-500">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="h-6 w-6"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                    </svg>
                  </span>
                </div>
                <div className="ml-4">
                  <div className="text-base font-semibold md:text-xl text-green-800">
                    Success! You're order has been placed!
                  </div>
                </div>
                <div className="text-base mt-8 font-bold md:text-2xl">
                  ORDER {purchaseInfo._id}
                </div>
              </div>
            </div>
            <div className="w-3/12 mt-12 h-xl m-auto flex flex-col items-center">
              <ul>
                <li className="flex justify-between mb-4">
                  <div>Name:</div>
                  <div>{purchaseInfo.name}</div>
                </li>
                <li className="flex justify-between mb-4">
                  <div>Email:</div>
                  <div>{purchaseInfo.email}</div>
                </li>
                <li className="flex justify-between mb-4">
                  <div>Total:</div>
                  <div>${purchaseInfo.total} USD</div>
                </li>
                <li className="flex justify-between mb-4">
                  <div>Date</div>
                  <div>{purchaseInfo.date}</div>
                </li>
                <button
                  onClick={handleClick}
                  className=" m-auto mt-2 bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-500"
                >
                  Continue
                </button>
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Order;

// <div class="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
//    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
// </div>
