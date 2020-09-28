import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import "./tailwind.output.css";

import App from "./components/App";
import Reducers from "./reducers";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(`state`, serializedState);
  } catch (error) {
    throw error;
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem(`state`);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    throw error;
  }
}

const persistedState = loadFromLocalStorage();

const STORE = createStore(
  Reducers,
  persistedState,
  applyMiddleware(reduxThunk)
);

STORE.subscribe(() => saveToLocalStorage(STORE.getState()));

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById("root")
);
