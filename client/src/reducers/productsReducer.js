import { FETCH_PRODUCTS } from "../actions/types";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
