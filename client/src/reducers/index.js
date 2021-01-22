import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";
import { shippingReducer } from "./shippingReducer";
import { orderReducer } from "./orderReducer";

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  shipping: shippingReducer,
  order: orderReducer,
});
