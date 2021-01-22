import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  REMOVE_QUANTITY,
} from "../actions/types";

const INITIAL_STATE = {
  totalCount: 0,
  total: 0,
  cart: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        totalCount: action.totalCount,
        total: action.total,
        cart: action.payload.cart,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        total: action.total,
        cart: action.payload.cart,
        totalCount: action.totalCount,
      };

    case REMOVE_QUANTITY:
      return {
        ...state,
        totalCount: action.totalCount,
        total: action.total,
        cart: action.payload.cart,
      };

    case CLEAR_CART:
      return { ...state, totalCount: 0, total: 0, cart: [] };

    default:
      return state;
  }
};
