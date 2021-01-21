import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, fetchUser } from "../actions";
import Slide from "./slide";

const Landing = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.products);
  const getWidth = () => window.innerWidth;

  useEffect(() => {
    try {
      dispatch(fetchProducts());
      dispatch(fetchUser());
    } catch (error) {
      throw error;
    }
  }, [dispatch]);

  if (state) {
    return (
      <div className="w-full h-screen">
        <div className="w-full h-12 bg-black hidden md:flex md:flex-row items-center ">
          {state.products.map(elem => {
            return (
              <div
                className={
                  "w-1/5 text-red-500 text-center font-openSans text-lg font-thin"
                }
              >
                {elem.title}
              </div>
            );
          })}
        </div>
        <div className="w-full h-full m-0 p-0 flex items-center overflow-hidden">
          <div
            className="h-full flex flex-col lg:flex-row transform ease-out"
            style={{ width: `${getWidth() * state.products.length}px` }}
          >
            {state.products.map(items => {
              return (
                <Slide
                  key={items.id}
                  content={items.imageUrl}
                  routeName={items.routeName}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default Landing;
