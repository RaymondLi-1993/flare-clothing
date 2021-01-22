import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "./card";

const Hats = () => {
  const state = useSelector(state => state.products);
  const { routeName } = useParams();
  const { products } = state;
  const renderList = products.find(item => {
    return item.routeName === routeName;
  });
  const { items } = renderList;

  return (
    <>
      <div className="my-8 w-full">
        <div className="w-10/12 container m-auto px-6">
          <h1 className="font-bold text-2xl border-b-8 uppercase">
            {routeName}
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {items.map(item => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.imageUrl}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hats;
