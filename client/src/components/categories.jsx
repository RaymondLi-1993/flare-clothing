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
      <div className="my-8 w-full">
        <div className="container w-9/12 mx-auto px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-6">
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
