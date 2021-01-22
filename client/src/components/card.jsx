import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/index";
import { Rating } from "../icons/icons";
import History from "../history";
import Modal from "react-modal";

const Card = ({ name, price, image, id }) => {
  Modal.setAppElement("#root");
  const dispatch = useDispatch();
  const state = useSelector(state => state.products);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const afterOpenModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const handleClick = id => {
    const products = state.products;
    const array = products
      .map(elem => {
        return elem.items;
      })
      .flat(1);
    const item = array.filter(item => {
      if (parseInt(id) === item.id) {
        return item;
      }
    })[0];
    dispatch(addToCart(item));
    History.push(`/cart`);
  };

  return (
    <div className="bg-gray-800 rounded-sm w-full h-96">
      <div className="shadow-lg rounded-lg overflow-hidden m-auto h-80 w-full">
        <div
          className="w-full h-full bg-cover bg-center cursor-pointer"
          onClick={() => afterOpenModal()}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </div>
      <div className="w-full h-16 flex">
        <div className="w-2/3 h-full flex flex-col items-start justify-center">
          <div className="text-white px-5 text-base font-Nunito">{name}</div>
          <div className="text-white px-5 text-sm font-openSans font-thin">{`$${price}`}</div>
        </div>
        <div className="w-1/3 h-full flex flex-row items-center justify-center">
          <button
            id={id}
            className="w-8 h-8"
            onClick={event => {
              handleClick(event.target.id);
            }}
            style={{ outline: `none` }}
          >
            <svg
              className="w-full h-full text-white m-auto cursor-pointer pointer-events-none"
              style={{ outline: `none` }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} name={name} price={price} image={image}>
        <div onClick={() => afterOpenModal()} className="w-full h-full">
          <div className="container m-auto flex flex-col md:flex-row h-full w-full">
            <div className="w-full h-1/2  md:w-1/2 md:h-full flex items-center justify-center">
              <div
                className="w-2/3 h-2/3 bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div>
            </div>
            <div className="w-full h-1/2 md:w-1/2 md:h-full px-6">
              <h1 className="font-bold font-openSans text-4xl p-6 mt-6 text-center">
                {name}
              </h1>
              <div className="container m-auto flex flex-col w-full h-2/3">
                <h1 className="text-2xl font-Nunito font-bold p-4">
                  Description:
                </h1>
                <p className="font-Nunito p-4 m-2 leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  culpa repellendus cum sequi nulla eaque quidem perspiciatis
                  velit voluptas, voluptate eius nemo, dolore cupiditate neque
                  qui explicabo odio expedita modi. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Blanditiis aperiam ipsa
                  perferendis deserunt. Expedita, voluptates harum, nulla eos
                  adipisci laudantium fuga itaque repellat esse, aperiam saepe
                  aliquam ducimus ratione quisquam?
                </p>
                <div className="flex px-4">
                  <Rating />
                  <Rating />
                  <Rating />
                  <Rating />
                </div>
                <h1 className="text-xs px-6">Reviews</h1>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Card;
