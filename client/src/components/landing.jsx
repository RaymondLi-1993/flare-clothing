import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, fetchUser } from "../actions";
import Slide from "./slide";

const Landing = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state);
  const state = useSelector(state => state.products);
  const getWidth = () => window.innerWidth;

  console.log(store);

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
        <div className=" border-solid border-black border-8 w-full h-xxxl m-0 p-0 flex items-center overflow-hidden relative ">
          <div
            className="h-full flex flex-col md:flex-row transform ease-out"
            style={{ width: `${getWidth() * state.products.length}px` }}
          >
            {state.products.map(items => {
              return (
                <Slide
                  key={items.id}
                  content={items.imageUrl}
                  title={items.title}
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
