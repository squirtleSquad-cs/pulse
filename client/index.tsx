import React from "react";
import { render } from "react-dom";
import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import combineReducers from "./reducers/mainReducer";
import CalendarBoard from "./components/CalendarBoard";
import "./styling.css";
import App from "./App"

let store = configureStore({ reducer: combineReducers });
// let store = configureStore(combineReducers, applyMiddleware(thunk))

document.addEventListener("DOMContentLoaded", function () {
  render(
    <Provider store={store}>
      <App />
      {/* <CalendarBoard/> */}
    </Provider>,
    document.body.appendChild(document.createElement("div"))
  );
});
