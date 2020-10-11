import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, fetchUser } from "../actions";
import Slide from "./slide";

const Landing = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state);
  const state = useSelector(state => state.products);
  const getWidth = () => window.innerWidth;

  console.log(state);

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
      <div className="w-full h-full">
        <div className="w-full h-12 bg-black hidden md:flex md:flex-row items-center ">
          <div className="w-1/5 text-red-300 text-center">HATS</div>
          <div className="w-1/5 text-red-400 text-center">SNEAKERS</div>
          <div className="w-1/5 text-red-500 text-center">JACKETS</div>
          <div className="w-1/5 text-red-600 text-center">WOMEN</div>
          <div className="w-1/5 text-red-700 text-center">MEN</div>
        </div>
        <div className="w-full h-xxxl m-0 p-0 flex items-center overflow-hidden relative ">
          <div
            className="h-full flex flex-col md:flex-row transform ease-out"
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
