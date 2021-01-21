import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";

const Menu = () => {
  const state = useSelector(state => state.products);
  const products = [...state.products];

  return (
    <div className="my-8 w-full">
      <div className="container m-auto px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {products.map(elem => {
            return elem.items.map(item => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.imageUrl}
                  name={item.name}
                  price={item.price}
                />
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
