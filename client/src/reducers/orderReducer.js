import { ORDER, CLEAR_ORDER } from "../actions/types";

const INITIAL_STATE = null;

export const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDER:
      return action.payload || false;
    case CLEAR_ORDER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
