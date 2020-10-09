import Axios from "axios";
import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_USER,
  CREATE_SHIPPING,
  CLEAR_CART,
  ORDER,
  CLEAR_ORDER,
  CLEAR_SHIPPING,
  CLEAR_TOTAL,
} from "./types";

export const fetchProducts = () => async dispatch => {
  let response = await Axios.get(`/api/products`);

  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const addToCart = item => (dispatch, getState) => {
  const cart = getState().cart.cart;
  let alreadyExist = false;
  let total = 0;
  let totalCount = 0;

  cart.forEach(elem => {
    if (elem.id === item.id) {
      alreadyExist = true;
      elem.count++;
    }
  });

  if (!alreadyExist) {
    cart.push({ ...item, count: 1 });
  }

  cart.forEach(elem => {
    total += elem.count * elem.price;
    totalCount += elem.count;
  });

  dispatch({
    type: ADD_TO_CART,
    payload: { cart },
    total: total,
    totalCount: totalCount,
  });
};

export const removeFromCart = id => (dispatch, getState) => {
  let total = 0;
  let totalCount = 0;

  const cart = getState().cart.cart.filter(item => {
    return parseInt(id) !== item.id;
  });

  cart.forEach(elem => {
    total += elem.count * elem.price;
    totalCount += elem.count;
  });

  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cart },
    total: total,
    totalCount: totalCount,
  });
};

export const clearCart = () => dispatch => {
  dispatch({ type: CLEAR_CART });
};

export const fetchUser = () => async dispatch => {
  let response = await Axios.get(`/api/currentUser`);

  dispatch({ type: FETCH_USER, payload: response.data });
};

export const createOrder = data => dispatch => {
  const order = data;

  dispatch({ type: CREATE_SHIPPING, payload: order });
};

export const order = data => async dispatch => {
  let response = await Axios.post(`/api/orders`, data);

  dispatch({ type: ORDER, payload: response.data });
};

export const clearOrder = () => dispatch => {
  dispatch({ type: CLEAR_ORDER });
};

export const clearShipping = () => dispatch => {
  dispatch({ type: CLEAR_SHIPPING });
};
