import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const INITIAL_STATE = {
  cart: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: action.payload.cart };
    case REMOVE_FROM_CART:
      return { ...state, cart: action.payload.cart };
    default:
      return state;
  }
};
