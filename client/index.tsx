import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
// import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import combineReducers from './reducers/mainReducer';
import CalendarBoard from './components/CalendarBoard';
import "./styling.css";


let store = createStore(combineReducers, applyMiddleware(thunk));
// let store = configureStore(combineReducers, applyMiddleware(thunk))

document.addEventListener('DOMContentLoaded', function() {
  render(
    <Provider store={store}>
      <CalendarBoard/>
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);
});
