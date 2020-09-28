import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "./card";

const Hats = ({ match }) => {
  const state = useSelector(state => state.products);
  const { routeName } = useParams();
  const { products } = state;
  const renderList = products.find(item => {
    return item.routeName === routeName;
  });
  const { items } = renderList;

  return (
    <>
      <h1>{routeName}</h1>
      <div className="w-screen h-full flex items-center justify-center">
        <div className=" mt-12 w-10/12 h-full box-border m-0 p-0 overflow-hidden grid grid-cols-3 gap-2">
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
    </>
  );
};

export default Hats;
