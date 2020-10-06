import { clearShipping, createOrder } from "../actions";
import { CREATE_SHIPPING, CLEAR_SHIPPING } from "../actions/types";

const INTIAL_STATE = {};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_SHIPPING:
      return action.payload;
    case CLEAR_SHIPPING:
      return INTIAL_STATE;
    default:
      return state;
  }
};
