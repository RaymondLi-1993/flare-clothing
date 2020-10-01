import Axios from "axios";
import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_USER,
  CREATE_ORDER,
  CLEAR_CART,
} from "./types";

export const fetchProducts = () => async dispatch => {
  let response = await Axios.get(`/api/products`);

  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const addToCart = item => (dispatch, getState) => {
  const cart = getState().cart.cart.slice();
  let alreadyExist = false;

  cart.forEach(elem => {
    if (elem.id === item.id) {
      alreadyExist = true;
      elem.count++;
    }
  });

  if (!alreadyExist) {
    cart.push({ ...item, count: 1 });
  }
  dispatch({ type: ADD_TO_CART, payload: { cart } });
};

export const removeFromCart = id => (dispatch, getState) => {
  const cart = getState()
    .cart.cart.slice()
    .filter(item => {
      return parseInt(id) !== item.id;
    });

  dispatch({ type: REMOVE_FROM_CART, payload: { cart } });
};

export const clearCart = data => (dispatch, getState) => {
  let cart = getState().cart.cart;
  cart = data;

  dispatch({ type: CLEAR_CART, payload: { cart } });
};

export const fetchUser = () => async dispatch => {
  let response = await Axios.get(`/api/currentUser`);

  dispatch({ type: FETCH_USER, payload: response.data });
};

export const createOrder = order => async dispatch => {
  let response = await Axios.post(`/api/orders`, order);

  dispatch({ type: CREATE_ORDER, payload: response.data });
};
