import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";

const Menu = () => {
  const state = useSelector(state => state.products);

  return (
    <div className="my-8 w-full h-screen ">
      <div className="my-8 w-full">
        <div className="container w-9/12 mx-auto px-6">
          <h1 className="font-bold text-2xl mt-6 border-b-8">
            {state.products[0].title}
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {state.products[0].items.map(item => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  menu={true}
                />
              );
            })}
          </div>
        </div>
        <div className="container w-9/12 mx-auto px-6">
          <h1 className="font-bold text-2xl mt-6 border-b-8">
            {state.products[1].title}
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {state.products[1].items.map(item => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  menu={true}
                />
              );
            })}
          </div>
        </div>
        <div className="container w-9/12 mx-auto px-6">
          <h1 className="font-bold text-2xl mt-6 border-b-8">
            {state.products[2].title}
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {state.products[2].items.map(item => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  menu={true}
                />
              );
            })}
          </div>
        </div>
        <div className="container w-9/12 mx-auto px-6">
          <h1 className="font-bold text-2xl mt-6 border-b-8">
            {state.products[3].title}
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {state.products[3].items.map(item => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  menu={true}
                />
              );
            })}
          </div>
        </div>
        <div className="container w-9/12 mx-auto px-6">
          <h1 className="font-bold text-2xl mt-6 border-b-8">
            {state.products[4].title}
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {state.products[4].items.map(item => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  menu={true}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
