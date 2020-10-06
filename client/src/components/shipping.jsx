import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../actions/index";
import History from "../history";

const Shipping = () => {
  const shippingDetails = useSelector(state => state.shipping);
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm({
    defaultValues: shippingDetails,
  });

  const onSubmit = data => {
    dispatch(createOrder(data));
    History.push(`/order`);
  };

  return (
    <div className="py-6">
      <div className="flex bg-white overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <form className="w-full p-8 lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-semibold text-gray-700 text-left">
            Check Out
          </h2>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-xs font-bold mb-2">
              Email Address
            </label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
              name="email"
              ref={register({ required: true })}
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-xs font-bold mb-2">
                Name
              </label>
            </div>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="text"
              name="name"
              ref={register({ required: true })}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-xs font-bold mb-2">
              Address
            </label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="text"
              name="address"
              ref={register({ required: true })}
            />
            <div className="mt-4">
              <label className="block text-gray-700 text-xs font-bold mb-2">
                State
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                name="state"
                ref={register({ required: true })}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-xs font-bold mb-2">
                Zip
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                name="zip"
                ref={register({ required: true })}
              />
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-yellow-500 text-black font-bold py-2 px-4 w-full rounded hover:bg-yellow-700">
              Continue
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>

            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
          <div className=" lg:block lg:w-1/2 bg-cover"></div>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
