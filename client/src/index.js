import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { loadState, saveState } from "./localStorage";
import reduxThunk from "redux-thunk";
import "./tailwind.output.css";

import App from "./components/App";
import Reducers from "./reducers";

const persistedState = loadState();

const STORE = createStore(
  Reducers,
  persistedState,
  applyMiddleware(reduxThunk)
);

STORE.subscribe(() => {
  saveState(STORE.getState());
});

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById("root")
);
